import { AssessmentResponse } from '@/types/assessment'
import { Recommendations } from '@/types/recommendations'
import { getDietRecommendations } from '@/data/dietPlans'
import { getExerciseRecommendations } from '@/data/exercisePlans'
import { getHabitRecommendations } from '@/data/habitRecommendations'
import { getDoctorReferral } from '@/data/doctorReferrals'

export async function generateRecommendations(
  responses: AssessmentResponse[],
  category: string
): Promise<Recommendations> {
  // Parse responses to determine user preferences
  const dietPreference = getDietPreference(responses)
  const severity = getSeverity(responses)
  const goals = getGoals(responses)

  // Get base recommendations for category
  const baseDietRecommendations = getDietRecommendations(category)
  const baseExerciseRecommendations = getExerciseRecommendations(category)
  const baseHabitRecommendations = getHabitRecommendations(category)
  const baseDoctorReferral = getDoctorReferral(category)

  // Personalize recommendations based on responses
  const personalizedDiet = personalizeDietRecommendations(baseDietRecommendations, dietPreference, responses)
  const personalizedExercise = personalizeExerciseRecommendations(baseExerciseRecommendations, severity, responses)
  const personalizedHabits = personalizeHabitRecommendations(baseHabitRecommendations, goals, responses)
  const personalizedDoctor = personalizeDoctorReferral(baseDoctorReferral, severity, responses)

  return {
    diet: personalizedDiet,
    exercise: personalizedExercise,
    habits: personalizedHabits,
    doctor: personalizedDoctor,
    summary: generateSummary(responses, category, severity)
  }
}

function getDietPreference(responses: AssessmentResponse[]): string {
  const dietResponse = responses.find(r => r.questionKey === 'dietPreference')
  return dietResponse?.answer as string || 'vegetarian'
}

function getSeverity(responses: AssessmentResponse[]): string {
  const severityResponse = responses.find(r => r.questionKey === 'severity')
  const severityValue = severityResponse?.answer as number || 5

  if (severityValue <= 3) return 'mild'
  if (severityValue <= 7) return 'moderate'
  return 'severe'
}

function getGoals(responses: AssessmentResponse[]): string[] {
  const goalsResponse = responses.find(r => r.questionKey === 'primaryGoals')
  return Array.isArray(goalsResponse?.answer) ? goalsResponse.answer as string[] : []
}

function personalizeDietRecommendations(
  baseRecommendations: any,
  dietPreference: string,
  responses: AssessmentResponse[]
) {
  // For now, return base recommendations. In a real implementation,
  // this would customize based on user responses, allergies, preferences, etc.
  return {
    ...baseRecommendations,
    dietPreference: dietPreference,
    personalizedNotes: generateDietNotes(responses)
  }
}

function personalizeExerciseRecommendations(
  baseRecommendations: any,
  severity: string,
  responses: AssessmentResponse[]
) {
  // Adjust intensity based on severity
  let adjustedIntensity = baseRecommendations.intensity
  if (severity === 'severe') {
    adjustedIntensity = 'beginner'
  } else if (severity === 'mild') {
    adjustedIntensity = 'intermediate'
  }

  return {
    ...baseRecommendations,
    intensity: adjustedIntensity,
    personalizedNotes: generateExerciseNotes(responses)
  }
}

function personalizeHabitRecommendations(
  baseRecommendations: any,
  goals: string[],
  responses: AssessmentResponse[]
) {
  // Prioritize habits based on user goals
  const prioritizedHabits = baseRecommendations.habits.map((habit: any) => ({
    ...habit,
    priority: calculateHabitPriority(habit, goals, responses)
  })).sort((a: any, b: any) => b.priority - a.priority)

  return {
    ...baseRecommendations,
    habits: prioritizedHabits,
    personalizedNotes: generateHabitNotes(responses)
  }
}

function personalizeDoctorReferral(
  baseReferral: any,
  severity: string,
  responses: AssessmentResponse[]
) {
  // Adjust urgency based on severity
  let adjustedUrgency = baseReferral.urgency
  if (severity === 'severe') {
    adjustedUrgency = 'within-week'
  } else if (severity === 'mild') {
    adjustedUrgency = 'within-month'
  }

  return {
    ...baseReferral,
    urgency: adjustedUrgency,
    personalizedNotes: generateDoctorNotes(responses)
  }
}

