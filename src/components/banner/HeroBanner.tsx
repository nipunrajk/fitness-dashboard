
export default function HeroBanner() {
  return (
    <section className="relative overflow-hidden rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 p-6 text-white shadow-sm">
      <div className="max-w-md">
        <h2 className="text-xl font-semibold">Track Your Daily Activities</h2>
        <p className="mt-1 text-sm opacity-90">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
      </div>
      <img src="/images/banner.svg" alt="Fitness banner" className="pointer-events-none absolute right-4 top-1/2 h-28 -translate-y-1/2 opacity-90" />
    </section>
  );
}
