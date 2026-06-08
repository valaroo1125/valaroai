export default function LogoMark({ className = "h-10 w-auto" }) {
  return (
    <svg
      viewBox="0 0 200 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="logo-grad" x1="0" y1="0" x2="200" y2="180" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#22D3EE" />
          <stop offset="100%" stopColor="#1D4ED8" />
        </linearGradient>
      </defs>
      {/* Outer triangle */}
      <path
        d="M100 10 L195 168 L5 168 Z"
        fill="url(#logo-grad)"
        stroke="#0F172A"
        strokeWidth="8"
        strokeLinejoin="round"
      />
      {/* Inner cutout triangle */}
      <path
        d="M100 55 L160 158 L40 158 Z"
        fill="transparent"
        stroke="#0F172A"
        strokeWidth="8"
        strokeLinejoin="round"
      />
    </svg>
  );
}
