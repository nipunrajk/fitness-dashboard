export type ChipVariant = 'orange' | 'green' | 'slate' | 'primary';

type Props = {
  icon?: string;
  title: string;
  subtitle?: string;
  chipText?: string;
  chipVariant?: ChipVariant;
  className?: string;
};

const chipStyles: Record<ChipVariant, string> = {
  orange: 'bg-orange-50 text-orange-600',
  green: 'bg-emerald-50 text-emerald-600',
  slate: 'bg-slate-100 text-slate-600',
  primary: 'bg-cyan-50 text-cyan-700',
};

export default function ListItemCard({
  icon,
  title,
  subtitle,
  chipText,
  chipVariant = 'orange',
  className,
}: Props) {
  return (
    <article
      className={[
        'flex items-center justify-between gap-3 rounded-xl bg-white p-3 shadow-sm ring-1 ring-slate-100',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className='flex items-center gap-3'>
        {icon && <img src={icon} alt='' className='h-9 w-9' />}
        <div>
          <div className='text-sm font-medium text-slate-800'>{title}</div>
          {subtitle && <div className='text-xs text-slate-500'>{subtitle}</div>}
        </div>
      </div>
      {chipText && (
        <span className={['rounded-full px-2 py-1 text-xs', chipStyles[chipVariant]].join(' ')}>
          {chipText}
        </span>
      )}
    </article>
  );
}
