import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { generateRecommendations } from '@/lib/recommendations'
import { AssessmentResponse } from '@/types/assessment'

export async function POST(request: NextRequest) {
  try {
    const { responses, category } = await request.json()

    if (!responses || !Array.isArray(responses) || !category) {
      return NextResponse.json(
        { error: 'Invalid request data' },
        { status: 400 }
      )
    }

    // Create assessment in database
    const assessment = await prisma.assessment.create({
      data: {
        responses: {
          create: responses.map((response: AssessmentResponse) => ({
            questionKey: response.questionKey,
            answer: JSON.stringify(response.answer)
          }))
        }
      },
      include: {
        responses: true
      }
    })

    // Generate recommendations
    const recommendations = await generateRecommendations(responses, category)

    // Save recommendations to database
    await Promise.all([
      prisma.recommendation.create({
        data: {
          assessmentId: assessment.id,
          category: 'diet',
          content: JSON.stringify(recommendations.diet)
        }
      }),
      prisma.recommendation.create({
        data: {
          assessmentId: assessment.id,
          category: 'exercise',
          content: JSON.stringify(recommendations.exercise)
        }
      }),
      prisma.recommendation.create({
        data: {
          assessmentId: assessment.id,
          category: 'habits',
          content: JSON.stringify(recommendations.habits)
        }
      }),
      prisma.recommendation.create({
        data: {
          assessmentId: assessment.id,
          category: 'doctor',
          content: JSON.stringify(recommendations.doctor)
        }
      })
    ])

    // Create progress tracking
    await prisma.progress.create({
      data: {
        assessmentId: assessment.id,
        currentStep: 6,
        completed: true,
        data: JSON.stringify({
          completedAt: new Date().toISOString(),
          healthScore: calculateHealthScore(responses),
          category: category
        })
      }
    })

    return NextResponse.json({
      success: true,
      assessmentId: assessment.id,
      recommendations: recommendations
    })
  } catch (error) {
    console.error('Error completing assessment:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

function calculateHealthScore(responses: AssessmentResponse[]): number {
  // Simple health score calculation
  let score = 70 // Base score

  responses.forEach(response => {
    const answer = response.answer

    if (typeof answer === 'string') {
      const lowerAnswer = answer.toLowerCase()

      // Positive factors
      if (['good', 'excellent', 'active', 'low', 'moderate'].some(word => lowerAnswer.includes(word))) {
        score += 5
      }

      // Negative factors
      if (['severe', 'poor', 'high', 'very high', 'chronic'].some(word => lowerAnswer.includes(word))) {
        score -= 10
      }
    }

    if (typeof answer === 'number') {
      // For scale questions (1-10), lower is better for severity
      if (response.questionKey === 'severity') {
        score += (10 - answer) * 2
      }
    }
  })

  return Math.max(0, Math.min(100, score))
}