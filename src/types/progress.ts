export interface ProgressEntry {
  id: string;
  date: string;
  healthScore: number;
  symptomRatings: SymptomRating[];
  completedRecommendations: CompletedRecommendation[];
  weight?: number;
  energyLevel: 1 | 2 | 3 | 4 | 5;
  moodLevel: 1 | 2 | 3 | 4 | 5;
  sleepQuality: 1 | 2 | 3 | 4 | 5;
  notes?: string;
}

export interface SymptomRating {
  symptom: string;
  severity: 1 | 2 | 3 | 4 | 5;
  notes?: string;
}

export interface CompletedRecommendation {
  category: 'diet' | 'exercise' | 'habits';
  recommendationId: string;
  description: string;
  completed: boolean;
  difficulty?: 1 | 2 | 3 | 4 | 5;
  notes?: string;
}

export interface ProgressSummary {
  currentHealthScore: number;
  previousHealthScore: number;
  improvementRate: number;
  streakDays: number;
  totalCompletedRecommendations: number;
  achievements: Achievement[];
  trends: ProgressTrend[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  earnedAt: string;
  category: 'diet' | 'exercise' | 'habits' | 'milestone';
}

export interface ProgressTrend {
  metric: string;
  direction: 'improving' | 'stable' | 'declining';
  changePercentage: number;
  timeFrame: string;
}

export interface ProgressGoal {
  id: string;
  title: string;
  description: string;
  targetValue: number;
  currentValue: number;
  unit: string;
  deadline: string;
  category: 'weight' | 'energy' | 'symptoms' | 'exercise' | 'habits';
  achieved: boolean;
}