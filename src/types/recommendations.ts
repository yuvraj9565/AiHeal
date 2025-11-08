export interface DietRecommendation {
  category: string;
  foodsToEmphasize: string[];
  foodsToLimit: string[];
  foodsToAvoid: string[];
  mealPlan: {
    vegetarian: MealPlan;
    nonVegetarian: MealPlan;
  };
  hydration: HydrationGuidelines;
  recipes: Recipe[];
}

export interface MealPlan {
  monday: DailyMeals;
  tuesday: DailyMeals;
  wednesday: DailyMeals;
  thursday: DailyMeals;
  friday: DailyMeals;
  saturday: DailyMeals;
  sunday: DailyMeals;
}

export interface DailyMeals {
  breakfast: Meal;
  lunch: Meal;
  dinner: Meal;
  snacks: Meal[];
}

export interface Meal {
  name: string;
  description: string;
  ingredients: string[];
  instructions?: string;
  portionSize: string;
  prepTime?: string;
}

export interface HydrationGuidelines {
  dailyWaterIntake: string;
  beneficialBeverages: string[];
  beveragesToLimit: string[];
  timing: string;
}

export interface Recipe {
  name: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  prepTime: string;
  cookTime: string;
  servings: number;
  nutrition?: {
    calories: number;
    protein: string;
    carbs: string;
    fat: string;
  };
}

export interface ExerciseRecommendation {
  category: 'low-impact' | 'moderate-cardio' | 'strength-training' | 'flexibility-balance' | 'mind-body';
  exercises: Exercise[];
  frequency: string;
  duration: string;
  intensity: 'beginner' | 'intermediate' | 'advanced';
  safetyPrecautions: string[];
  warmUp: string[];
  coolDown: string[];
}

export interface Exercise {
  name: string;
  description: string;
  instructions: string[];
  sets?: number;
  reps?: number;
  duration?: string;
  restTime?: string;
  equipment?: string[];
  modifications?: string[];
  targetMuscles?: string[];
}

export interface HabitRecommendation {
  category: 'daily-routines' | 'lifestyle-modifications' | 'environmental-changes' | 'mind-body-practices' | 'tracking-monitoring';
  habits: Habit[];
  implementationPlan: ImplementationPlan;
}

export interface Habit {
  title: string;
  description: string;
  benefits: string[];
  actionSteps: string[];
  timeframe: string;
  difficulty: 'easy' | 'moderate' | 'challenging';
  frequency: string;
  triggers?: string[];
  rewards?: string[];
}

export interface ImplementationPlan {
  immediateActions: string[];
  week1Goals: string[];
  month1Goals: string[];
  trackingMethod: string;
  milestones: Milestone[];
}

export interface Milestone {
  title: string;
  description: string;
  timeframe: string;
  reward?: string;
}

export interface DoctorReferral {
  urgency: 'immediate' | 'within-week' | 'within-month' | 'routine';
  specialties: DoctorSpecialty[];
  symptoms: string[];
  whenToVisit: string;
  whatToTellDoctor: string[];
  questionsToAsk: string[];
  possibleTests: string[];
  whenToSeekSecondOpinion: string[];
}

export interface DoctorSpecialty {
  type: string;
  description: string;
  reasons: string[];
}

export interface Recommendations {
  diet: DietRecommendation;
  exercise: ExerciseRecommendation;
  habits: HabitRecommendation;
  doctor: DoctorReferral;
  summary: RecommendationSummary;
}

export interface RecommendationSummary {
  primaryFocus: string;
  keyRecommendations: string[];
  expectedTimeline: string;
  successIndicators: string[];
  followUpSchedule: string[];
}