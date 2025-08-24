
const navItems = [
  { label: 'Overview', icon: '/icons/overview.svg', active: true },
  { label: 'Workout', icon: '/icons/workout.svg' },
  { label: 'Diet Plan', icon: '/icons/diet.svg' },
  { label: 'Goals', icon: '/icons/goals.svg' },
  { label: 'My Schedule', icon: '/icons/schedule.svg' },
  { label: 'Progress', icon: '/icons/progress.svg' },
];

export default function Sidebar() {
  return (
    <aside className="flex h-full w-64 flex-col border-r bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="flex items-center gap-3 p-6">
        <div className="text-xl font-semibold text-orange-500">Fitness</div>
        <img src="/brand-icon.svg" alt="" className="h-6 w-6" />
      </div>
      <nav className="flex-1 space-y-2 px-3">
        {navItems.map((item) => (
          <button
            key={item.label}
            className={
              'flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left hover:bg-orange-50 ' +
              (item.active ? 'bg-orange-500 text-white hover:bg-orange-500' : 'text-slate-700')
            }
            aria-current={item.active ? 'page' : undefined}
          >
            <img src={item.icon} alt="" className="h-5 w-5" />
            <span className="text-sm font-medium">{item.label}</span>
          </button>
        ))}
      </nav>
      <div className="mt-auto space-y-2 p-3">
        <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-slate-600 hover:bg-slate-50">
          <img src="/icons/help.svg" alt="" className="h-5 w-5" />
          <span className="text-sm">Help</span>
        </button>
        <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-slate-600 hover:bg-slate-50">
          <img src="/icons/logout.svg" alt="" className="h-5 w-5" />
          <span className="text-sm">Logout</span>
        </button>
      </div>
    </aside>
  );
}
