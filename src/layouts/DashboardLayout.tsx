import React from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import Topbar from '../components/topbar/Topbar';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="grid min-h-screen grid-cols-1 md:grid-cols-[16rem_1fr]">
        <div className="hidden md:block"><Sidebar /></div>
        <div className="flex min-h-screen flex-col">
          <Topbar />
          <main className="mx-auto w-full max-w-7xl flex-1 p-4 md:p-6">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
