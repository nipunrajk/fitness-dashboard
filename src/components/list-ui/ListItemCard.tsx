export type ChipVariant = 'orange' | 'green' | 'slate' | 'primary';

type Props = {
  icon?: string;
  title: string;
  subtitle?: string;
  chipText?: string;
  chipVariant?: ChipVariant;
  heading?: string;
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
  heading,
  className,
}: Props) {
  return (
    <article
      className={[
        'rounded-xl bg-white p-4 mb-4 shadow-sm ring-1 ring-slate-100',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {heading && (
        <div className='mb-4 text-lg font-medium text-secondary'>{heading}</div>
      )}
      <div className='flex items-center justify-between gap-3'>
        <div className='flex items-center gap-4'>
          {icon && <img src={icon} alt='' className='h-8 w-11' />}
          <div>
            <div className='text-sm font-medium text-slate-800'>{title}</div>
            {subtitle && (
              <div className='text-xs text-secondary font-normal'>
                {subtitle}
              </div>
            )}
          </div>
        </div>
        {chipText && (
          <span
            className={[
              'rounded-full px-2 py-1 text-xs font-medium',
              chipStyles[chipVariant],
            ].join(' ')}
          >
            {chipText}
          </span>
        )}
      </div>
    </article>
  );
}
