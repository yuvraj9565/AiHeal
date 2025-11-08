import { HabitRecommendation, Habit, ImplementationPlan, Milestone } from '@/types/recommendations';

// Digestive Health Habits
export const digestiveHealthHabits: HabitRecommendation = {
  category: 'daily-routines',
  habits: [
    {
      title: 'Mindful Eating Practice',
      description: 'Eat slowly and chew food thoroughly to aid digestion',
      benefits: ['Better nutrient absorption', 'Reduced bloating', 'Improved digestion', 'Greater satisfaction from food'],
      actionSteps: [
        'Sit down to eat without distractions',
        'Chew each bite 20-30 times',
        'Put utensils down between bites',
        'Pay attention to flavors and textures',
        'Stop when 80% full'
      ],
      timeframe: 'Start immediately, build over 2 weeks',
      difficulty: 'moderate',
      frequency: 'Every meal',
      triggers: ['Sitting down to eat'],
      rewards: ['Better digestion', 'Enjoyment of food']
    },
    {
      title: 'Post-Meal Gentle Movement',
      description: 'Light movement after meals to aid digestion',
      benefits: ['Prevents blood sugar spikes', 'Reduces bloating', 'Aids digestion', 'Prevents post-meal fatigue'],
      actionSteps: [
        'Walk for 10-15 minutes after eating',
        'Avoid intense exercise immediately after meals',
        'Practice gentle stretching if walking not possible',
        'Stay upright for 2-3 hours after eating'
      ],
      timeframe: 'Start tomorrow',
      difficulty: 'easy',
      frequency: 'After main meals',
      triggers: ['Finishing meals'],
      rewards: ['Better digestion', 'More energy']
    },
    {
      title: 'Stress Management Before Meals',
      description: 'Reduce stress before eating to support digestive function',
      benefits: ['Better digestion', 'Reduced stomach upset', 'Improved nutrient absorption', 'Mind-body connection'],
      actionSteps: [
        'Take 5 deep breaths before eating',
        'Practice gratitude for food',
        'Create calm eating environment',
        'Avoid stressful conversations during meals'
      ],
      timeframe: 'Start immediately',
      difficulty: 'easy',
      frequency: 'Before each meal',
      triggers: ['Preparing to eat'],
      rewards: ['Calm meals', 'Better digestion']
    }
  ],
  implementationPlan: {
    immediateActions: [
      'Start chewing food more thoroughly',
      'Take 5 deep breaths before meals',
      'Walk for 10 minutes after dinner tonight'
    ],
    week1Goals: [
      'Practice mindful eating at least once daily',
      'Establish post-meal walking routine',
      'Create calm eating environment'
    ],
    month1Goals: [
      'Mindful eating becomes automatic',
      'Consistent post-meal movement routine',
      'Stress management before all meals'
    ],
    trackingMethod: 'Use habit tracker app or journal to mark completed habits daily',
    milestones: [
      {
        title: 'First Week Success',
        description: 'Complete all habits for 7 consecutive days',
        timeframe: '1 week',
        reward: 'Celebrate with favorite healthy meal'
      },
      {
        title: 'Habit Formation',
        description: 'Habits become automatic and feel natural',
        timeframe: '1 month',
        reward: 'New cookbook or cooking gadget'
      }
    ]
  }
};

