import { goals } from '../../data/mock';

export default function GoalsList() {
  return (
    <section className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold text-slate-800">Goals</h3>
        <button className="text-sm text-orange-600">View All</button>
      </div>
      {goals.map((g, i) => (
        <article key={i} className="flex items-center justify-between gap-3 rounded-xl bg-white p-3 shadow-sm ring-1 ring-slate-100">
          <div>
            <div className="text-sm font-medium text-slate-800">{g.title}</div>
            <div className="text-xs text-slate-500">{g.subtitle}</div>
          </div>
          <span className="rounded-full bg-orange-50 px-2 py-1 text-xs text-orange-600">{g.meta}</span>
        </article>
      ))}
    </section>
  );
}
