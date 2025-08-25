import HamburgerButton from '../ui/HamburgerButton';

type TopbarProps = { onMenuClick?: () => void };

export default function Topbar({ onMenuClick }: TopbarProps) {
  return (
    <header className='flex items-center gap-4 border-b border-slate-200/70 bg-white/70 p-4 backdrop-blur supports-[backdrop-filter]:bg-white/60'>

      <div className='flex min-w-0 items-center gap-3'>
        <HamburgerButton onClick={onMenuClick} />
        <div className='flex flex-col gap-1'>
          <span className='text-[10px] font-normal  text-muted'>
            Good Morning
          </span>
          <h1 className='text-base font-semibold text-secondary'>
            Welcome Back!
          </h1>
        </div>
      </div>

      <div className='flex min-w-0 flex-1 items-center gap-4 justify-end'>
        <label className='relative hidden min-w-0 flex-1 sm:flex max-w-md md:max-w-lg'>
          <span className='sr-only text-sm font-normal text-muted'>Search</span>
          <input
            className='w-full h-10 rounded-md bg-neutral-200 px-4 pl-9 pr-3 text-sm text-secondary placeholder:text-muted
            outline-none border border-neutral-100 focus:border-primary focus:ring-0'
            placeholder='Search'
          />
          <img
            src='/menu-icon/search.svg'
            alt=''
            aria-hidden='true'
            className='pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 opacity-70'
          />
        </label>
        <button
          aria-label='Notifications'
          className='grid h-6 w-6 place-items-center bg-white text-slate-600 hover:bg-slate-50'
        >
          <img src='/menu-icon/notify.svg' alt='' />
        </button>
        <button
          aria-label='Settings'
          className='grid h-6 w-6 place-items-center bg-white text-slate-600 hover:bg-slate-50'
        >
          <img src='/menu-icon/settings.svg' alt='' />
        </button>
        <img
          src='/Avatar.png'
          alt='User avatar'
          className='h-9 w-9 rounded-full border-none'
        />
      </div>
    </header>
  );
}
