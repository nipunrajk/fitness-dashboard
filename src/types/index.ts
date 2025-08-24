export type StatCardItem = {
  title: string;
  subtitle?: string;
  colorFrom?: string; // tailwind from-*
  colorTo?: string;   // tailwind to-*
  icon?: string;      // path to svg in public
};

export type ScheduleItem = {
  day: string;    // e.g., "Monday"
  title: string;  // e.g., "Stretch"
  time: string;   // e.g., "08:00 AM"
  meta: string;   // e.g., "20 Sets"
  icon?: string;
};

export type GoalItem = {
  title: string;
  subtitle: string;
  meta: string; // e.g., "30 Min/day"
};

export type FoodRow = {
  food: string;
  meal: string;
  priority: string;
  carbs: string;
};

export type ChartPoint = {
  day: string; // Mon..Sun
  workout: number; // 0..100
  calories: number; // 0..100
  steps: number; // 0..100
};
