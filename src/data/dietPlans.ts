import { DietRecommendation, MealPlan, DailyMeals, Meal, Recipe, HydrationGuidelines } from '@/types/recommendations';

// Base meal plan template
const createBaseMealPlan = (): MealPlan => ({
  monday: createDailyMeals('Monday'),
  tuesday: createDailyMeals('Tuesday'),
  wednesday: createDailyMeals('Wednesday'),
  thursday: createDailyMeals('Thursday'),
  friday: createDailyMeals('Friday'),
  saturday: createDailyMeals('Saturday'),
  sunday: createDailyMeals('Sunday')
});

const createDailyMeals = (day: string): DailyMeals => ({
  breakfast: {
    name: `${day} Breakfast`,
    description: 'Nutritious breakfast to start your day',
    ingredients: [],
    portionSize: '1 serving'
  },
  lunch: {
    name: `${day} Lunch`,
    description: 'Balanced lunch for sustained energy',
    ingredients: [],
    portionSize: '1 serving'
  },
  dinner: {
    name: `${day} Dinner`,
    description: 'Healthy dinner to end your day',
    ingredients: [],
    portionSize: '1 serving'
  },
  snacks: [
    {
      name: 'Morning Snack',
      description: 'Light snack between breakfast and lunch',
      ingredients: [],
      portionSize: '1 serving'
    },
    {
      name: 'Afternoon Snack',
      description: 'Light snack between lunch and dinner',
      ingredients: [],
      portionSize: '1 serving'
    }
  ]
});

