import HeroBanner from '../components/banner/HeroBanner';
import StatCard from '../components/cards/StatCard';
import GoalProgress from '../components/chart/GoalProgress';
import FoodTable from '../components/table/FoodTable';
import ScheduleList from '../components/lists/ScheduleList';
import GoalsList from '../components/lists/GoalsList';
import PromoCard from '../components/PromoCard';
import { statCards } from '../data/mock';

export default function Overview() {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <div className="space-y-4 lg:col-span-2">
        <HeroBanner />
        <div className="grid grid-cols-1 gap-4 mb-6 sm:grid-cols-3">
          {statCards.map((c) => (
            <StatCard
              key={c.title}
              title={c.title}
              subtitle={c.subtitle}
              icon={c.icon}
              variant={c.variant}
              from={c.colorFrom}
              to={c.colorTo}
            />
          ))}
        </div>
        <GoalProgress />
        <FoodTable />
      </div>
      <div className="space-y-4">
        <ScheduleList />
        <GoalsList />
        <PromoCard />
      </div>
    </div>
  );
}
