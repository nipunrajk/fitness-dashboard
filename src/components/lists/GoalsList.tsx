import { goals } from '../../data/mock';
import ListSection from '../list-ui/ListSection';
import ListItemCard from '../list-ui/ListItemCard';

export default function GoalsList() {
  return (
    <ListSection title="Goals">
      {goals.map((g, i) => (
        <ListItemCard
          key={i}
          title={g.title}
          subtitle={g.subtitle}
          chipText={g.meta}
          chipVariant="orange"
        />
      ))}
    </ListSection>
  );
}
