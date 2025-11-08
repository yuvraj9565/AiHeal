'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import {
  Heart,
  Brain,
  Activity,
  Apple,
  Stethoscope,
  TrendingUp,
  Clock,
  Download,
  Share2,
  Printer,
  ChevronRight,
  CheckCircle,
  AlertCircle
} from 'lucide-react'
import { Recommendations } from '@/types/recommendations'
import { cn } from '@/lib/utils'

export default function ResultsPage() {
  const params = useParams()
  const assessmentId = params.id as string
  const [recommendations, setRecommendations] = useState<Recommendations | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (assessmentId) {
      fetchRecommendations()
    }
  }, [assessmentId])

  const fetchRecommendations = async () => {
    try {
      const response = await fetch(`/api/recommendations/${assessmentId}`)
      if (response.ok) {
        const data = await response.json()
        setRecommendations(data.recommendations)
      } else {
        setError('Failed to load recommendations')
      }
    } catch (err) {
      setError('Error loading recommendations')
    } finally {
      setLoading(false)
    }
  }

  const handlePrint = () => {
    window.print()
  }

  const handleDownload = () => {
    if (recommendations) {
      const dataStr = JSON.stringify(recommendations, null, 2)
      const dataBlob = new Blob([dataStr], { type: 'application/json' })
      const url = URL.createObjectURL(dataBlob)
      const link = document.createElement('a')
      link.href = url
      link.download = `aiheal-recommendations-${assessmentId}.json`
      link.click()
      URL.revokeObjectURL(url)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-8">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Generating Your Recommendations...</h2>
            <p className="text-gray-600">This will just take a moment.</p>
          </div>
        </div>
      </div>
    )
  }

  if (error || !recommendations) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-8">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center">
            <AlertCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Error Loading Recommendations</h2>
            <p className="text-gray-600 mb-4">{error || 'Recommendations not found'}</p>
            <Button onClick={() => window.history.back()}>
              Go Back
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-8" id="print-content">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Heart className="h-12 w-12 text-blue-600" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Your Personalized Health Recommendations
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Based on your assessment, here are your personalized recommendations for diet, exercise, habits, and medical guidance.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8 no-print">
          <Button variant="outline" onClick={handlePrint} className="flex items-center space-x-2">
            <Printer className="w-4 h-4" />
            <span>Print</span>
          </Button>
          <Button variant="outline" onClick={handleDownload} className="flex items-center space-x-2">
            <Download className="w-4 h-4" />
            <span>Download PDF</span>
          </Button>
          <Button variant="outline" className="flex items-center space-x-2">
            <Share2 className="w-4 h-4" />
            <span>Share</span>
          </Button>
        </div>

        {/* Summary Card */}
        <Card className="mb-8 print-break">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-green-600" />
              <span>Assessment Summary</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">
                  {recommendations.summary.primaryFocus}
                </div>
                <div className="text-sm text-gray-600">Primary Focus</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-2 capitalize">
                  {recommendations.summary.severity}
                </div>
                <div className="text-sm text-gray-600">Severity Level</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 mb-2">
                  {recommendations.summary.expectedTimeline}
                </div>
                <div className="text-sm text-gray-600">Expected Timeline</div>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold mb-3">Key Recommendations:</h4>
              <ul className="space-y-2">
                {recommendations.summary.keyRecommendations.map((recommendation, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-sm">{recommendation}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Diet Recommendations */}
          <Card className="print-break">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Apple className="w-5 h-5 text-green-600" />
                <span>Diet Recommendations</span>
              </CardTitle>
              <CardDescription>
                Personalized nutrition plan for your health needs
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2">Foods to Emphasize:</h4>
                <div className="flex flex-wrap gap-2">
                  {recommendations.diet.foodsToEmphasize.slice(0, 6).map((food, index) => (
                    <Badge key={index} variant="default" className="bg-green-100 text-green-800">
                      {food}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Foods to Limit/Avoid:</h4>
                <div className="flex flex-wrap gap-2">
                  {recommendations.diet.foodsToAvoid.slice(0, 6).map((food, index) => (
                    <Badge key={index} variant="destructive" className="bg-red-100 text-red-800">
                      {food}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Hydration Guidelines:</h4>
                <p className="text-sm text-gray-600">
                  {recommendations.diet.hydration.dailyWaterIntake}
                </p>
                <div className="mt-2">
                  <span className="text-sm font-medium">Beneficial beverages:</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {recommendations.diet.hydration.beneficialBeverages.slice(0, 4).map((beverage, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {beverage}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Exercise Recommendations */}
          <Card className="print-break">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Activity className="w-5 h-5 text-blue-600" />
                <span>Exercise Recommendations</span>
              </CardTitle>
              <CardDescription>
                Tailored exercise plan for your condition and fitness level
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-sm font-medium">Frequency:</span>
                  <p className="text-sm text-gray-600">{recommendations.exercise.frequency}</p>
                </div>
                <div>
                  <span className="text-sm font-medium">Duration:</span>
                  <p className="text-sm text-gray-600">{recommendations.exercise.duration}</p>
                </div>
                <div>
                  <span className="text-sm font-medium">Intensity:</span>
                  <p className="text-sm text-gray-600 capitalize">{recommendations.exercise.intensity}</p>
                </div>
                <div>
                  <span className="text-sm font-medium">Category:</span>
                  <p className="text-sm text-gray-600 capitalize">{recommendations.exercise.category}</p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Recommended Exercises:</h4>
                <div className="space-y-3">
                  {recommendations.exercise.exercises.slice(0, 3).map((exercise, index) => (
                    <div key={index} className="border-l-2 border-blue-200 pl-3">
                      <div className="font-medium text-sm">{exercise.name}</div>
                      <div className="text-xs text-gray-600 mt-1">
                        {exercise.duration || `${exercise.sets} sets × ${exercise.reps} reps`}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Safety Precautions:</h4>
                <ul className="text-sm space-y-1">
                  {recommendations.exercise.safetyPrecautions.slice(0, 3).map((precaution, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <AlertCircle className="w-3 h-3 text-yellow-500 mt-0.5 flex-shrink-0" />
                      <span>{precaution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Habits Recommendations */}
          <Card className="print-break">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Brain className="w-5 h-5 text-purple-600" />
                <span>Healthy Habits</span>
              </CardTitle>
              <CardDescription>
                Lifestyle changes to support your health goals
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2">Top Habits to Build:</h4>
                <div className="space-y-3">
                  {recommendations.habits.habits.slice(0, 3).map((habit, index) => (
                    <div key={index} className="border-l-2 border-purple-200 pl-3">
                      <div className="font-medium text-sm">{habit.title}</div>
                      <div className="text-xs text-gray-600 mt-1">{habit.description}</div>
                      <div className="mt-2">
                        <Badge variant="outline" className="text-xs">
                          {habit.difficulty} • {habit.timeframe}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Implementation Plan:</h4>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-medium">Start tomorrow:</span>
                    <ul className="mt-1 space-y-1">
                      {recommendations.habits.implementationPlan.immediateActions.slice(0, 2).map((action, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <ChevronRight className="w-3 h-3 text-purple-500 mt-0.5 flex-shrink-0" />
                          <span>{action}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Doctor Referral */}
          <Card className="print-break">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Stethoscope className="w-5 h-5 text-red-600" />
                <span>Medical Guidance</span>
              </CardTitle>
              <CardDescription>
                When and what type of medical care to consider
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex items-center space-x-2 mb-3">
                  <Clock className="w-4 h-4 text-orange-500" />
                  <span className="font-semibold">When to See a Doctor:</span>
                </div>
                <Badge
                  variant="outline"
                  className={cn(
                    "mb-3",
                    recommendations.doctor.urgency === 'immediate' && "border-red-200 bg-red-50 text-red-800",
                    recommendations.doctor.urgency === 'within-week' && "border-orange-200 bg-orange-50 text-orange-800",
                    recommendations.doctor.urgency === 'within-month' && "border-yellow-200 bg-yellow-50 text-yellow-800",
                    recommendations.doctor.urgency === 'routine' && "border-green-200 bg-green-50 text-green-800"
                  )}
                >
                  {recommendations.doctor.whenToVisit}
                </Badge>
                <p className="text-sm text-gray-600">
                  {recommendations.doctor.whenToVisit}
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Recommended Specialists:</h4>
                <div className="space-y-2">
                  {recommendations.doctor.specialties.slice(0, 2).map((specialty, index) => (
                    <div key={index} className="border-l-2 border-red-200 pl-3">
                      <div className="font-medium text-sm">{specialty.type}</div>
                      <div className="text-xs text-gray-600 mt-1">{specialty.description}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Warning Symptoms:</h4>
                <div className="flex flex-wrap gap-1">
                  {recommendations.doctor.symptoms.slice(0, 4).map((symptom, index) => (
                    <Badge key={index} variant="destructive" className="bg-red-100 text-red-800 text-xs">
                      {symptom}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Success Indicators */}
        <Card className="mt-8 print-break">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-green-600" />
              <span>Success Indicators</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {recommendations.summary.successIndicators.map((indicator, index) => (
                <div key={index} className="text-center p-4 bg-green-50 rounded-lg">
                  <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-green-800">{indicator}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Follow-up Schedule */}
        <Card className="mt-8 print-break">
          <CardHeader>
            <CardTitle>Follow-up Schedule</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recommendations.summary.followUpSchedule.map((followUp, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-semibold text-sm">
                    {index + 1}
                  </div>
                  <p className="text-sm">{followUp}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-12 text-gray-500 text-sm no-print">
          <p>Assessment completed on {new Date().toLocaleDateString()}</p>
          <p className="mt-2">This information is not a substitute for professional medical advice.</p>
        </div>
      </div>
    </div>
  )
}