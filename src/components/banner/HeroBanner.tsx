export default function HeroBanner() {
  return (
    <section
      className='relative overflow-hidden rounded-xl p-8 pb-9 mb-6 text-white shadow-sm
             bg-[image:var(--bg-banner)]'
    >
      <div className='relative z-30 max-w-[306px]'>
        <h2 className='text-2xl font-extrabold'>Track Your Daily Activities</h2>
        <p className='mt-1 text-xs font-normal opacity-90'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
          do eiusmod
        </p>
      </div>

      {/* Right-side image as a background layer */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-no-repeat bg-right bg-contain md:bg-cover z-10 [background-image:url('/anastasia.png')] [mask-image:linear-gradient(to_left,black_75%,transparent)]"
      />

      {/* Gradient overlay to tint the image (above image, below text) */}
      <div
        aria-hidden
        className='pointer-events-none absolute inset-0 bg-[image:var(--bg-banner)]  z-20'
      />
    </section>
  );
}
