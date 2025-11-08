import { HealthCategory, Question } from '@/types/assessment';

export const healthCategories: HealthCategory[] = [
  {
    id: 'digestive-health',
    name: 'Digestive Health',
    description: 'Issues related to digestion, bloating, and gut health',
    icon: '🦠',
    color: 'green',
    symptoms: ['Bloating', 'Acid reflux', 'Constipation', 'Diarrhea', 'IBS', 'Gas', 'Stomach pain']
  },
  {
    id: 'weight-management',
    name: 'Weight Management',
    description: 'Weight loss, gain, and metabolic concerns',
    icon: '⚖️',
    color: 'blue',
    symptoms: ['Weight gain', 'Weight loss', 'Poor appetite', 'Overeating', 'Slow metabolism']
  },
  {
    id: 'energy-fatigue',
    name: 'Energy & Fatigue',
    description: 'Low energy levels and chronic fatigue',
    icon: '🔋',
    color: 'yellow',
    symptoms: ['Low energy', 'Chronic fatigue', 'Brain fog', 'Sleep issues', 'Afternoon crashes']
  },
  {
    id: 'mental-health',
    name: 'Mental Health',
    description: 'Stress, anxiety, and mood-related concerns',
    icon: '🧠',
    color: 'purple',
    symptoms: ['Stress', 'Anxiety', 'Depression', 'Mood swings', 'Irritability', 'Burnout']
  },
  {
    id: 'joint-muscle-pain',
    name: 'Joint & Muscle Pain',
    description: 'Pain, inflammation, and mobility issues',
    icon: '🦴',
    color: 'red',
    symptoms: ['Joint pain', 'Back pain', 'Muscle aches', 'Arthritis', 'Inflammation', 'Stiffness']
  },
  {
    id: 'heart-circulation',
    name: 'Heart & Circulation',
    description: 'Cardiovascular health and blood circulation',
    icon: '❤️',
    color: 'red',
    symptoms: ['High blood pressure', 'Poor circulation', 'Chest pain', 'Palpitations', 'High cholesterol']
  },
  {
    id: 'skin-hair',
    name: 'Skin & Hair',
    description: 'Skin conditions and hair health issues',
    icon: '✨',
    color: 'pink',
    symptoms: ['Acne', 'Eczema', 'Hair loss', 'Dry skin', 'Rashes', 'Premature aging']
  },
  {
    id: 'respiratory',
    name: 'Respiratory',
    description: 'Breathing issues and respiratory conditions',
    icon: '🌬️',
    color: 'cyan',
    symptoms: ['Breathing difficulties', 'Allergies', 'Asthma', 'Cough', 'Congestion']
  },
  {
    id: 'womens-health',
    name: "Women's Health",
    description: 'Hormonal balance and women-specific health concerns',
    icon: '♀️',
    color: 'pink',
    symptoms: ['Hormonal imbalance', 'Menstrual issues', 'Menopause symptoms', 'PCOS', 'PMS']
  },
  {
    id: 'general-wellness',
    name: 'General Wellness',
    description: 'Preventive care and overall health optimization',
    icon: '🌟',
    color: 'indigo',
    symptoms: ['Low immunity', 'Preventive care', 'Vitality', 'Overall health', 'Aging concerns']
  }
];

