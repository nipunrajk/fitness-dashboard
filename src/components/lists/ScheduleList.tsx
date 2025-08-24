import { schedule } from '../../data/mock';
import ListSection from '../list-ui/ListSection';
import ListItemCard from '../list-ui/ListItemCard';

export default function ScheduleList() {
  return (
    <ListSection title='My Schedule'>
      {schedule.map((s, i) => (
        <ListItemCard
          key={i}
          icon={s.icon}
          title={s.title}
          subtitle={`At ${s.time}`}
          chipText={s.meta}
          chipVariant='orange'
        />
      ))}
    </ListSection>
  );
}
