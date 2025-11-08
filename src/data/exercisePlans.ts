import { ExerciseRecommendation, Exercise } from '@/types/recommendations';

// Digestive Health Exercise Plan
export const digestiveHealthExercise: ExerciseRecommendation = {
  category: 'low-impact',
  exercises: [
    {
      name: 'Gentle Walking',
      description: 'Light walking to stimulate digestion without stress',
      instructions: [
        'Walk at a comfortable pace',
        'Focus on deep breathing',
        'Walk for 10-15 minutes after meals',
        'Maintain good posture'
      ],
      duration: '15-20 minutes',
      targetMuscles: ['Legs', 'Core']
    },
    {
      name: 'Cat-Cow Stretch',
      description: 'Gentle spinal movement to aid digestion',
      instructions: [
        'Start on hands and knees',
        'Inhale and arch back (cow pose)',
        'Exhale and round back (cat pose)',
        'Repeat 10-15 times'
      ],
      reps: 15,
      targetMuscles: ['Spine', 'Core']
    },
    {
      name: 'Knees to Chest',
      description: 'Gentle massage for digestive organs',
      instructions: [
        'Lie on your back',
        'Gently pull knees to chest',
        'Hold for 30 seconds',
        'Release and repeat 3-5 times'
      ],
      reps: 5,
      duration: '30 seconds',
      targetMuscles: ['Lower back', 'Abdomen']
    },
    {
      name: 'Abdominal Breathing',
      description: 'Deep breathing to stimulate digestive function',
      instructions: [
        'Lie on back with knees bent',
        'Place hands on abdomen',
        'Breathe deeply into belly',
        'Exhale slowly',
        'Repeat for 5-10 minutes'
      ],
      duration: '5-10 minutes',
      targetMuscles: ['Diaphragm']
    }
  ],
  frequency: 'Daily, especially after meals',
  duration: '15-20 minutes per session',
  intensity: 'beginner',
  safetyPrecautions: [
    'Wait 30 minutes after eating before exercising',
    'Stop if you feel pain or discomfort',
    'Avoid exercises that put pressure on abdomen',
    'Stay hydrated'
  ],
  warmUp: ['Gentle stretching', 'Deep breathing'],
  coolDown: ['Relaxation breathing', 'Gentle stretches']
};

// Weight Management Exercise Plan
export const weightManagementExercise: ExerciseRecommendation = {
  category: 'moderate-cardio',
  exercises: [
    {
      name: 'Brisk Walking',
      description: 'Cardiovascular exercise for weight management',
      instructions: [
        'Walk at a brisk pace (3-4 mph)',
        'Swing arms naturally',
        'Maintain good posture',
        'Focus on steady breathing'
      ],
      duration: '30-45 minutes',
      targetMuscles: ['Full body']
    },
    {
      name: 'Bodyweight Squats',
      description: 'Strength training for lower body',
      instructions: [
        'Stand with feet shoulder-width apart',
        'Lower hips back and down',
        'Keep chest lifted and back straight',
        'Lower until thighs are parallel to floor',
        'Push through heels to return to start'
      ],
      sets: 3,
      reps: 12,
      targetMuscles: ['Quadriceps', 'Glutes', 'Hamstrings']
    },
    {
      name: 'Push-ups',
      description: 'Upper body strength training',
      instructions: [
        'Start in plank position',
        'Lower body until chest nearly touches floor',
        'Push back up to starting position',
        'Modify on knees if needed'
      ],
      sets: 3,
      reps: 10,
      targetMuscles: ['Chest', 'Shoulders', 'Triceps']
    },
    {
      name: 'Jumping Jacks',
      description: 'Cardiovascular exercise',
      instructions: [
        'Start with feet together, arms at sides',
        'Jump feet apart while raising arms overhead',
        'Jump back to starting position',
        'Maintain steady rhythm'
      ],
      sets: 3,
      reps: 20,
      targetMuscles: ['Full body']
    }
  ],
  frequency: '4-5 days per week',
  duration: '30-45 minutes per session',
  intensity: 'intermediate',
  safetyPrecautions: [
    'Start slowly and gradually increase intensity',
    'Proper form is more important than speed',
    'Stay hydrated',
    'Listen to your body'
  ],
  warmUp: ['5 minutes light cardio', 'Dynamic stretches'],
  coolDown: ['Static stretching', 'Deep breathing']
};

// Energy & Fatigue Exercise Plan
export const energyFatigueExercise: ExerciseRecommendation = {
  category: 'moderate-cardio',
  exercises: [
    {
      name: 'Morning Yoga Flow',
      description: 'Gentle yoga to boost energy',
      instructions: [
        'Start with sun salutation sequence',
        'Flow through poses smoothly',
        'Focus on breath coordination',
        'Include gentle backbends'
      ],
      duration: '15-20 minutes',
      targetMuscles: ['Full body']
    },
    {
      name: 'Brisk Morning Walk',
      description: 'Cardio exercise to energize',
      instructions: [
        'Walk at moderate pace',
        'Focus on upright posture',
        'Breathe deeply',
        'Enjoy natural light if possible'
      ],
      duration: '20-30 minutes',
      targetMuscles: ['Legs', 'Core']
    },
    {
      name: 'Jumping Rope',
      description: 'Quick cardio energy boost',
      instructions: [
        'Start with 30 seconds jumping',
        'Rest for 30 seconds',
        'Build up gradually',
        'Maintain good form'
      ],
      sets: 5,
      duration: '30 seconds',
      targetMuscles: ['Full body']
    }
  ],
  frequency: '4-5 days per week',
  duration: '20-30 minutes per session',
  intensity: 'beginner to intermediate',
  safetyPrecautions: [
    'Don\'t exercise if extremely fatigued',
    'Start with gentle movements',
    'Progress gradually',
    'Stay hydrated'
  ],
  warmUp: ['Gentle stretching', 'Shoulder rolls'],
  coolDown: ['Deep breathing', 'Gentle stretches']
};