export const assessmentQuestions: Question[] = [
  // Step 1: Primary health issue selection
  {
    id: 'primary-category',
    key: 'primaryCategory',
    type: 'single-choice',
    text: 'What is your primary health concern?',
    description: 'Select the category that best describes your main health issue',
    options: healthCategories.map(cat => cat.name),
    required: true
  },

  // Step 2: Severity and duration assessment
  {
    id: 'severity',
    key: 'severity',
    type: 'scale',
    text: 'How severe are your symptoms on a scale of 1-10?',
    description: '1 = Very mild, 10 = Very severe',
    required: true
  },
  {
    id: 'duration',
    key: 'duration',
    type: 'single-choice',
    text: 'How long have you been experiencing these symptoms?',
    options: ['A few days', '1-2 weeks', 'Several weeks', '1-3 months', '3-6 months', '6+ months'],
    required: true
  },
  {
    id: 'specific-symptoms',
    key: 'specificSymptoms',
    type: 'multiple-choice',
    text: 'Which specific symptoms are you experiencing? (Select all that apply)',
    required: true,
    condition: { key: 'primaryCategory', operator: 'equals', value: 'Digestive Health' }
  },
  {
    id: 'triggers',
    key: 'triggers',
    type: 'multiple-choice',
    text: 'What seems to trigger or worsen your symptoms? (Select all that apply)',
    options: ['Certain foods', 'Stress', 'Lack of sleep', 'Physical activity', 'Weather changes', 'Time of day', 'Nothing specific'],
    required: false
  },

  // Step 3: Diet and lifestyle
  {
    id: 'diet-preference',
    key: 'dietPreference',
    type: 'single-choice',
    text: 'What are your dietary preferences?',
    options: ['Vegetarian', 'Non-vegetarian', 'Vegan', 'Other'],
    required: true
  },
  {
    id: 'activity-level',
    key: 'activityLevel',
    type: 'single-choice',
    text: 'How would you describe your activity level?',
    options: ['Sedentary (mostly sitting)', 'Lightly active (1-2 days/week)', 'Moderately active (3-4 days/week)', 'Very active (5+ days/week)'],
    required: true
  },
  {
    id: 'stress-level',
    key: 'stressLevel',
    type: 'single-choice',
    text: 'How would you rate your stress level?',
    options: ['Low', 'Moderate', 'High', 'Very high'],
    required: true
  },
  {
    id: 'sleep-quality',
    key: 'sleepQuality',
    type: 'single-choice',
    text: 'How would you rate your sleep quality?',
    options: ['Poor', 'Fair', 'Good', 'Excellent'],
    required: true
  },

  // Step 4: Additional factors
  {
    id: 'medications',
    key: 'currentMedications',
    type: 'boolean',
    text: 'Are you currently taking any medications for your symptoms?',
    required: false
  },
  {
    id: 'previous-treatments',
    key: 'previousTreatments',
    type: 'boolean',
    text: 'Have you tried any previous treatments for these symptoms?',
    required: false
  },
  {
    id: 'goals',
    key: 'primaryGoals',
    type: 'multiple-choice',
    text: 'What are your primary health goals? (Select up to 3)',
    options: ['Reduce symptoms', 'Improve energy', 'Better sleep', 'Weight management', 'Stress reduction', 'Better digestion', 'Overall wellness'],
    required: true
  }
];

export const getQuestionsForCategory = (category: string): Question[] => {
  // Dynamic question sets based on category
  const categorySpecificQuestions: Record<string, Partial<Question>[]> = {
    'Digestive Health': [
      {
        id: 'digestive-symptoms',
        key: 'specificSymptoms',
        type: 'multiple-choice',
        text: 'Which digestive symptoms are you experiencing? (Select all that apply)',
        options: ['Bloating', 'Acid reflux/heartburn', 'Constipation', 'Diarrhea', 'Gas', 'Stomach pain', 'Nausea', 'Food intolerances'],
        required: true
      }
    ],
    'Weight Management': [
      {
        id: 'weight-goals',
        key: 'weightGoals',
        type: 'single-choice',
        text: 'What are your weight-related goals?',
        options: ['Lose weight', 'Gain weight', 'Maintain current weight', 'Build muscle', 'Improve metabolism'],
        required: true
      }
    ],
    'Energy & Fatigue': [
      {
        id: 'fatigue-pattern',
        key: 'fatiguePattern',
        type: 'single-choice',
        text: 'When do you experience the most fatigue?',
        options: ['Morning', 'Afternoon', 'Evening', 'All day', 'After meals', 'During exercise'],
        required: true
      }
    ],
    'Mental Health': [
      {
        id: 'mental-symptoms',
        key: 'specificSymptoms',
        type: 'multiple-choice',
        text: 'Which mental health symptoms are you experiencing? (Select all that apply)',
        options: ['Anxiety', 'Depression', 'Stress', 'Mood swings', 'Irritability', 'Brain fog', 'Sleep issues', 'Panic attacks'],
        required: true
      }
    ],
    'Joint & Muscle Pain': [
      {
        id: 'pain-locations',
        key: 'painLocations',
        type: 'multiple-choice',
        text: 'Where do you experience pain? (Select all that apply)',
        options: ['Back', 'Neck', 'Shoulders', 'Knees', 'Hands', 'Hips', 'Muscles', 'Joints'],
        required: true
      }
    ]
  };

  // Filter questions based on the selected category
  let questions = [...assessmentQuestions];

  if (categorySpecificQuestions[category]) {
    const categoryQuestions = categorySpecificQuestions[category].map(q => ({
      ...q,
      condition: { key: 'primaryCategory', operator: 'equals', value: category }
    }));
    questions.splice(3, 0, ...categoryQuestions as Question[]);
  }

  return questions;
};