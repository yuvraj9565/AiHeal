export type HealthCategory =
  | 'digestive-health'
  | 'weight-management'
  | 'energy-fatigue'
  | 'mental-health'
  | 'joint-muscle-pain'
  | 'heart-circulation'
  | 'skin-hair'
  | 'respiratory'
  | 'womens-health'
  | 'general-wellness';

export type QuestionType =
  | 'single-choice'
  | 'multiple-choice'
  | 'scale'
  | 'boolean'
  | 'text';

export type Severity = 'mild' | 'moderate' | 'severe';
export type Duration = 'days' | 'weeks' | 'months' | 'years';
export type DietPreference = 'vegetarian' | 'non-vegetarian';

export interface Question {
  id: string;
  key: string;
  type: QuestionType;
  text: string;
  description?: string;
  options?: string[];
  required: boolean;
  condition?: {
    key: string;
    value: string;
    operator?: 'equals' | 'contains' | 'greaterThan' | 'lessThan';
  };
}

export interface AssessmentResponse {
  questionKey: string;
  answer: string | string[] | number | boolean;
}

export interface HealthProfile {
  category: HealthCategory;
  severity: Severity;
  duration: Duration;
  triggers: string[];
  symptoms: string[];
  lifestyle: {
    diet: DietPreference;
    activity: 'sedentary' | 'moderate' | 'active';
    stress: 'low' | 'moderate' | 'high';
    sleep: 'poor' | 'fair' | 'good';
  };
  additionalFactors: Record<string, any>;
}

export interface Assessment {
  id: string;
  responses: AssessmentResponse[];
  profile: HealthProfile;
  createdAt: Date;
  updatedAt: Date;
}

export interface AssessmentStep {
  step: number;
  title: string;
  description: string;
  questions: Question[];
}

export interface AssessmentState {
  currentStep: number;
  responses: AssessmentResponse[];
  profile?: Partial<HealthProfile>;
  completed: boolean;
}