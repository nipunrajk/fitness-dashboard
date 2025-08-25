export default function PromoCard() {
  return (
    <section
      className='relative overflow-hidden rounded-2xl py-6 px-4 text-white shadow-sm'
      style={{ background: 'var(--gradient-promo)' }}
    >
      <img
        src='/promo-card/gradient.svg'
        alt=''
        aria-hidden
        className='pointer-events-none absolute bottom-0 right-0 h-28 opacity-70 md:h-40'
      />

      <div className='relative z-10 max-w-md pr-28'>
        <h3 className='text-sm font-semibold leading-tight'>
          50% off on Premium Membership
        </h3>
        <p className='mt-4 text-xs font-normal opacity-90'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod
        </p>
        <button
          type='button'
          className='mt-10 inline-flex items-center rounded-2xl bg-primary px-6 py-2 text-sm font-semibold text-white shadow hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-white/40'
        >
          Upgrade
        </button>
      </div>

      <img
        src='/promo-card/fitness.png'
        alt='Promo'
        className='pointer-events-none absolute bottom-0 right-4 h-28 opacity-95 md:right-6 md:h-36'
      />
    </section>
  );
}
