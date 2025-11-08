'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Question, AssessmentResponse } from '@/types/assessment'
import { ChevronRight, ChevronLeft } from 'lucide-react'

interface QuestionRendererProps {
  question: Question
  answer?: any
  onAnswer: (answer: any) => void
  onNext: () => void
  onPrevious: () => void
  isFirst: boolean
  isLast: boolean
  canGoNext: boolean
}

export function QuestionRenderer({
  question,
  answer,
  onAnswer,
  onNext,
  onPrevious,
  isFirst,
  isLast,
  canGoNext
}: QuestionRendererProps) {
  const [localAnswer, setLocalAnswer] = useState(answer)

  const handleNext = () => {
    onAnswer(localAnswer)
    onNext()
  }

  const renderQuestionInput = () => {
    switch (question.type) {
      case 'single-choice':
        return (
          <div className="space-y-3">
            {question.options?.map((option, index) => (
              <label
                key={index}
                className={`flex items-center p-4 border rounded-lg cursor-pointer transition-colors ${
                  localAnswer === option
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <input
                  type="radio"
                  name={question.key}
                  value={option}
                  checked={localAnswer === option}
                  onChange={(e) => setLocalAnswer(e.target.value)}
                  className="mr-3"
                />
                <span className="text-gray-900">{option}</span>
              </label>
            ))}
          </div>
        )

      case 'multiple-choice':
        const selectedOptions = Array.isArray(localAnswer) ? localAnswer : []

        return (
          <div className="space-y-3">
            {question.options?.map((option, index) => (
              <label
                key={index}
                className={`flex items-center p-4 border rounded-lg cursor-pointer transition-colors ${
                  selectedOptions.includes(option)
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <input
                  type="checkbox"
                  value={option}
                  checked={selectedOptions.includes(option)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setLocalAnswer([...selectedOptions, option])
                    } else {
                      setLocalAnswer(selectedOptions.filter(item => item !== option))
                    }
                  }}
                  className="mr-3"
                />
                <span className="text-gray-900">{option}</span>
              </label>
            ))}
          </div>
        )

      case 'scale':
        return (
          <div className="space-y-4">
            <div className="flex justify-between text-sm text-gray-600">
              <span>Very mild</span>
              <span>Very severe</span>
            </div>
            <div className="flex justify-between space-x-2">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setLocalAnswer(value)}
                  className={`w-10 h-10 rounded-lg border-2 font-medium transition-colors ${
                    localAnswer === value
                      ? 'border-blue-500 bg-blue-500 text-white'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  {value}
                </button>
              ))}
            </div>
            {localAnswer && (
              <div className="text-center">
                <Badge variant="outline" className="text-lg px-4 py-2">
                  Selected: {localAnswer}/10
                </Badge>
              </div>
            )}
          </div>
        )

      case 'boolean':
        return (
          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => setLocalAnswer(true)}
              className={`p-6 border-2 rounded-lg font-medium transition-colors ${
                localAnswer === true
                  ? 'border-blue-500 bg-blue-50 text-blue-700'
                  : 'border-gray-300 hover:border-gray-400'
              }`}
            >
              Yes
            </button>
            <button
              type="button"
              onClick={() => setLocalAnswer(false)}
              className={`p-6 border-2 rounded-lg font-medium transition-colors ${
                localAnswer === false
                  ? 'border-blue-500 bg-blue-50 text-blue-700'
                  : 'border-gray-300 hover:border-gray-400'
              }`}
            >
              No
            </button>
          </div>
        )

      case 'text':
        return (
          <textarea
            value={localAnswer || ''}
            onChange={(e) => setLocalAnswer(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            rows={4}
            placeholder="Enter your response here..."
          />
        )

      default:
        return (
          <div className="text-red-600">
            Unknown question type: {question.type}
          </div>
        )
    }
  }

  const isAnswerValid = () => {
    if (!question.required) return true

    if (question.type === 'multiple-choice') {
      return Array.isArray(localAnswer) && localAnswer.length > 0
    }

    return localAnswer !== undefined && localAnswer !== null && localAnswer !== ''
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-xl mb-2">{question.text}</CardTitle>
            {question.description && (
              <CardDescription className="text-base">
                {question.description}
              </CardDescription>
            )}
          </div>
          {question.required && (
            <Badge variant="destructive" className="ml-2">
              Required
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {renderQuestionInput()}

        <div className="flex justify-between pt-4">
          <Button
            variant="outline"
            onClick={onPrevious}
            disabled={isFirst}
            className="flex items-center space-x-2"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </Button>

          <Button
            variant="gradient"
            onClick={handleNext}
            disabled={!isAnswerValid()}
            className="flex items-center space-x-2"
          >
            <span>{isLast ? 'Complete Assessment' : 'Next'}</span>
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}