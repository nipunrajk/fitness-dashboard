type TopbarProps = { onMenuClick?: () => void };

export default function Topbar({ onMenuClick }: TopbarProps) {
  return (
    <header className="flex items-center justify-between gap-4 border-b bg-white/70 p-4 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="flex items-center gap-3">
        <button
          type="button"
          aria-label="Open menu"
          onClick={onMenuClick}
          className="-ml-1 inline-flex h-9 w-9 items-center justify-center rounded-md border bg-white text-slate-700 hover:bg-slate-50 md:hidden"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <div className="flex flex-col">
          <span className="text-sm text-slate-500">Good Morning</span>
          <h1 className="text-lg font-semibold text-slate-800">Welcome Back!</h1>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <label className="relative hidden sm:block">
          <span className="sr-only">Search</span>
          <input
            className="w-64 rounded-full border px-4 py-2 pl-9 text-sm outline-none ring-orange-200 focus:ring-2"
            placeholder="Search"
          />
          <svg className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M12.9 14.32a8 8 0 111.414-1.414l3.387 3.387a1 1 0 01-1.414 1.414l-3.387-3.387zM14 8a6 6 0 11-12 0 6 6 0 0112 0z" clipRule="evenodd"/></svg>
        </label>
        <button aria-label="Notifications" className="grid h-9 w-9 place-items-center rounded-full border bg-white text-slate-600 hover:bg-slate-50">🔔</button>
        <button aria-label="Settings" className="grid h-9 w-9 place-items-center rounded-full border bg-white text-slate-600 hover:bg-slate-50">⚙️</button>
        <img src="/images/avatar.svg" alt="User avatar" className="h-9 w-9 rounded-full border" />
      </div>
    </header>
  );
}
