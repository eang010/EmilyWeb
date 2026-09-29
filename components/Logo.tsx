export default function Logo({ className = "h-[22px] w-auto" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 34 24"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2 3.2h10.2M2 3.2V20.8M2 12h7.4M2 20.8h10.2"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="square"
      />
      <path
        d="M19.2 20.8 24 3.2 28.8 20.8M21.1 14.2h5.8"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  );
}
