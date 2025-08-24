type Props = {
  onClick?: () => void;
  ariaLabel?: string;
  className?: string;
};

export default function HamburgerButton({ onClick, ariaLabel = 'Open menu', className = '' }: Props) {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
      className={`-ml-1 inline-flex h-9 w-9 items-center justify-center rounded-md border bg-white text-slate-700 hover:bg-slate-50 md:hidden ${className}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="h-5 w-5"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
  );
}