// Weight Management Habits
export const weightManagementHabits: HabitRecommendation = {
  category: 'lifestyle-modifications',
  habits: [
    {
      title: 'Consistent Meal Timing',
      description: 'Eat meals at regular times to regulate metabolism',
      benefits: ['Stable blood sugar', 'Reduced cravings', 'Better metabolism', 'Improved digestion'],
      actionSteps: [
        'Set regular meal times',
        'Don\'t skip meals',
        'Plan meals in advance',
        'Set phone reminders for meal times'
      ],
      timeframe: 'Start tomorrow',
      difficulty: 'moderate',
      frequency: 'Daily',
      triggers: ['Waking up', 'Midday', 'Evening'],
      rewards: ['Stable energy', 'Reduced cravings']
    },
    {
      title: 'Portion Awareness',
      description: 'Practice mindful portion control without strict measuring',
      benefits: ['Natural portion control', 'Better satisfaction', 'Reduced overeating', 'Mindful eating'],
      actionSteps: [
        'Use smaller plates',
        'Serve food in kitchen, not at table',
        'Wait 20 minutes before second helpings',
        'Eat slowly and mindfully',
        'Stop when satisfied, not stuffed'
      ],
      timeframe: 'Start immediately',
      difficulty: 'moderate',
      frequency: 'Every meal',
      triggers: ['Meal times'],
      rewards: ['Better satisfaction', 'Natural weight management']
    },
    {
      title: 'Healthy Snack Preparation',
      description: 'Prepare healthy snacks in advance to avoid unhealthy choices',
      benefits: ['Avoid unhealthy impulse eating', 'Consistent healthy choices', 'Better nutrition', 'Cost savings'],
      actionSteps: [
        'Plan snacks for week',
        'Prepare portion-controlled snacks',
        'Keep healthy options visible and accessible',
        'Remove unhealthy snacks from sight'
      ],
      timeframe: 'Start this week',
      difficulty: 'moderate',
      frequency: 'Weekly preparation',
      triggers: ['Sunday meal prep'],
      rewards: ['Always have healthy options', 'Better nutrition']
    }
  ],
  implementationPlan: {
    immediateActions: [
      'Plan tomorrow\'s meals today',
      'Prepare one healthy snack today',
      'Use smaller plate for next meal'
    ],
    week1Goals: [
      'Establish regular meal schedule',
      'Practice portion control at all meals',
      'Prepare healthy snacks for week'
    ],
    month1Goals: [
      'Consistent meal timing becomes natural',
      'Intuitive portion control',
      'Healthy snacking habit established'
    ],
    trackingMethod: 'Food journal or app to track meals and snacks',
    milestones: [
      {
        title: 'First Week Consistency',
        description: 'Maintain regular meal schedule for 7 days',
        timeframe: '1 week',
        reward: 'New water bottle or food container'
      },
      {
        title: 'Habit Integration',
        description: 'All eating habits feel natural and automatic',
        timeframe: '1 month',
        reward: 'New workout clothes or cooking class'
      }
    ]
  }
};

// Energy & Fatigue Habits
export const energyFatigueHabits: HabitRecommendation = {
  category: 'daily-routines',
  habits: [
    {
      title: 'Morning Energy Routine',
      description: 'Start day with energy-boosting activities',
      benefits: ['Sustained energy', 'Better focus', 'Reduced caffeine dependence', 'Improved mood'],
      actionSteps: [
        'Wake up at consistent time',
        'Drink glass of water immediately',
        '5 minutes stretching or light movement',
        'Protein-rich breakfast',
        'Natural light exposure'
      ],
      timeframe: 'Start tomorrow',
      difficulty: 'moderate',
      frequency: 'Daily',
      triggers: ['Waking up'],
      rewards: ['Sustained energy', 'Better days']
    },
    {
      title: 'Energy Management Breaks',
      description: 'Take strategic breaks to maintain energy throughout day',
      benefits: ['Sustained energy', 'Better focus', 'Reduced afternoon crashes', 'Improved productivity'],
      actionSteps: [
        'Take 5-minute break every hour',
        'Stretch or move during breaks',
        'Stay hydrated throughout day',
        'Healthy snack between meals if needed',
        'Change tasks to maintain engagement'
      ],
      timeframe: 'Start today',
      difficulty: 'easy',
      frequency: 'Every 1-2 hours',
      triggers: ['Time intervals', 'Energy dips'],
      rewards: ['Consistent energy', 'Better productivity']
    },
    {
      title: 'Evening Wind-Down Routine',
      description: 'Prepare body for restorative sleep',
      benefits: ['Better sleep quality', 'More energy next day', 'Reduced stress', 'Faster sleep onset'],
      actionSteps: [
        'Dim lights 2 hours before bed',
        'No screens 1 hour before bed',
        'Relaxing activities (reading, gentle stretching)',
        'Consistent bedtime',
        'Cool, dark sleep environment'
      ],
      timeframe: 'Start tonight',
      difficulty: 'moderate',
      frequency: 'Daily',
      triggers: ['Evening time'],
      rewards: ['Better sleep', 'More energy']
    }
  ],
  implementationPlan: {
    immediateActions: [
      'Set consistent wake-up time for tomorrow',
      'Drink water upon waking',
      'Take 5-minute movement break today'
    ],
    week1Goals: [
      'Establish morning energy routine',
      'Practice regular breaks during day',
      'Create evening wind-down routine'
    ],
    month1Goals: [
      'Morning routine becomes automatic',
      'Natural energy throughout day',
      'Consistent, restorative sleep'
    ],
    trackingMethod: 'Daily energy levels journal (1-10 scale)',
    milestones: [
      {
        title: 'Morning Routine Success',
        description: 'Complete morning routine for 7 days',
        timeframe: '1 week',
        reward: 'Morning meditation app subscription'
      },
      {
        title: 'Energy Transformation',
        description: 'Consistent energy levels throughout day',
        timeframe: '1 month',
        reward: 'New workout equipment or class'
      }
    ]
  }
};

