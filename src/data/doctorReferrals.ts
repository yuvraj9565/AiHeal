import { DoctorReferral, DoctorSpecialty } from '@/types/recommendations';

// Digestive Health Doctor Referral
export const digestiveHealthDoctorReferral: DoctorReferral = {
  urgency: 'within-month',
  specialties: [
    {
      type: 'Gastroenterologist',
      description: 'Specialist in digestive system disorders',
      reasons: ['Chronic digestive issues', 'Severe or persistent symptoms', 'Need for specialized testing', 'Rule out serious conditions']
    },
    {
      type: 'Registered Dietitian/Nutritionist',
      description: 'Expert in dietary management of digestive conditions',
      reasons: ['Diet-related symptoms', 'Nutritional deficiencies', 'Personalized meal planning', 'Long-term dietary management']
    },
    {
      type: 'Primary Care Physician',
      description: 'First point of contact for digestive concerns',
      reasons: ['Initial evaluation', 'Mild to moderate symptoms', 'General health assessment', 'Referral coordination']
    }
  ],
  symptoms: ['Severe or persistent abdominal pain', 'Unexplained weight loss', 'Blood in stool', 'Difficulty swallowing', 'Chronic diarrhea or constipation', 'Persistent vomiting'],
  whenToVisit: 'Schedule appointment within 2-4 weeks for persistent symptoms, sooner if severe symptoms develop',
  whatToTellDoctor: [
    'Describe all symptoms in detail (when they started, what makes them better/worse)',
    'List all medications and supplements you\'re taking',
    'Share your diet and lifestyle habits',
    'Mention any family history of digestive conditions',
    'Bring a symptom diary if you have been tracking symptoms'
  ],
  questionsToAsk: [
    'What diagnostic tests do you recommend?',
    'Should I see a dietitian for nutritional guidance?',
    'Are there lifestyle changes that could help my symptoms?',
    'When should I follow up with you?',
    'What symptoms should prompt emergency care?'
  ],
  possibleTests: ['Blood tests', 'Stool tests', 'Endoscopy/colonoscopy', 'Breath tests', 'Allergy testing', 'Imaging studies'],
  whenToSeekSecondOpinion: [
    'If diagnosis is unclear',
    'If symptoms don\'t improve with treatment',
    'If recommended treatment seems overly aggressive',
    'If you want to explore all treatment options'
  ]
};

// Weight Management Doctor Referral
export const weightManagementDoctorReferral: DoctorReferral = {
  urgency: 'within-month',
  specialties: [
    {
      type: 'Primary Care Physician',
      description: 'Comprehensive health evaluation for weight management',
      reasons: ['Baseline health assessment', 'Rule out medical causes', 'Monitoring overall health', 'Coordination of care']
    },
    {
      type: 'Registered Dietitian',
      description: 'Expert in weight management nutrition',
      reasons: ['Personalized meal planning', 'Nutritional education', 'Behavior change strategies', 'Long-term success support']
    },
    {
      type: 'Endocrinologist',
      description: 'Hormone and metabolism specialist',
      reasons: ['Suspected hormonal imbalances', 'Thyroid issues', 'Metabolic disorders', 'Difficulty losing weight despite efforts']
    }
  ],
  symptoms: ['Rapid unexplained weight gain or loss', 'Extreme fatigue', 'Hair loss', 'Irregular menstrual cycles', 'Constant hunger or thirst', 'Cold intolerance'],
  whenToVisit: 'Schedule appointment within 4 weeks for evaluation, sooner if experiencing rapid changes',
  whatToTellDoctor: [
    'Describe your weight history and patterns',
    'List all diet and exercise attempts',
    'Share any other symptoms or health changes',
    'Discuss medications you\'re taking',
    'Be honest about eating and activity habits'
  ],
  questionsToAsk: [
    'What medical tests do you recommend?',
    'Should I work with a dietitian or nutritionist?',
    'Are there underlying medical conditions affecting my weight?',
    'What is a realistic weight loss/gain goal?',
    'How often should we monitor progress?'
  ],
  possibleTests: ['Blood tests (thyroid, glucose, cholesterol)', 'Hormone panel', 'Metabolic rate testing', 'Body composition analysis', 'Sleep study if needed'],
  whenToSeekSecondOpinion: [
    'If weight changes are rapid and unexplained',
    'If recommended treatments don\'t work',
    'If considering weight loss surgery',
    'If you suspect underlying medical condition'
  ]
};

