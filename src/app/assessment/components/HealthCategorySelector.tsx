'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { healthCategories } from '@/data/healthConditions'
import { HealthCategory } from '@/types/assessment'

interface HealthCategorySelectorProps {
  onSelect: (category: HealthCategory) => void
  selectedCategory?: HealthCategory
}

export function HealthCategorySelector({ onSelect, selectedCategory }: HealthCategorySelectorProps) {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          What is your primary health concern?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Select the category that best describes your main health issue. This will help us provide
          the most relevant recommendations for you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {healthCategories.map((category) => (
          <Card
            key={category.id}
            className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
              selectedCategory?.id === category.id
                ? 'ring-2 ring-blue-500 bg-blue-50'
                : 'hover:shadow-md'
            } ${hoveredCategory === category.id ? 'transform -translate-y-1' : ''}`}
            onClick={() => onSelect(category)}
            onMouseEnter={() => setHoveredCategory(category.id)}
            onMouseLeave={() => setHoveredCategory(null)}
          >
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="text-3xl">{category.icon}</div>
                <div className="flex-1">
                  <CardTitle className="text-lg">{category.name}</CardTitle>
                </div>
                {selectedCategory?.id === category.id && (
                  <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                )}
              </div>
              <CardDescription className="text-sm">
                {category.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="text-xs font-medium text-gray-700 mb-2">
                  Common symptoms:
                </div>
                <div className="flex flex-wrap gap-1">
                  {category.symptoms.slice(0, 3).map((symptom) => (
                    <Badge key={symptom} variant="outline" className="text-xs">
                      {symptom}
                    </Badge>
                  ))}
                  {category.symptoms.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{category.symptoms.length - 3} more
                    </Badge>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {selectedCategory && (
        <div className="flex justify-center mt-8">
          <Button
            size="lg"
            variant="gradient"
            onClick={() => {
              // This will be handled by the parent component to move to next step
            }}
          >
            Continue to Assessment
          </Button>
        </div>
      )}
    </div>
  )
}