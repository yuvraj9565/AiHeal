'use client'

import { useState, useEffect } from 'react'
import { ProgressBar } from './ProgressBar'
import { HealthCategorySelector } from './HealthCategorySelector'
import { QuestionRenderer } from './QuestionRenderer'
import { AssessmentState, AssessmentResponse, HealthCategory } from '@/types/assessment'
import { healthCategories, getQuestionsForCategory } from '@/data/healthConditions'
import { useRouter } from 'next/navigation'

interface AssessmentWizardProps {
  assessmentState: AssessmentState
  setAssessmentState: React.Dispatch<React.SetStateAction<AssessmentState>>
}

const ASSESSMENT_STEPS = [
  'Health Category',
  'Symptoms & Severity',
  'Lifestyle & Diet',
  'Goals & Additional Info',
  'Review & Complete'
]

export function AssessmentWizard({ assessmentState, setAssessmentState }: AssessmentWizardProps) {
  const [selectedCategory, setSelectedCategory] = useState<HealthCategory | null>(null)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [questions, setQuestions] = useState(getQuestionsForCategory(''))
  const router = useRouter()

  // Calculate current step based on assessment state
  const getCurrentStep = () => {
    if (!selectedCategory) return 1
    if (currentQuestionIndex < 3) return 2
    if (currentQuestionIndex < 7) return 3
    if (currentQuestionIndex < questions.length) return 4
    return 5
  }

  const currentStep = getCurrentStep()

  useEffect(() => {
    // Update questions when category is selected
    if (selectedCategory) {
      const categoryQuestions = getQuestionsForCategory(selectedCategory.name)
      setQuestions(categoryQuestions)
      setCurrentQuestionIndex(0)
    }
  }, [selectedCategory])

  const handleCategorySelect = (category: HealthCategory) => {
    setSelectedCategory(category)
    setAssessmentState(prev => ({
      ...prev,
      responses: [
        ...prev.responses.filter(r => r.questionKey !== 'primaryCategory'),
        {
          questionKey: 'primaryCategory',
          answer: category.name
        }
      ]
    }))
  }

  const handleAnswer = (answer: any) => {
    const currentQuestion = questions[currentQuestionIndex]
    if (!currentQuestion) return

    setAssessmentState(prev => ({
      ...prev,
      responses: [
        ...prev.responses.filter(r => r.questionKey !== currentQuestion.key),
        {
          questionKey: currentQuestion.key,
          answer: answer
        }
      ]
    }))
  }

  const handleNext = () => {
    if (currentStep === 1) {
      // Moving from category selection to questions
      return
    }

    if (currentStep === 5) {
      // Complete assessment
      handleComplete()
      return
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1)
    } else {
      // Move to review step
      setAssessmentState(prev => ({
        ...prev,
        currentStep: 5
      }))
    }
  }

  const handlePrevious = () => {
    if (currentStep === 1) return

    if (currentStep === 5) {
      // Return to last question
      setCurrentQuestionIndex(questions.length - 1)
      return
    }

    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1)
    } else {
      // Return to category selection
      setSelectedCategory(null)
      setCurrentQuestionIndex(0)
    }
  }

  const handleComplete = async () => {
    try {
      const response = await fetch('/api/assessment/complete', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          responses: assessmentState.responses,
          category: selectedCategory?.id
        })
      })

      if (response.ok) {
        const data = await response.json()
        router.push(`/results/${data.assessmentId}`)
      } else {
        console.error('Failed to complete assessment')
      }
    } catch (error) {
      console.error('Error completing assessment:', error)
    }
  }

  const getCurrentQuestion = () => {
    if (currentStep === 1 || !selectedCategory) return null
    return questions[currentQuestionIndex]
  }

  const getCurrentAnswer = () => {
    const currentQuestion = getCurrentQuestion()
    if (!currentQuestion) return undefined

    const response = assessmentState.responses.find(r => r.questionKey === currentQuestion.key)
    return response?.answer
  }

  const canGoNext = () => {
    if (currentStep === 1) return !!selectedCategory
    if (currentStep === 5) return true

    const currentQuestion = getCurrentQuestion()
    if (!currentQuestion) return false

    const answer = getCurrentAnswer()
    if (!currentQuestion.required) return true

    if (currentQuestion.type === 'multiple-choice') {
      return Array.isArray(answer) && answer.length > 0
    }

    return answer !== undefined && answer !== null && answer !== ''
  }

  return (
    <div className="space-y-8">
      <ProgressBar
        currentStep={currentStep}
        totalSteps={ASSESSMENT_STEPS.length}
        stepTitles={ASSESSMENT_STEPS}
      />

      {currentStep === 1 && (
        <HealthCategorySelector
          onSelect={handleCategorySelect}
          selectedCategory={selectedCategory || undefined}
        />
      )}

      {currentStep > 1 && currentStep < 5 && selectedCategory && getCurrentQuestion() && (
        <QuestionRenderer
          question={getCurrentQuestion()!}
          answer={getCurrentAnswer()}
          onAnswer={handleAnswer}
          onNext={handleNext}
          onPrevious={handlePrevious}
          isFirst={currentQuestionIndex === 0}
          isLast={currentQuestionIndex === questions.length - 1}
          canGoNext={canGoNext()}
        />
      )}

      {currentStep === 5 && (
        <div className="text-center space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Ready to Get Your Recommendations!
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Based on your responses, we'll generate personalized recommendations for diet,
            exercise, habits, and medical guidance tailored to your health needs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <div className="p-4 bg-blue-50 rounded-lg">
              <div className="text-blue-600 font-medium">Health Focus</div>
              <div className="text-gray-900">{selectedCategory?.name}</div>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <div className="text-green-600 font-medium">Questions Answered</div>
              <div className="text-gray-900">{assessmentState.responses.length}</div>
            </div>
          </div>

          <div className="flex space-x-4 justify-center">
            <button
              onClick={handlePrevious}
              className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              Review Answers
            </button>
            <button
              onClick={handleComplete}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 button-gradient"
            >
              Get My Recommendations
            </button>
          </div>
        </div>
      )}
    </div>
  )
}