// Digestive Health Diet Plan
export const digestiveHealthDiet: DietRecommendation = {
  category: 'digestive-health',
  foodsToEmphasize: [
    'Ginger and turmeric',
    'Probiotic-rich foods (yogurt, kefir, sauerkraut)',
    'Soluble fiber (oats, bananas, carrots)',
    'Peppermint and chamomile tea',
    'Lean proteins (chicken, fish, tofu)',
    'Cooked vegetables (easier to digest)',
    'Bone broth',
    'Papaya and pineapple (natural digestive enzymes)'
  ],
  foodsToLimit: [
    'Spicy foods',
    'Caffeine',
    'Alcohol',
    'Processed foods',
    'High-fat foods',
    'Artificial sweeteners'
  ],
  foodsToAvoid: [
    'Fried foods',
    'Carbonated beverages',
    'Excessive dairy (if lactose intolerant)',
    'Raw vegetables (during flare-ups)',
    'Tough meats'
  ],
  mealPlan: {
    vegetarian: {
      monday: {
        breakfast: {
          name: 'Soothing Oatmeal',
          description: 'Warm oatmeal with banana and honey',
          ingredients: ['1/2 cup rolled oats', '1 banana', '1 tsp honey', '1/4 tsp cinnamon', '1 cup almond milk'],
          instructions: ['Cook oats with almond milk', 'Top with sliced banana', 'Drizzle with honey and sprinkle cinnamon'],
          portionSize: '1 bowl',
          prepTime: '5 min'
        },
        lunch: {
          name: 'Lentil Soup',
          description: 'Gentle lentil soup with ginger',
          ingredients: ['1 cup red lentils', '4 cups vegetable broth', '1 tbsp grated ginger', '1 carrot', '1 tsp turmeric'],
          instructions: ['Cook lentils with broth and spices', 'Add grated ginger and diced carrot', 'Simmer until tender'],
          portionSize: '2 bowls',
          prepTime: '15 min'
        },
        dinner: {
          name: 'Steamed Vegetables with Rice',
          description: 'Gentle steamed vegetables with white rice',
          ingredients: ['1 cup white rice', '1 cup mixed steamed vegetables', '1 tsp olive oil', 'Herbs to taste'],
          instructions: ['Cook rice according to package', 'Steam vegetables until tender', 'Drizzle with olive oil and herbs'],
          portionSize: '1 plate',
          prepTime: '20 min'
        },
        snacks: [
          {
            name: 'Rice Cakes with Banana',
            description: 'Simple and easy to digest',
            ingredients: ['2 brown rice cakes', '1/2 banana', '1 tbsp almond butter'],
            portionSize: '1 serving'
          },
          {
            name: 'Herbal Tea',
            description: 'Peppermint or chamomile tea',
            ingredients: ['1 tea bag', '1 cup hot water'],
            portionSize: '1 cup'
          }
        ]
      },
      tuesday: createDailyMeals('Tuesday'),
      wednesday: createDailyMeals('Wednesday'),
      thursday: createDailyMeals('Thursday'),
      friday: createDailyMeals('Friday'),
      saturday: createDailyMeals('Saturday'),
      sunday: createDailyMeals('Sunday')
    },
    nonVegetarian: {
      monday: {
        breakfast: {
          name: 'Scrambled Eggs with Toast',
          description: 'Light protein-rich breakfast',
          ingredients: ['2 eggs', '1 slice whole grain toast', '1 tsp butter', 'Pinch of salt'],
          instructions: ['Scramble eggs lightly', 'Toast bread', 'Serve with minimal seasoning'],
          portionSize: '1 serving',
          prepTime: '5 min'
        },
        lunch: {
          name: 'Chicken and Vegetable Soup',
          description: 'Gentle chicken soup with vegetables',
          ingredients: ['3 oz chicken breast', '4 cups chicken broth', '1 carrot', '1 celery stalk', '1/2 cup rice'],
          instructions: ['Cook chicken in broth', 'Add diced vegetables and rice', 'Simmer until tender'],
          portionSize: '2 bowls',
          prepTime: '25 min'
        },
        dinner: {
          name: 'Baked Fish with Steamed Vegetables',
          description: 'Gentle baked fish with easy-to-digest vegetables',
          ingredients: ['4 oz white fish', '1 cup steamed zucchini', '1 tsp olive oil', 'Lemon wedge', 'Herbs'],
          instructions: ['Bake fish with herbs', 'Steam zucchini until tender', 'Serve with lemon'],
          portionSize: '1 plate',
          prepTime: '20 min'
        },
        snacks: [
          {
            name: 'Plain Yogurt',
            description: 'Probiotic-rich snack',
            ingredients: ['1/2 cup plain yogurt', '1 tsp honey'],
            portionSize: '1 serving'
          },
          {
            name: 'Bone Broth',
            description: 'Warm and nourishing',
            ingredients: ['1 cup bone broth'],
            portionSize: '1 cup'
          }
        ]
      },
      tuesday: createDailyMeals('Tuesday'),
      wednesday: createDailyMeals('Wednesday'),
      thursday: createDailyMeals('Thursday'),
      friday: createDailyMeals('Friday'),
      saturday: createDailyMeals('Saturday'),
      sunday: createDailyMeals('Sunday')
    }
  },
  hydration: {
    dailyWaterIntake: '8-10 glasses per day',
    beneficialBeverages: ['Peppermint tea', 'Chamomile tea', 'Ginger tea', 'Diluted fruit juices', 'Coconut water'],
    beveragesToLimit: ['Coffee', 'Alcohol', 'Carbonated drinks', 'Sugary beverages'],
    timing: 'Sip water between meals rather than with meals'
  },
  recipes: [
    {
      name: 'Digestive Ginger Tea',
      description: 'Soothing tea for digestive discomfort',
      ingredients: ['1 inch fresh ginger', '2 cups hot water', '1 tbsp lemon juice', '1 tsp honey'],
      instructions: [
        'Peel and slice ginger',
        'Steep in hot water for 10 minutes',
        'Add lemon juice and honey',
        'Sip slowly'
      ],
      prepTime: '2 min',
      cookTime: '10 min',
      servings: 2,
      nutrition: {
        calories: 30,
        protein: '0g',
        carbs: '8g',
        fat: '0g'
      }
    },
    {
      name: 'Simple Rice Congee',
      description: 'Traditional rice porridge for digestive health',
      ingredients: ['1/2 cup rice', '6 cups water', '1 inch ginger', 'Salt to taste'],
      instructions: [
        'Rinse rice until water runs clear',
        'Combine rice and water in pot',
        'Bring to boil, then simmer for 1-2 hours',
        'Add ginger and salt',
        'Serve warm'
      ],
      prepTime: '5 min',
      cookTime: '90 min',
      servings: 4,
      nutrition: {
        calories: 150,
        protein: '3g',
        carbs: '32g',
        fat: '0g'
      }
    }
  ]
};

