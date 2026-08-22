export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  category:
    | "Nutrition"
    | "Workouts"
    | "Fasting & Ramadan"
    | "Wellness"
    | "Mindset";
  readTime: string;
  date: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  featured?: boolean;
  tags: string[];
  gradientTheme?: "mint" | "lavender" | "peach" | "rose";
}
