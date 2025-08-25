type Variant = 'workout' | 'calories' | 'steps';

type Props = {
  title: string;
  subtitle?: string;
  icon?: string;
  variant?: Variant;
  from?: string; // gradient start color
  to?: string; // gradient end color
};


const VARIANT_STYLES: Record<
  Variant,
  {
    cardBg: string;
    tileBg: string;
    bannerSrc: string;
  }
> = {
  workout: {
    cardBg: 'bg-[var(--color-workout)]',
    tileBg: 'bg-[var(--tile-workout)]',
    bannerSrc: '/banner/workout.svg',
  },
  calories: {
    cardBg: 'bg-[var(--color-calories)]',
    tileBg: 'bg-[var(--tile-calories)]',
    bannerSrc: '/banner/calorie.svg',
  },
  steps: {
    cardBg: 'bg-[var(--color-steps)]',
    tileBg: 'bg-[var(--tile-steps)]',
    bannerSrc: '/banner/steps.svg',
  },
};

export default function StatCard({ title, subtitle, icon, variant, from, to }: Props) {
  const key: Variant = variant ?? 'workout';
  const cfg = VARIANT_STYLES[key];
  const useGradient = Boolean(from && to);

  return (
    <div
      className={[
        'group relative overflow-hidden rounded-xl p-4 shadow-sm ring-1 ring-slate-100',
        'w-full h-[148px] md:w-[252px] md:h-[168px] flex-none',
        useGradient ? '' : cfg.cardBg,
        'text-white',
      ].join(' ')}
      style={useGradient ? { backgroundImage: `linear-gradient(135deg, ${from}, ${to})` } : undefined}
    >
      <div className={`relative z-10 flex items-start gap-3 md:gap-4`}>
        {icon && (
          <div
            className={`h-10 w-10 md:h-[45px] md:w-[45px] rounded-md ${useGradient ? '' : cfg.tileBg} flex items-center justify-center`}
            style={useGradient ? { background: from } : undefined}
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

      <img
        src={cfg.bannerSrc}
        alt=''
        className='pointer-events-none absolute inset-x-0 bottom-0 z-0 w-full select-none'
      />
    </div>
  );
}
