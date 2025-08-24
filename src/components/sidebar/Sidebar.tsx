const navItems = [
  { label: 'Overview', icon: '/menu-icon/overview.svg', active: true }, 
  { label: 'Workout', icon: '/menu-icon/Workout.svg' },
  { label: 'Diet Plan', icon: '/menu-icon/Diet Plan.svg' },
  { label: 'Goals', icon: '/menu-icon/Goal.svg' },
  { label: 'My Schedule', icon: '/menu-icon/Schedule.svg' },
  { label: 'Progress', icon: '/menu-icon/Progres.svg' },
];

export default function Sidebar() {
  return (
    <aside className='flex h-full w-64 flex-col border-r bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60'>
      <div className='flex items-center justify-center gap-4 p-6 '>
        <div className='text-lg font-extrabold text-primary'>Fitness</div>
        <img src='/brand-icon.svg' alt='' className='h-8 w-8' />
      </div>
      <div className='px-6 mb-6'>
        <div className='h-px w-full bg-slate-200/70'></div>
      </div>
      <nav className='flex-1 space-y-2 px-6'>
        {navItems.map((item) => (
          <button
            key={item.label}
            className={
              'flex w-full items-center gap-4 rounded-lg px-4 py-3 text-left hover:bg-orange-50 ' +
              (item.active
                ? 'bg-primary text-white hover:bg-primary'
                : 'text-slate-700')
            }
            aria-current={item.active ? 'page' : undefined}
          >
            <img src={item.icon} alt='' className='h-5 w-5' />
            <span className='text-sm font-semibold'>{item.label}</span>
          </button>
        ))}
      </nav>
      <div className='mt-auto space-y-2 p-3'>
        <button className='flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-slate-600 hover:bg-slate-50'>
          <img src='/icons/help.svg' alt='' className='h-5 w-5' />
          <span className='text-sm'>Help</span>
        </button>
        <button className='flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-slate-600 hover:bg-slate-50'>
          <img src='/icons/logout.svg' alt='' className='h-5 w-5' />
          <span className='text-sm'>Logout</span>
        </button>
      </div>
    </aside>
  );
}
