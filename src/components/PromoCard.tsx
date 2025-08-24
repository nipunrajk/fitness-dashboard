
export default function PromoCard() {
  return (
    <section className="relative overflow-hidden rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 p-5 text-white shadow-sm">
      <div className="max-w-xs">
        <h3 className="text-base font-semibold">50% off on Premium Membership</h3>
        <p className="mt-1 text-xs opacity-90">Lorem ipsum dolor sit amet, consectetur adip.</p>
        <button className="mt-3 rounded-full bg-white px-4 py-2 text-xs font-medium text-violet-700">Upgrade</button>
      </div>
      <img src="/images/promo.svg" alt="Promo" className="pointer-events-none absolute bottom-0 right-2 h-24 opacity-90" />
    </section>
  );
}
