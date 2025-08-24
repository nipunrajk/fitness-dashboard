import React from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import Topbar from '../components/topbar/Topbar';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setMobileOpen(false);
    }
    if (mobileOpen) document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [mobileOpen]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Mobile off-canvas */}
      <div className="md:hidden">
        {/* Overlay */}
        {mobileOpen && (
          <div
            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-[2px]"
            onClick={() => setMobileOpen(false)}
          />
        )}
        {/* Drawer */}
        <div
          role="dialog"
          aria-modal={mobileOpen ? 'true' : undefined}
          className={`fixed inset-y-0 left-0 z-50 w-64 transform bg-white shadow-xl transition-transform duration-200 ${
            mobileOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <Sidebar />
        </div>
      </div>

      <div className="grid min-h-screen grid-cols-1 md:grid-cols-[16rem_1fr]">
        {/* Desktop sidebar */}
        <div className="hidden md:block"><Sidebar /></div>
        <div className="flex min-h-screen flex-col">
          <Topbar onMenuClick={() => setMobileOpen(true)} />
          <main className="mx-auto w-full max-w-7xl flex-1 p-4 md:p-6">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