// Mental Health Exercise Plan
export const mentalHealthExercise: ExerciseRecommendation = {
  category: 'mind-body',
  exercises: [
    {
      name: 'Mindful Walking',
      description: 'Walking with focus on present moment',
      instructions: [
        'Walk slowly and deliberately',
        'Notice sensations in feet and legs',
        'Focus on breath',
        'Observe surroundings without judgment'
      ],
      duration: '15-20 minutes',
      targetMuscles: ['Legs', 'Mind']
    },
    {
      name: 'Yoga with Meditation',
      description: 'Gentle yoga poses followed by meditation',
      instructions: [
        'Begin with gentle stretches',
        'Move through restorative poses',
        'End with 5-10 minutes meditation',
        'Focus on deep breathing'
      ],
      duration: '30-45 minutes',
      targetMuscles: ['Full body', 'Mind']
    },
    {
      name: 'Tai Chi Basic Movements',
      description: 'Slow, flowing movements for mental calm',
      instructions: [
        'Perform slow, circular movements',
        'Coordinate breath with movement',
        'Maintain relaxed focus',
        'Move with intention'
      ],
      duration: '20-30 minutes',
      targetMuscles: ['Full body', 'Mind']
    },
    {
      name: 'Breathing Exercises',
      description: 'Various breathing techniques for stress relief',
      instructions: [
        'Practice box breathing (4-4-4-4)',
        'Try alternate nostril breathing',
        'Use diaphragmatic breathing',
        'Focus on exhale longer than inhale'
      ],
      duration: '10-15 minutes',
      targetMuscles: ['Diaphragm', 'Mind']
    }
  ],
  frequency: 'Daily',
  duration: '20-30 minutes per session',
  intensity: 'beginner',
  safetyPrecautions: [
    'Create quiet, comfortable space',
    'Don\'t force uncomfortable positions',
    'Focus on how movements feel',
    'Stop if feeling overwhelmed'
  ],
  warmUp: ['Gentle stretching', 'Breathing awareness'],
  coolDown: ['Relaxation', 'Meditation']
};

// Joint & Muscle Pain Exercise Plan
export const jointMusclePainExercise: ExerciseRecommendation = {
  category: 'low-impact',
  exercises: [
    {
      name: 'Swimming or Water Aerobics',
      description: 'Low-impact exercise in water',
      instructions: [
        'Swim gentle laps or water walk',
        'Use water resistance for strength',
        'Keep movements smooth and controlled',
        'Focus on full range of motion'
      ],
      duration: '20-30 minutes',
      targetMuscles: ['Full body']
    },
    {
      name: 'Gentle Range of Motion',
      description: 'Joint mobility exercises',
      instructions: [
        'Slowly move each joint through full range',
        'Start with small movements, increase gradually',
        'Never move into pain',
        'Repeat 5-10 times per joint'
      ],
      reps: 10,
      targetMuscles: ['All joints']
    },
    {
      name: 'Chair Exercises',
      description: 'Seated exercises for joint health',
      instructions: [
        'Sit tall in sturdy chair',
        'Perform leg lifts, arm circles',
        'Include gentle spinal twists',
        'Maintain good posture'
      ],
      sets: 2,
      reps: 10,
      targetMuscles: ['Legs', 'Arms', 'Core']
    }
  ],
  frequency: '3-5 days per week',
  duration: '20-30 minutes per session',
  intensity: 'beginner',
  safetyPrecautions: [
    'Never exercise through sharp pain',
    'Start with minimal resistance',
    'Warm up properly',
    'Use supportive equipment if needed'
  ],
  warmUp: ['Gentle movement', 'Heat therapy if helpful'],
  coolDown: ['Gentle stretching', 'Relaxation']
};

// Export all exercise plans
export const exercisePlans: Record<string, ExerciseRecommendation> = {
  'digestive-health': digestiveHealthExercise,
  'weight-management': weightManagementExercise,
  'energy-fatigue': energyFatigueExercise,
  'mental-health': mentalHealthExercise,
  'joint-muscle-pain': jointMusclePainExercise,
  'heart-circulation': weightManagementExercise, // Cardio-focused
  'skin-hair': mentalHealthExercise, // Stress reduction focus
  'respiratory': energyFatigueExercise, // Breathing focus
  'womens-health': mentalHealthExercise, // Hormone balance focus
  'general-wellness': energyFatigueExercise // General energy and wellness
};

export const getExerciseRecommendations = (category: string): ExerciseRecommendation => {
  return exercisePlans[category] || exercisePlans['general-wellness'];
};