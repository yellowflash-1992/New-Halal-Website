export interface StoryMilestone {
  label: string;
  value: string;
}

export type StoryCategory =
  | "All"
  | "Fat Loss & Energy"
  | "Ramadan Routine"
  | "Sunnah Nutrition"
  | "Postpartum & Strength"
  | "Busy Sisters";

export interface SuccessStory {
  id: string;
  name: string;
  location: string;
  age?: number;
  role: string;
  category: StoryCategory;
  duration: string;
  headline: string;
  quote: string;
  fullStory: string[];
  keyWins: string[];
  metrics: StoryMilestone[];
  favoriteMeal: string;
  favoriteHabit: string;
  gradientTheme:
    | "sakura-blue"
    | "sakura-sky"
    | "sakura-lavender"
    | "sakura-mint";
  featured?: boolean;
  initialInspires: number;
}