// Mental Health Habits
export const mentalHealthHabits: HabitRecommendation = {
  category: 'mind-body-practices',
  habits: [
    {
      title: 'Daily Mindfulness Practice',
      description: 'Regular mindfulness practice for mental clarity',
      benefits: ['Reduced stress', 'Better emotional regulation', 'Improved focus', 'Greater self-awareness'],
      actionSteps: [
        'Start with 5 minutes daily',
        'Focus on breath awareness',
        'Use guided meditation if helpful',
        'Practice non-judgmental awareness',
        'Gradually increase duration'
      ],
      timeframe: 'Start today',
      difficulty: 'moderate',
      frequency: 'Daily',
      triggers: ['Morning routine', 'Stressful moments'],
      rewards: ['Calm mind', 'Better stress handling']
    },
    {
      title: 'Gratitude Practice',
      description: 'Regular gratitude practice to shift mindset',
      benefits: ['Improved mood', 'Better perspective', 'Reduced anxiety', 'Increased happiness'],
      actionSteps: [
        'Write 3 things grateful for each day',
        'Be specific in gratitude entries',
        'Include small, simple things',
        'Reflect on why grateful',
        'Share gratitude with others when appropriate'
      ],
      timeframe: 'Start tonight',
      difficulty: 'easy',
      frequency: 'Daily',
      triggers: ['Evening routine', 'Stressful moments'],
      rewards: ['Improved mood', 'Better perspective']
    },
    {
      title: 'Stress-Response Awareness',
      description: 'Recognize and manage stress responses effectively',
      benefits: ['Reduced stress impact', 'Better emotional regulation', 'Improved relationships', 'Better decision-making'],
      actionSteps: [
        'Learn personal stress signals',
        'Practice pause before responding',
        'Use breathing techniques when stressed',
        'Remove self from stressful situations temporarily',
        'Reflect on stress triggers regularly'
      ],
      timeframe: 'Start immediately',
      difficulty: 'moderate',
      frequency: 'Throughout day as needed',
      triggers: ['Stressful situations', 'Physical tension'],
      rewards: ['Better stress management', 'Improved relationships']
    }
  ],
  implementationPlan: {
    immediateActions: [
      'Practice 5 minutes mindfulness today',
      'Write gratitude list tonight',
      'Notice one stress response today'
    ],
    week1Goals: [
      'Daily mindfulness practice established',
      'Consistent gratitude practice',
      'Awareness of stress responses'
    ],
    month1Goals: [
      'Mindfulness becomes natural stress response',
      'Gratitude mindset developed',
      'Stress management skills automatic'
    ],
    trackingMethod: 'Mood and stress journal (1-10 scale)',
    milestones: [
      {
        title: 'Mindfulness Week',
        description: 'Complete mindfulness practice for 7 consecutive days',
        timeframe: '1 week',
        reward: 'Meditation cushion or app subscription'
      },
      {
        title: 'Stress Management Mastery',
        description: 'Natural stress response becomes mindful',
        timeframe: '1 month',
        reward: 'Weekend retreat or self-care day'
      }
    ]
  }
};

// Export all habit recommendations
export const habitPlans: Record<string, HabitRecommendation> = {
  'digestive-health': digestiveHealthHabits,
  'weight-management': weightManagementHabits,
  'energy-fatigue': energyFatigueHabits,
  'mental-health': mentalHealthHabits,
  'joint-muscle-pain': energyFatigueHabits, // Focus on energy for healing
  'heart-circulation': weightManagementHabits, // Lifestyle modifications
  'skin-hair': mentalHealthHabits, // Stress reduction
  'respiratory': energyFatigueHabits, // Breathing and energy
  'womens-health': mentalHealthHabits, // Hormone and stress balance
  'general-wellness': energyFatigueHabits // General energy and wellness
};

export const getHabitRecommendations = (category: string): HabitRecommendation => {
  return habitPlans[category] || habitPlans['general-wellness'];
};