
type Props = {
  title: string;
  subtitle?: string;
  icon?: string;
  from?: string;
  to?: string;
};

export default function StatCard({ title, subtitle, icon, from = 'from-cyan-500', to = 'to-blue-500' }: Props) {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
      <div className={`absolute inset-0 -z-10 bg-gradient-to-r ${from} ${to} opacity-10`}></div>
      <div className="flex items-center gap-3">
        {icon && <img src={icon} alt="" className="h-8 w-8" />}
        <div>
          <div className="text-sm text-slate-600">{title}</div>
          {subtitle && <div className="text-lg font-semibold text-slate-800">{subtitle}</div>}
        </div>
      </div>
      <div className="mt-4 h-12 w-full rounded-md bg-gradient-to-t from-slate-100 to-transparent"></div>
    </div>
  );
}
