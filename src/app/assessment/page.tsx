'use client'

import { useState, useEffect } from 'react'
import { AssessmentWizard } from './components/AssessmentWizard'
import { AssessmentState } from '@/types/assessment'

export default function AssessmentPage() {
  const [assessmentState, setAssessmentState] = useState<AssessmentState>({
    currentStep: 1,
    responses: [],
    completed: false
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-8">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Health Assessment
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Answer a few questions about your health to receive personalized recommendations
            for diet, exercise, habits, and medical guidance.
          </p>
        </div>

        <AssessmentWizard
          assessmentState={assessmentState}
          setAssessmentState={setAssessmentState}
        />
      </div>
    </div>
  )
}