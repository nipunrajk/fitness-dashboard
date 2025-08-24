import { chartData } from '../../data/mock';

// Simple CSS bar chart for three series per day to avoid external deps
export default function GoalProgress() {
  return (
    <section className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-base font-semibold text-slate-800">Goal Progress</h3>
        <button className="rounded-md border px-3 py-1 text-sm text-slate-600">Weekly ▾</button>
      </div>
      <div className="mt-2 grid grid-cols-7 gap-3">
        {chartData.map((d) => (
          <div key={d.day} className="flex flex-col items-center gap-2">
            <div className="flex h-36 w-full items-end justify-center gap-1">
              <div className="h-full w-2 rounded bg-blue-500/20">
                <div style={{ height: `${d.workout}%` }} className="w-full rounded bg-cyan-500"></div>
              </div>
              <div className="h-full w-2 rounded bg-amber-500/20">
                <div style={{ height: `${d.calories}%` }} className="w-full rounded bg-amber-500"></div>
              </div>
              <div className="h-full w-2 rounded bg-violet-500/20">
                <div style={{ height: `${d.steps}%` }} className="w-full rounded bg-violet-600"></div>
              </div>
            </div>
            <span className="text-xs text-slate-500">{d.day}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center gap-4 text-xs text-slate-600">
        <div className="flex items-center gap-1"><span className="inline-block h-2 w-2 rounded-full bg-cyan-500"></span> Workout</div>
        <div className="flex items-center gap-1"><span className="inline-block h-2 w-2 rounded-full bg-amber-500"></span> Calories</div>
        <div className="flex items-center gap-1"><span className="inline-block h-2 w-2 rounded-full bg-violet-600"></span> Steps</div>
      </div>
    </section>
  );
}
