import type {
  StatCardItem,
  ScheduleItem,
  GoalItem,
  FoodRow,
  ChartPoint,
} from '../types';

export const statCards: StatCardItem[] = [
  {
    title: 'Workout',
    subtitle: '4 hrs',
    variant: 'workout',
    icon: '/banner/workout-icon.svg',
  },
  {
    title: 'Calories',
    subtitle: '1800 kcal',
    variant: 'calories',
    icon: '/banner/calorie-icon.svg',
  },
  {
    title: 'Steps',
    subtitle: '2200 steps',
    variant: 'steps',
    icon: '/banner/steps-icon.svg',
  },
];

export const chartData: ChartPoint[] = [
  { day: 'Mon', workout: 45, calories: 30, steps: 55 },
  { day: 'Tue', workout: 35, calories: 45, steps: 40 },
  { day: 'Wed', workout: 70, calories: 50, steps: 65 },
  { day: 'Thu', workout: 50, calories: 35, steps: 55 },
  { day: 'Fri', workout: 60, calories: 65, steps: 70 },
  { day: 'Sat', workout: 55, calories: 40, steps: 60 },
  { day: 'Sun', workout: 75, calories: 55, steps: 80 },
];

export const schedule: ScheduleItem[] = [
  {
    day: 'Monday',
    title: 'Stretch',
    time: '08:00 AM',
    meta: '20 Sets',
    icon: '/schedule/stretch.png',
  },
  {
    day: 'Tuesday',
    title: 'Back Stretch',
    time: '08:00 AM',
    meta: '10 Round',
    icon: '/schedule/back-stretch.png',
  },
  {
    day: 'Wednesday',
    title: 'Yoga',
    time: '09:00 AM',
    meta: '20 min',
    icon: '/schedule/yoga.png',
  },
];

export const goals: GoalItem[] = [
  {
    title: 'ABS & Stretch',
    subtitle: 'Saturday, April 14 | 08:00 AM',
    meta: '30 Min/day',
  },
  {
    title: 'Push Up',
    subtitle: 'Sunday, April 15 | 08:00 AM',
    meta: '50 Sets/day',
  },
];

export const foods: FoodRow[] = [
  {
    food: 'Burrito',
    meal: 'Pizza Burger',
    priority: '01:00 AM',
    carbs: '20 gm',
  },
  {
    food: 'Burger',
    meal: 'Pizza Burger',
    priority: '01:00 AM',
    carbs: '20 gm',
  },
];
