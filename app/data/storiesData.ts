import { StoryCategory, SuccessStory } from "../types/stories";
export type { StoryCategory, SuccessStory };

export const STORY_CATEGORIES: StoryCategory[] = [
  "All",
  "Fat Loss & Energy",
  "Ramadan Routine",
  "Sunnah Nutrition",
  "Postpartum & Strength",
  "Busy Sisters",
];

export const COMMUNITY_STATS = [
  { label: "Sisters Transformed", value: "850+", icon: "🌸" },
  { label: "Halal Meal Plans Shared", value: "14,000+", icon: "🥗" },
  { label: "Average Energy Boost", value: "94%", icon: "⚡" },
  { label: "Sisterhood Satisfaction", value: "4.95 / 5", icon: "⭐" },
];
export const SUCCESS_STORIES: SuccessStory[] = [
  {
    id: "1",
    name: "Zainab Al-Mansoor",
    location: "London, UK",
    age: 29,
    role: "Working Mother & Educator",
    category: "Fat Loss & Energy",
    duration: "4 Months",
    headline:
      "Lost 14kg sustainably while keeping my daily energy soaring for family and prayers.",
    quote:
      "Halal Fit-Sis taught me that fitness is an act of worship. I stopped crash dieting and learned prophetic portion control. My chronic afternoon fatigue is completely gone!",
    fullStory: [
      "Before discovering Halal Fit-Sis, I felt trapped in a loop of restrictive diets and exhaustion. As a mother of two working full-time, going to a public mixed gym was uncomfortable and stressful.",
      "With the home resistance workouts and Sunnah meal planning, I was able to exercise modesty in my living room in just 25 minutes a day.",
      "The sisterhood group kept me accountable every single Fajr and Suhoor. I didn't just lose weight—I regained my confidence and spiritual vitality.",
    ],
    keyWins: [
      "14kg Healthy Fat Loss",
      "No more afternoon sugar crashes",
      "Consistent 5:00 AM Fajr energy",
      "Formed daily 25-min home workout habit",
    ],
    metrics: [
      { label: "Fat Loss", value: "-14 kg" },
      { label: "Daily Energy", value: "+300%" },
      { label: "Workout Consistency", value: "98%" },
    ],
    favoriteMeal: "Sunnah Date & Almond Oatmeal with Chia Seeds",
    favoriteHabit: "20-minute post-Isha resistance band flow",
    gradientTheme: "sakura-blue",
    featured: true,
    initialInspires: 142,
  },
  {
    id: "2",
    name: "Mariam Oladipo",
    location: "Lagos, Nigeria",
    age: 34,
    role: "Software Engineer & Mom",
    category: "Ramadan Routine",
    duration: "6 Months",
    headline:
      "Conquered Ramadan exhaustion and maintained strength throughout all 30 days of fasting.",
    quote:
      "For years, Ramadan meant sleeping through the day due to zero energy. Following the Halal Fit-Sis Suhoor hydration protocol changed my life completely.",
    fullStory: [
      "I used to dread how weak I felt during long fasts. I'd eat heavy fried foods at Iftar and feel bloated for Taraweeh.",
      "Switching to whole grain Nigerian meals, balanced proteins, and spacing my hydration transformed my stamina. For the first time in years, I stood through full Taraweeh prayers without leg cramps or dizziness.",
    ],
    keyWins: [
      "Zero fasting headaches or brain fog",
      "Full energy during 20-rak'ah Taraweeh",
      "Maintained lean muscle mass throughout holy month",
      "Seamless hydration strategy",
    ],
    metrics: [
      { label: "Taraweeh Stamina", value: "100%" },
      { label: "Hydration Balance", value: "3L / day" },
      { label: "Bloating Relief", value: "Complete" },
    ],
    favoriteMeal: "Grilled Herb Fish with Jollof Quinoa & Steamed Greens",
    favoriteHabit: "Pre-Iftar 15-minute gentle mobility stretch",
    gradientTheme: "sakura-sky",
    featured: false,
    initialInspires: 98,
  },
];
export const ADDITIONAL_STORIES: SuccessStory[] = [
  {
    id: "3",
    name: "Aisha Nur",
    location: "Toronto, Canada",
    age: 26,
    role: "Postgraduate Student",
    category: "Sunnah Nutrition",
    duration: "3 Months",
    headline:
      "Healed gut inflammation and chronic bloating with prophetic whole foods.",
    quote:
      "Understanding the 1/3 food, 1/3 water, 1/3 air rule gave me a peaceful relationship with eating. No guilt, no stress, just nourishment.",
    fullStory: [
      "I was suffering from severe indigestion, stress eating during exams, and feeling heavy after every meal.",
      "The Halal Fit-Sis mindful eating guide and prophetic recipes—incorporating raw honey, olive oil, figs, and barley soup (Talbina)—healed my digestion within weeks.",
    ],
    keyWins: [
      "90% reduction in gut bloating",
      "Clear glowing skin",
      "Eliminated late-night binge snacking",
      "Natural morning alertness without caffeine",
    ],
    metrics: [
      { label: "Gut Comfort", value: "95%" },
      { label: "Mental Clarity", value: "+200%" },
      { label: "Habit Score", value: "5/5" },
    ],
    favoriteMeal: "Warm Sunnah Talbina with Crushed Pistachios & Raw Honey",
    favoriteHabit: "Starting meals with intentional Bismillah & deep breaths",
    gradientTheme: "sakura-lavender",
    initialInspires: 77,
  },
  {
    id: "4",
    name: "Fatima Benali",
    location: "Casablanca, Morocco",
    age: 38,
    role: "Mother of 3 & Architect",
    category: "Postpartum & Strength",
    duration: "8 Months",
    headline:
      "Rebuilt core stability and posture after having my third child with modest home workouts.",
    quote:
      "I thought postpartum back pain was permanent. The low-impact pilates and pelvic floor routine rebuilt my core strength safely.",
    fullStory: [
      "After three pregnancies, my core was weak and lifting my toddler caused sharp lower back pain. Commercial gyms didn't understand diastasis recti recovery.",
      "Coach Amina's gentle progressive overload plans helped me heal safely in private. Now I can lift heavy grocery bags and run around with my kids pain-free!",
    ],
    keyWins: [
      "Completely resolved lower back pain",
      "Restored deep core & pelvic strength",
      "Gained visible tone in arms & shoulders",
      "Fit into pre-pregnancy wardrobe comfortably",
    ],
    metrics: [
      { label: "Core Recovery", value: "100%" },
      { label: "Back Pain", value: "0/10" },
      { label: "Strength Gains", value: "+150%" },
    ],
    favoriteMeal: "Moroccan Spiced Chickpea & Spinach Stew with Olive Oil",
    favoriteHabit: "Morning 10-minute posture & glute bridges",
    gradientTheme: "sakura-mint",
    initialInspires: 115,
  },
  {
    id: "5",
    name: "Halima Abubakar",
    location: "Abuja, Nigeria",
    age: 31,
    role: "Corporate Finance Manager",
    category: "Busy Sisters",
    duration: "5 Months",
    headline:
      "Found 20 minutes a day to stay in peak shape despite a 50-hour work week.",
    quote:
      "I used to think you needed 90 minutes in a gym every day. 20 focused minutes of resistance training at home is all it takes when done right.",
    fullStory: [
      "Long office hours and traffic left me feeling drained. Exercise felt like an impossible luxury.",
      "The 20-minute time-efficient HIIT and dumbbell workouts from Halal Fit-Sis fit seamlessly between work calls and Maghrib prayer. My productivity at work doubled!",
    ],
    keyWins: [
      "Built consistent 4x weekly routine",
      "Significantly lowered stress levels",
      "Enhanced focus and mental stamina at work",
      "Achieved muscle definition in arms and legs",
    ],
    metrics: [
      { label: "Weekly Workouts", value: "4x / week" },
      { label: "Stress Reduction", value: "70%" },
      { label: "Productivity", value: "+80%" },
    ],
    favoriteMeal: "Zesty Grilled Chicken with Sweet Potato Hash & Salad",
    favoriteHabit: "Micro-workouts before Zuhr prayer",
    gradientTheme: "sakura-blue",
    initialInspires: 89,
  },
  {
    id: "6",
    name: "Sumayya Siddiqui",
    location: "Birmingham, UK",
    age: 42,
    role: "NHS Nurse & Grandmother",
    category: "Fat Loss & Energy",
    duration: "1 Year",
    headline:
      "Reversed pre-diabetes markers and dropped 3 dress sizes at age 42.",
    quote:
      "My doctor was amazed at my blood test results. Joining this halal sisterhood gave me the tools, recipes, and prayers to prioritize my health.",
    fullStory: [
      "Working 12-hour hospital night shifts made healthy eating almost impossible. My blood sugar numbers were creeping into pre-diabetic ranges.",
      "The meal prep blueprints and high-protein halal snacks kept me fueled without blood sugar spikes. After 12 months, my HbA1c is in optimal range and I feel 10 years younger!",
    ],
    keyWins: [
      "Normalized blood sugar and cholesterol",
      "Dropped 3 dress sizes",
      "Sustained energy during 12-hour night shifts",
      "Inspiring other sisters in my local masjid",
    ],
    metrics: [
      { label: "Blood Markers", value: "Optimal" },
      { label: "Dress Sizes", value: "-3 Sizes" },
      { label: "Total Energy", value: "Max" },
    ],
    favoriteMeal: "Spiced Salmon with Turmeric Rice and Steamed Broccoli",
    favoriteHabit: "Meal-prepping 3 days in advance with Sunnah herbs",
    gradientTheme: "sakura-sky",
    initialInspires: 164,
  },
];

export const ALL_SUCCESS_STORIES: SuccessStory[] = [
  ...SUCCESS_STORIES,
  ...ADDITIONAL_STORIES,
];