// Weight Management Diet Plan
export const weightManagementDiet: DietRecommendation = {
  category: 'weight-management',
  foodsToEmphasize: [
    'Lean proteins (chicken breast, fish, eggs, legumes)',
    'High-fiber vegetables (broccoli, spinach, cauliflower)',
    'Complex carbohydrates (quinoa, brown rice, sweet potatoes)',
    'Healthy fats (avocado, nuts, olive oil)',
    'Low-glycemic fruits (berries, apples, citrus)',
    'Probiotic-rich foods',
    'Green tea',
    'High-volume, low-calorie foods'
  ],
  foodsToLimit: [
    'Refined carbohydrates (white bread, pasta)',
    'Sugary foods and beverages',
    'Processed foods',
    'Excessive saturated fats',
    'Alcohol',
    'High-calorie sauces and dressings'
  ],
  foodsToAvoid: [
    'Fast food',
    'Fried foods',
    'Sugary snacks',
    'Excessive refined carbs',
    'Artificial sweeteners in excess'
  ],
  mealPlan: {
    vegetarian: createBaseMealPlan(),
    nonVegetarian: createBaseMealPlan()
  },
  hydration: {
    dailyWaterIntake: '10-12 glasses per day',
    beneficialBeverages: ['Green tea', 'Black coffee (no sugar)', 'Herbal tea', 'Lemon water'],
    beveragesToLimit: ['Soda', 'Fruit juices', 'Alcohol', 'Sugary coffee drinks'],
    timing: 'Drink 1 glass before each meal'
  },
  recipes: []
};

// Energy & Fatigue Diet Plan
export const energyFatigueDiet: DietRecommendation = {
  category: 'energy-fatigue',
  foodsToEmphasize: [
    'Complex carbohydrates (oats, quinoa, brown rice)',
    'Iron-rich foods (spinach, lentils, lean meat)',
    'B-vitamin rich foods (whole grains, eggs, leafy greens)',
    'Healthy fats (nuts, seeds, avocado)',
    'Protein at every meal',
    'Fresh fruits and vegetables',
    'Green tea',
    'Dark chocolate (in moderation)'
  ],
  foodsToLimit: [
    'Sugary foods (cause energy crashes)',
    'Processed foods',
    'Excessive caffeine',
    'Alcohol',
    'Heavy, fatty meals'
  ],
  foodsToAvoid: [
    'Sugary breakfast cereals',
    'Energy drinks',
    'Fast food',
    'Excessive sugar'
  ],
  mealPlan: {
    vegetarian: createBaseMealPlan(),
    nonVegetarian: createBaseMealPlan()
  },
  hydration: {
    dailyWaterIntake: '8-10 glasses per day',
    beneficialBeverages: ['Green tea', 'Fresh vegetable juices', 'Coconut water', 'Herbal tea'],
    beveragesToLimit: ['Energy drinks', 'Sugary drinks', 'Excessive coffee'],
    timing: 'Start day with warm water and lemon'
  },
  recipes: []
};

// Mental Health Diet Plan
export const mentalHealthDiet: DietRecommendation = {
  category: 'mental-health',
  foodsToEmphasize: [
    'Omega-3 rich foods (salmon, walnuts, flaxseeds)',
    'Complex carbohydrates',
    'Foods rich in tryptophan (turkey, eggs, cheese)',
    'Leafy greens (spinach, kale)',
    'Berries and antioxidant-rich fruits',
    'Nuts and seeds',
    'Dark chocolate',
    'Fermented foods for gut health'
  ],
  foodsToLimit: [
    'Processed foods',
    'Excessive sugar',
    'Refined carbohydrates',
    'Caffeine',
    'Alcohol'
  ],
  foodsToAvoid: [
    'Fast food',
    'Sugary snacks',
    'Excessive caffeine',
    'Alcohol in excess'
  ],
  mealPlan: {
    vegetarian: createBaseMealPlan(),
    nonVegetarian: createBaseMealPlan()
  },
  hydration: {
    dailyWaterIntake: '8 glasses per day',
    beneficialBeverages: ['Herbal tea', 'Green tea', 'Water with lemon', 'Fresh juices'],
    beveragesToLimit: ['Alcohol', 'Energy drinks', 'Excessive coffee'],
    timing: 'Stay hydrated throughout the day'
  },
  recipes: []
};

// Export all diet plans
export const dietPlans: Record<string, DietRecommendation> = {
  'digestive-health': digestiveHealthDiet,
  'weight-management': weightManagementDiet,
  'energy-fatigue': energyFatigueDiet,
  'mental-health': mentalHealthDiet,
  'joint-muscle-pain': weightManagementDiet, // Similar to weight management
  'heart-circulation': weightManagementDiet, // Heart-healthy similar to weight management
  'skin-hair': mentalHealthDiet, // Similar to mental health (focus on nutrients)
  'respiratory': digestiveHealthDiet, // Anti-inflammatory similar to digestive
  'womens-health': mentalHealthDiet, // Hormone balancing similar to mental health
  'general-wellness': energyFatigueDiet // General energy and wellness
};

export const getDietRecommendations = (category: string): DietRecommendation => {
  return dietPlans[category] || dietPlans['general-wellness'];
};