// Energy & Fatigue Doctor Referral
export const energyFatigueDoctorReferral: DoctorReferral = {
  urgency: 'within-month',
  specialties: [
    {
      type: 'Primary Care Physician',
      description: 'First evaluation for persistent fatigue',
      reasons: ['Initial assessment', 'Rule out common causes', 'Order initial tests', 'Provide referrals if needed']
    },
    {
      type: 'Endocrinologist',
      description: 'Hormone and metabolism specialist',
      reasons: ['Suspected thyroid issues', 'Hormonal imbalances', 'Metabolic disorders', 'Adrenal fatigue']
    },
    {
      type: 'Sleep Specialist',
      description: 'Expert in sleep disorders',
      reasons: ['Suspected sleep apnea', 'Insomnia', 'Narcolepsy', 'Poor sleep quality affecting energy']
    }
  ],
  symptoms: ['Fatigue lasting more than 2 weeks', 'Fatigue that interferes with daily activities', 'Unexplained exhaustion', 'Fatigue accompanied by other symptoms', 'Extreme daytime sleepiness'],
  whenToVisit: 'Schedule appointment within 2-3 weeks if fatigue persists, sooner if severe',
  whatToTellDoctor: [
    'Describe when fatigue started and any patterns',
    'Explain how fatigue affects your daily life',
    'List other symptoms you\'re experiencing',
    'Share your sleep habits and quality',
    'Discuss stress levels and life changes'
  ],
  questionsToAsk: [
    'What medical tests do you recommend for fatigue?',
    'Should I see a sleep specialist?',
    'Could my medications be causing fatigue?',
    'What lifestyle changes might help?',
    'When should I be concerned about fatigue?'
  ],
  possibleTests: ['Complete blood count', 'Thyroid function tests', 'Vitamin levels (B12, D)', 'Metabolic panel', 'Sleep study', 'Hormone panel'],
  whenToSeekSecondOpinion: [
    'If initial tests are normal but fatigue persists',
    'If diagnosis is unclear',
    'If treatments aren\'t helping',
    'If you suspect specific underlying condition'
  ]
};

// Mental Health Doctor Referral
export const mentalHealthDoctorReferral: DoctorReferral = {
  urgency: 'within-week',
  specialties: [
    {
      type: 'Primary Care Physician',
      description: 'Initial mental health screening and coordination',
      reasons: ['Initial evaluation', 'Rule out physical causes', 'Medication management if needed', 'Referral to mental health specialists']
    },
    {
      type: 'Psychiatrist',
      description: 'Medical doctor specializing in mental health',
      reasons: ['Medication evaluation and management', 'Complex mental health conditions', 'Treatment-resistant conditions', 'Co-occurring disorders']
    },
    {
      type: 'Therapist/Counselor',
      description: 'Mental health professional for therapy',
      reasons: ['Talk therapy', 'Cognitive behavioral therapy', 'Coping strategies', 'Ongoing support']
    }
  ],
  symptoms: ['Persistent sadness or depression', 'Severe anxiety or panic attacks', 'Thoughts of self-harm', 'Inability to function daily', 'Extreme mood swings', 'Psychosis or delusions'],
  whenToVisit: 'Schedule appointment within 1 week, immediately if having thoughts of self-harm',
  whatToTellDoctor: [
    'Be honest about all your symptoms',
    'Share how symptoms affect your daily life',
    'List any medications or supplements',
    'Discuss alcohol or drug use',
    'Share any past mental health treatment'
  ],
  questionsToAsk: [
    'What type of therapy do you recommend?',
    'Should I consider medication?',
    'How long until I should feel improvement?',
    'What coping strategies can I use now?',
    'What resources are available for immediate support?'
  ],
  possibleTests: ['Psychological evaluation', 'Blood tests to rule out physical causes', 'Neurological evaluation if needed'],
  whenToSeekSecondOpinion: [
    'If not improving with treatment',
    'If experiencing significant side effects',
    'If diagnosis seems unclear',
    'If wanting to explore different treatment approaches'
  ]
};