function generateDietNotes(responses: AssessmentResponse[]): string[] {
  const notes: string[] = []

  const triggers = responses.find(r => r.questionKey === 'triggers')?.answer as string[] || []
  if (triggers.includes('Stress')) {
    notes.push('Consider stress-reducing foods like chamomile tea, dark chocolate, and foods rich in magnesium.')
  }

  const activityLevel = responses.find(r => r.questionKey === 'activityLevel')?.answer as string || ''
  if (activityLevel.includes('Sedentary')) {
    notes.push('Focus on portion control and nutrient-dense foods to maintain healthy weight.')
  }

  return notes
}

function generateExerciseNotes(responses: AssessmentResponse[]): string[] {
  const notes: string[] = []

  const activityLevel = responses.find(r => r.questionKey === 'activityLevel')?.answer as string || ''
  if (activityLevel.includes('Sedentary')) {
    notes.push('Start with gentle activities like walking and gradually increase intensity.')
  }

  const stressLevel = responses.find(r => r.questionKey === 'stressLevel')?.answer as string || ''
  if (stressLevel.includes('High')) {
    notes.push('Include stress-reducing exercises like yoga, tai chi, or walking in nature.')
  }

  return notes
}

function generateHabitNotes(responses: AssessmentResponse[]): string[] {
  const notes: string[] = []

  const sleepQuality = responses.find(r => r.questionKey === 'sleepQuality')?.answer as string || ''
  if (sleepQuality.includes('Poor')) {
    notes.push('Prioritize sleep hygiene habits as they significantly impact overall health.')
  }

  const stressLevel = responses.find(r => r.questionKey === 'stressLevel')?.answer as string || ''
  if (stressLevel.includes('High')) {
    notes.push('Focus on stress management techniques as they are crucial for your health goals.')
  }

  return notes
}

function generateDoctorNotes(responses: AssessmentResponse[]): string[] {
  const notes: string[] = []

  const duration = responses.find(r => r.questionKey === 'duration')?.answer as string || ''
  if (duration.includes('6+ months')) {
    notes.push('Given the long duration of symptoms, a thorough medical evaluation is recommended.')
  }

  const previousTreatments = responses.find(r => r.questionKey === 'previousTreatments')?.answer as boolean
  if (previousTreatments) {
    notes.push('Be sure to discuss previous treatments with your doctor to help guide the diagnostic process.')
  }

  return notes
}

function calculateHabitPriority(habit: any, goals: string[], responses: AssessmentResponse[]): number {
  let priority = 1

  // Increase priority for habits that match user goals
  goals.forEach(goal => {
    if (habit.title.toLowerCase().includes(goal.toLowerCase()) ||
        habit.description.toLowerCase().includes(goal.toLowerCase())) {
      priority += 2
    }
  })

  // Increase priority for habits that address user concerns
  responses.forEach(response => {
    if (response.questionKey === 'stressLevel' && response.answer === 'High' &&
        habit.title.toLowerCase().includes('stress')) {
      priority += 3
    }
    if (response.questionKey === 'sleepQuality' && response.answer === 'Poor' &&
        habit.title.toLowerCase().includes('sleep')) {
      priority += 3
    }
  })

  return priority
}

function generateSummary(responses: AssessmentResponse[], category: string, severity: string): any {
  const primaryCategory = category.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())

  return {
    primaryFocus: primaryCategory,
    severity: severity,
    keyRecommendations: [
      `Follow personalized ${primaryCategory.toLowerCase()} diet plan`,
      'Incorporate recommended exercises into your routine',
      'Build sustainable healthy habits',
      'Consider medical consultation if symptoms persist'
    ],
    expectedTimeline: 'You should start noticing improvements within 2-4 weeks of consistent implementation.',
    successIndicators: [
      'Reduced symptom severity',
      'Increased energy levels',
      'Better sleep quality',
      'Improved overall wellbeing'
    ],
    followUpSchedule: [
      'Review progress after 2 weeks',
      'Adjust recommendations as needed',
      'Consider doctor consultation if no improvement'
    ]
  }
}