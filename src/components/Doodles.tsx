type DoodleProps = {
  name: string
  className?: string
}

const paths: Record<string, React.ReactNode> = {
  star: (
    <path d="M12 3l2.2 5.6L20 10l-4.4 3.6L17 20l-5-3.2L7 20l1.4-6.4L4 10l5.8-1.4L12 3z" />
  ),
  spark: (
    <>
      <path d="M12 4v5" />
      <path d="M12 15v5" />
      <path d="M4 12h5" />
      <path d="M15 12h5" />
      <path d="M7 7l3 3" />
      <path d="M14 14l3 3" />
      <path d="M17 7l-3 3" />
      <path d="M10 14l-3 3" />
    </>
  ),
  mrt: (
    <>
      <rect x="5" y="4" width="14" height="13" rx="3" />
      <path d="M9 21l1.5-4" />
      <path d="M15 21l-1.5-4" />
      <path d="M5 11h14" />
    </>
  ),
  flag: (
    <>
      <path d="M6 21V4" />
      <path d="M6 5c4-2 8 2 12 0v7c-4 2-8-2-12 0" />
    </>
  ),
  moon: (
    <path d="M19 14.5A7.5 7.5 0 019.5 5a7.5 7.5 0 109.5 9.5z" />
  ),
  phone: (
    <>
      <rect x="7" y="3" width="10" height="18" rx="2.5" />
      <path d="M11 17.5h2" />
    </>
  ),
  cube: (
    <>
      <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" />
      <path d="M12 12l8-4.5" />
      <path d="M12 12L4 7.5" />
      <path d="M12 12v9" />
    </>
  ),
  flower: (
    <>
      <circle cx="12" cy="12" r="2.4" />
      <path d="M12 9.6c0-3 0-4.6 0-5.6" />
      <path d="M12 14.4c0 3 0 4.6 0 5.6" />
      <path d="M9.6 12c-3 0-4.6 0-5.6 0" />
      <path d="M14.4 12c3 0 4.6 0 5.6 0" />
      <path d="M10.3 10.3L7.5 7.5" />
      <path d="M13.7 13.7l2.8 2.8" />
      <path d="M13.7 10.3l2.8-2.8" />
      <path d="M10.3 13.7l-2.8 2.8" />
    </>
  ),
  music: (
    <>
      <path d="M9 18V5l10-2v13" />
      <circle cx="6.5" cy="18" r="2.5" />
      <circle cx="16.5" cy="16" r="2.5" />
    </>
  ),
  pause: (
    <>
      <path d="M9 5v14" />
      <path d="M15 5v14" />
    </>
  ),
}

export function Doodle({ name, className = "doodle" }: DoodleProps) {
  const solid = name === "star" || name === "moon"
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill={solid ? "currentColor" : "none"}
      stroke={solid ? "none" : "currentColor"}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}

export function EnvelopeLetterDoodle() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 8l8-4 8 4v11a1 1 0 01-1 1H5a1 1 0 01-1-1V8z" />
      <path d="M4 9l8 5 8-5" />
    </svg>
  )
}
