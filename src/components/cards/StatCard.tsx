type Variant = 'workout' | 'calories' | 'steps';

type Props = {
  title: string;
  subtitle?: string;
  icon?: string;
  variant?: Variant;
};

// Centralized styles for each variant
const VARIANT_STYLES: Record<
  Variant,
  {
    cardBg: string;
    tileBg: string;
  }
> = {
  workout: {
    cardBg: 'bg-[var(--color-workout)]',
    tileBg: 'bg-[var(--tile-workout)]',
  },
  calories: {
    cardBg: 'bg-[var(--color-calories)]',
    tileBg: 'bg-[var(--tile-calories)]',
  },
  steps: {
    cardBg: 'bg-[var(--color-steps)]',
    tileBg: 'bg-[var(--tile-steps)]',
  },
};

export default function StatCard({ title, subtitle, icon, variant }: Props) {
  const key: Variant = variant ?? 'workout';
  const cfg = VARIANT_STYLES[key];

  return (
    <div
      className={[
        'group relative overflow-hidden rounded-xl p-4 shadow-sm ring-1 ring-slate-100',
        'w-full h-[148px] md:w-[252px] md:h-[168px] flex-none',
        cfg.cardBg,
        'text-white',
      ].join(' ')}
    >
      <div className={`relative z-10 flex items-start gap-3 md:gap-4`}>
        {icon && (
          <div
            className={`h-10 w-10 md:h-[45px] md:w-[45px] rounded-md ${cfg.tileBg} flex items-center justify-center`}
          >
            <img src={icon} alt='' className='h-6 w-6 md:h-8 md:w-8' />
          </div>
        )}
        <div className='mt-0.5 md:mt-1'>
          <div
            className={`text-lg md:text-base font-bold leading-tight text-white`}
          >
            {title}
          </div>
          {subtitle && (
            <div
              className={`text-sm md:text-xs font-normal mt-1 text-white/90`}
            >
              {subtitle}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
