import { BlogPost } from "../types/blog";

export const BLOG_CATEGORIES = [
  "All",
  "Nutrition",
  "Workouts",
  "Fasting & Ramadan",
  "Wellness",
  "Mindset",
] as const;

export type BlogCategory = (typeof BLOG_CATEGORIES)[number];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    slug: "nourishing-body-soul-sunnah-nutrition",
    title: "Nourishing Body & Soul: A Sunnah Guide to Healthy Eating",
    excerpt:
      "Discover how the prophetic traditions on mindful portions, wholesome foods like dates, honey, and olive oil can transform your energy and fitness journey.",
    category: "Nutrition",
    readTime: "5 min read",
    date: "March 12, 2026",
    featured: true,
    tags: ["Sunnah Foods", "Nutrition", "Clean Eating", "Holistic Wellness"],
    gradientTheme: "mint",
    author: {
      name: "Coach Amina",
      role: "Certified Holistic Nutritionist & Trainer",
    },
    content: [
      "In our fast-paced modern world, nutrition is often reduced to counting calories and macronutrients. While understanding energy balance is helpful, Islamic tradition offers a deeply holistic philosophy that honors both physical vitality and spiritual well-being.",
      "The Prophet Muhammad (ﷺ) taught the timeless principle of moderation in the famous hadith: 'A human being fills no worse vessel than his stomach. It is sufficient for a son of Adam to have a few mouthfuls to keep his back straight. But if he must, then one third for food, one third for drink, and one third for air.' (Sunan al-Tirmidhi).",
      "By incorporating nutrient-dense Sunnah ingredients—such as dates for sustained energy, raw honey for immunity, olive oil for heart health, and barley for digestion—we build meals that nourish our cells and support our daily prayers and workouts.",
      "Practical Tip: Start your mornings with 3-7 Ajwa dates and a glass of warm water with a teaspoon of pure raw honey for sustained morning stamina.",
    ],
  },
  {
    id: "2",
    slug: "staying-strong-during-ramadan-fasting",
    title:
      "Maximizing Workouts & Recovery During Ramadan and Intermittent Fasting",
    excerpt:
      "A step-by-step fitness guide for fasting sisters: when to schedule workouts, optimal suhoor meals, and staying hydrated between Iftar and Fajr.",
    category: "Fasting & Ramadan",
    readTime: "6 min read",
    date: "March 8, 2026",
    featured: true,
    tags: ["Ramadan Fitness", "Hydration", "Suhoor Meals", "Recovery"],
    gradientTheme: "peach",
    author: {
      name: "Sister Fatima",
      role: "Fitness Coach & Ramadan Wellness Lead",
    },
    content: [
      "Fasting is a sacred opportunity for spiritual purification and bodily rejuvenation. However, many Muslim women worry about losing muscle mass, feeling lethargic, or skipping fitness altogether during the holy month.",
      "The key to thriving during Ramadan is prioritizing recovery, intelligent timing, and hydration. The best times for light-to-moderate strength or mobility workouts are either 45 minutes before Iftar (so you can rehydrate immediately) or 1-2 hours after a light Iftar meal.",
      "For Suhoor, emphasize complex carbohydrates (like oats and brown rice) paired with quality proteins (eggs, greek yogurt, legumes) and healthy fats (avocado, chia seeds) to maintain steady glucose levels throughout the fasting hours.",
      "Hydration Strategy: Aim for 2.5 to 3 liters of water spaced consistently from Iftar to Suhoor, rather than chugging a liter at Fajr.",
    ],
  },
];
export const ADDITIONAL_BLOG_POSTS: BlogPost[] = [
  {
    id: "3",
    slug: "modest-home-workout-routines-that-work",
    title: "Modest Home Workout Routines: No Expensive Gym Membership Needed",
    excerpt:
      "Transform your living room into an empowering, private fitness sanctuary with these 20-minute bodyweight and resistance band workouts.",
    category: "Workouts",
    readTime: "4 min read",
    date: "February 28, 2026",
    tags: ["Home Workouts", "Bodyweight", "Resistance Bands", "No Equipment"],
    gradientTheme: "lavender",
    author: {
      name: "Coach Amina",
      role: "Certified Holistic Nutritionist & Trainer",
    },
    content: [
      "For many sisters, crowded public gyms with loud music and lack of privacy can feel overwhelming. The good news is that you don't need a commercial gym to build strength, sculpt lean muscle, and boost cardiovascular health.",
      "A set of resistance bands and your own bodyweight can deliver a powerful, joint-friendly workout right in the comfort of your living room.",
      "Key Movement Patterns to Include: Goblet Squats with bands, Wall Push-Ups or Knee Push-Ups, Glute Bridges with band pulses, and Plank variations for core stability.",
      "Aim for 3 rounds of 10-12 repetitions per exercise, 3 to 4 times a week for noticeable improvements in energy and strength.",
    ],
  },
  {
    id: "4",
    slug: "strength-training-myths-for-muslim-women",
    title: "Strength Training for Muslim Women: Debunking the Top 5 Myths",
    excerpt:
      "Lifting weights won't make you bulky. Learn why strength training is essential for bone density, metabolism, and lifelong joint strength.",
    category: "Workouts",
    readTime: "5 min read",
    date: "February 20, 2026",
    tags: ["Strength Training", "Bone Health", "Metabolism", "Women Fitness"],
    gradientTheme: "rose",
    author: {
      name: "Dr. Maryam K.",
      role: "Sports Medicine Specialist & Fitness Advocate",
    },
    content: [
      "Myth #1: 'Lifting weights makes women bulky.' In reality, female biology has significantly lower levels of testosterone, meaning progressive resistance training leads to lean, toned muscles rather than excessive bulk.",
      "Strength training is the single most effective way to stimulate bone mineral density, preventing osteoporosis and protecting joints as we age.",
      "It also elevates your resting metabolic rate, helping you burn energy efficiently even when resting or performing daily activities.",
      "Start with fundamental compound exercises: Squats, deadlifts with dumbbells, overhead presses, and rows.",
    ],
  },
  {
    id: "5",
    slug: "hydration-and-energy-for-busy-sisters",
    title: "Hydration & Energy: Staying Energized During Busy Days & Prayers",
    excerpt:
      "Simple electrolyte strategies, herbal infusions, and sleep habits to keep your energy high from morning Fajr to evening Isha.",
    category: "Wellness",
    readTime: "4 min read",
    date: "February 15, 2026",
    tags: ["Hydration", "Energy", "Electrolytes", "Sleep Health"],
    gradientTheme: "mint",
    author: {
      name: "Sister Fatima",
      role: "Fitness Coach & Ramadan Wellness Lead",
    },
    content: [
      "Chronic fatigue is often not a lack of sleep, but sub-clinical dehydration. When cells lack optimal fluid balance, energy production in the mitochondria slows down.",
      "Water alone isn't always enough—our bodies require essential electrolytes like potassium, magnesium, and sodium to absorb and retain fluids.",
      "Natural Electrolyte Drink: Mix 500ml of filtered water with a pinch of Himalayan pink salt, a squeeze of fresh lemon, and a teaspoon of raw honey for an instant afternoon energy lift.",
      "Pair this with a consistent sleep schedule aligned with the natural circadian rhythm to wake up refreshed for Fajr.",
    ],
  },
  {
    id: "6",
    slug: "mindful-eating-prophetic-wisdom",
    title: "Mindful Eating in Islam: Portion Control & Prophetic Wisdom",
    excerpt:
      "How practicing intentional gratitude, chewing slowly, and pausing between meals creates a peaceful, guilt-free relationship with food.",
    category: "Mindset",
    readTime: "4 min read",
    date: "February 5, 2026",
    tags: ["Mindful Eating", "Prophetic Wisdom", "Mental Health", "Gratitude"],
    gradientTheme: "peach",
    author: {
      name: "Coach Amina",
      role: "Certified Holistic Nutritionist & Trainer",
    },
    content: [
      "Mindful eating is not a modern fad; it has been central to Islamic etiquette for over 1400 years. Starting every meal with 'Bismillah' (In the name of Allah) grounds the heart in gratitude and awareness.",
      "Eating with intention allows your brain sufficient time (typically 15-20 minutes) to register satiety signals sent from your stomach via leptin and CCK hormones.",
      "When we eat in a rush or while looking at screens, we disconnect from our satiety cues, leading to overeating and sluggishness.",
      "Practice the 3-second pause: Take three deep breaths before your meal, admire the colors on your plate, and eat with full presence and gratitude.",
    ],
  },
];

export const ALL_BLOG_POSTS: BlogPost[] = [...BLOG_POSTS, ...ADDITIONAL_BLOG_POSTS];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return ALL_BLOG_POSTS.find((p) => p.slug === slug);
}

export function getRelatedPosts(currentSlug: string, category: string, limit = 3): BlogPost[] {
  const sameCategory = ALL_BLOG_POSTS.filter(
    (p) => p.slug !== currentSlug && p.category === category
  );
  if (sameCategory.length >= limit) return sameCategory.slice(0, limit);

  const others = ALL_BLOG_POSTS.filter(
    (p) => p.slug !== currentSlug && p.category !== category
  );
  return [...sameCategory, ...others].slice(0, limit);
}
