# AiHeal - Personalized Health Assessment System

A comprehensive web application that assesses users' health problems through an interactive questionnaire and provides personalized recommendations for diet, exercise, habits, and medical guidance.

## Features

### 🏥 Comprehensive Health Assessment
- **10 Health Categories**: Digestive Health, Weight Management, Energy & Fatigue, Mental Health, Joint & Muscle Pain, Heart & Circulation, Skin & Hair, Respiratory, Women's Health, General Wellness
- **Multi-step Assessment**: 5-step guided process with progress indicators
- **Dynamic Questionnaire**: Questions adapt based on user responses
- **5-minute Completion**: Quick and user-friendly assessment

### 🥗 Personalized Diet Plans
- **Vegetarian & Non-Vegetarian Options**: Tailored meal plans for dietary preferences
- **7-Day Meal Plans**: Detailed breakfast, lunch, dinner, and snacks
- **Food Guidelines**: Foods to emphasize, limit, and avoid
- **Hydration Recommendations**: Personalized fluid intake guidance

### 🏃‍♂️ Exercise Recommendations
- **Condition-Specific Exercises**: Tailored to health condition and severity
- **Multiple Intensity Levels**: Beginner, intermediate, advanced options
- **Safety Guidelines**: Precautions and modifications for each condition

### 👩‍⚕️ Medical Guidance
- **Doctor Referrals**: Specialist recommendations based on symptoms
- **Urgency Levels**: When to seek medical care
- **Symptom Warnings**: Red flag symptoms to watch for

## Technology Stack

- **Frontend**: Next.js 14 with React 18
- **Styling**: Tailwind CSS with responsive design
- **Backend**: Next.js API Routes
- **Database**: SQLite with Prisma ORM
- **TypeScript**: Full type safety

## Getting Started

### Installation

1. Install dependencies
```bash
npm install
```

2. Initialize database
```bash
npx prisma generate
npx prisma db push
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Health Categories

1. **Digestive Health** - Bloating, acid reflux, constipation, IBS
2. **Weight Management** - Weight loss, gain, metabolism concerns
3. **Energy & Fatigue** - Low energy, chronic fatigue, sleep issues
4. **Mental Health** - Stress, anxiety, depression, mood swings
5. **Joint & Muscle Pain** - Arthritis, back pain, inflammation
6. **Heart & Circulation** - Blood pressure, cholesterol, circulation
7. **Skin & Hair** - Acne, eczema, hair loss, aging
8. **Respiratory** - Breathing issues, allergies, asthma
9. **Women's Health** - Hormonal balance, menstrual issues, menopause
10. **General Wellness** - Immunity, preventive care, vitality

## Medical Disclaimer

This application provides general health information and is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician with any questions regarding a medical condition.