// Joint & Muscle Pain Doctor Referral
export const jointMusclePainDoctorReferral: DoctorReferral = {
  urgency: 'within-week',
  specialties: [
    {
      type: 'Primary Care Physician',
      description: 'Initial evaluation of pain symptoms',
      reasons: ['Initial assessment', 'Basic pain management', 'Order imaging if needed', 'Referral to specialists']
    },
    {
      type: 'Orthopedist',
      description: 'Specialist in bones, joints, and muscles',
      reasons: ['Persistent joint pain', 'Suspected arthritis', 'Injuries', 'Chronic musculoskeletal conditions']
    },
    {
      type: 'Physical Therapist',
      description: 'Expert in movement and pain management',
      reasons: ['Rehabilitation', 'Pain management through exercise', 'Improving mobility', 'Preventing future injuries']
    }
  ],
  symptoms: ['Severe or persistent pain', 'Pain that interferes with daily activities', 'Swelling or redness in joints', 'Limited range of motion', 'Injury with severe pain', 'Numbness or tingling'],
  whenToVisit: 'Schedule appointment within 1-2 weeks, sooner if severe or injury-related',
  whatToTellDoctor: [
    'Describe pain location, severity, and type',
    'Explain when pain started and any triggers',
    'Share what makes pain better or worse',
    'List any injuries or accidents',
    'Discuss how pain affects your daily activities'
  ],
  questionsToAsk: [
    'What diagnostic tests do you recommend?',
    'Should I see a physical therapist?',
    'What activities should I avoid?',
    'What pain management options are available?',
    'When should I seek emergency care?'
  ],
  possibleTests: ['X-rays', 'MRI or CT scan', 'Blood tests for inflammation', 'Joint fluid analysis', 'Bone density scan'],
  whenToSeekSecondOpinion: [
    'If pain persists despite treatment',
    'If surgery is recommended',
    'If diagnosis is unclear',
    'If wanting to explore non-surgical options'
  ]
};

// Export all doctor referrals
export const doctorReferralPlans: Record<string, DoctorReferral> = {
  'digestive-health': digestiveHealthDoctorReferral,
  'weight-management': weightManagementDoctorReferral,
  'energy-fatigue': energyFatigueDoctorReferral,
  'mental-health': mentalHealthDoctorReferral,
  'joint-muscle-pain': jointMusclePainDoctorReferral,
  'heart-circulation': {
    ...weightManagementDoctorReferral,
    specialties: [
      {
        type: 'Cardiologist',
        description: 'Heart and circulation specialist',
        reasons: ['Heart conditions', 'Blood pressure issues', 'Circulation problems', 'Chest pain']
      },
      {
        type: 'Primary Care Physician',
        description: 'Initial cardiovascular screening',
        reasons: ['Risk assessment', 'Monitoring', 'Preventive care', 'Referral coordination']
      }
    ]
  },
  'skin-hair': {
    ...digestiveHealthDoctorReferral,
    specialties: [
      {
        type: 'Dermatologist',
        description: 'Skin and hair specialist',
        reasons: ['Persistent skin conditions', 'Hair loss', 'Unexplained rashes', 'Skin changes']
      },
      {
        type: 'Primary Care Physician',
        description: 'Initial skin and hair concerns',
        reasons: ['Basic evaluation', 'Common conditions', 'Referral if needed']
      }
    ]
  },
  'respiratory': {
    ...energyFatigueDoctorReferral,
    specialties: [
      {
        type: 'Pulmonologist',
        description: 'Lung and breathing specialist',
        reasons: ['Chronic breathing issues', 'Asthma', 'Persistent cough', 'Lung conditions']
      },
      {
        type: 'Allergist',
        description: 'Allergy and immunology specialist',
        reasons: ['Allergies', 'Asthma', 'Immune system reactions', 'Environmental sensitivities']
      }
    ]
  },
  'womens-health': {
    ...mentalHealthDoctorReferral,
    specialties: [
      {
        type: 'Gynecologist',
        description: 'Women\'s health specialist',
        reasons: ['Hormonal issues', 'Menstrual problems', 'Menopause symptoms', 'Women-specific conditions']
      },
      {
        type: 'Endocrinologist',
        description: 'Hormone specialist',
        reasons: ['Hormonal imbalances', 'Thyroid issues', 'PCOS', 'Metabolic concerns']
      }
    ]
  },
  'general-wellness': {
    ...weightManagementDoctorReferral,
    urgency: 'routine',
    whenToVisit: 'Schedule annual checkup for preventive care'
  }
};

export const getDoctorReferral = (category: string): DoctorReferral => {
  return doctorReferralPlans[category] || doctorReferralPlans['general-wellness'];
};