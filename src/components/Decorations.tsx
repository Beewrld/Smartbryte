import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

/** Small arrow used inside the primary pill button. */
export function ArrowIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" focusable="false" {...props}>
      <path
        d="M3.5 10h12.2M11.1 5.5 15.7 10l-4.6 4.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/** Four-point sparkle, used as a wordless graphic on a gold disc. */
export function SparkleIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false" {...props}>
      <path
        d="M12 2.2c.55 4.35 1.9 5.7 6.25 6.25-4.35.55-5.7 1.9-6.25 6.25-.55-4.35-1.9-5.7-6.25-6.25C10.1 7.9 11.45 6.55 12 2.2Z"
        fill="currentColor"
      />
      <path
        d="M19.1 15.4c.22 1.75.76 2.29 2.5 2.5-1.74.22-2.28.76-2.5 2.5-.22-1.74-.76-2.28-2.5-2.5 1.74-.21 2.28-.75 2.5-2.5Z"
        fill="currentColor"
        opacity=".65"
      />
    </svg>
  )
}

/** Loose hand-drawn sunburst, borrowed from the school references as a doodle. */
export function SunburstIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" focusable="false" {...props}>
      <circle cx="24" cy="24" r="7.5" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M24 4.5v6M24 37.5v6M4.5 24h6M37.5 24h6M10.2 10.2l4.3 4.3M33.5 33.5l4.3 4.3M37.8 10.2l-4.3 4.3M14.5 33.5l-4.3 4.3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  )
}

/** Concentric quarter-circle line work used behind the introduction collage. */
export function ArcLines(props: IconProps) {
  return (
    <svg viewBox="0 0 180 180" fill="none" aria-hidden="true" focusable="false" {...props}>
      {[36, 60, 84, 108, 132].map((r) => (
        <circle key={r} cx="6" cy="174" r={r} stroke="currentColor" strokeWidth="1.1" />
      ))}
    </svg>
  )
}

export function MenuIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false" {...props}>
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function CloseIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false" {...props}>
      <path
        d="M6 6l12 12M18 6 6 18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  )
}
