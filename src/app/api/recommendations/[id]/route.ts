import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const assessmentId = params.id

    // Fetch assessment with recommendations
    const assessment = await prisma.assessment.findUnique({
      where: { id: assessmentId },
      include: {
        responses: true,
        recommendations: true,
        progress: true
      }
    })

    if (!assessment) {
      return NextResponse.json(
        { error: 'Assessment not found' },
        { status: 404 }
      )
    }

    // Parse recommendations from database
    const recommendations = {
      diet: JSON.parse(
        assessment.recommendations.find(r => r.category === 'diet')?.content || '{}'
      ),
      exercise: JSON.parse(
        assessment.recommendations.find(r => r.category === 'exercise')?.content || '{}'
      ),
      habits: JSON.parse(
        assessment.recommendations.find(r => r.category === 'habits')?.content || '{}'
      ),
      doctor: JSON.parse(
        assessment.recommendations.find(r => r.category === 'doctor')?.content || '{}'
      ),
      summary: assessment.progress?.data ? JSON.parse(assessment.progress.data).summary : {}
    }

    return NextResponse.json({
      success: true,
      assessment: {
        id: assessment.id,
        createdAt: assessment.createdAt,
        responses: assessment.responses.map(r => ({
          questionKey: r.questionKey,
          answer: JSON.parse(r.answer)
        }))
      },
      recommendations
    })
  } catch (error) {
    console.error('Error fetching recommendations:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}