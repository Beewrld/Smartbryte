import { NAV_ANCHORS, NAV_LABELS } from '../content'

type NavLinksProps = {
  label: string
  className?: string
  onNavigate?: () => void
}

/**
 * Navigation labels are the four approved words from the brief.
 * Only labels with a real matching section receive an in-page anchor.
 * The remaining ones are deliberately non-functional presentation links —
 * no invented routes, no fake workflows (§2, §7, §8 of the brief).
 */
export function NavLinks({ label, className = '', onNavigate }: NavLinksProps) {
  return (
    <nav className={`nav-links ${className}`} aria-label={label}>
      {NAV_LABELS.map((item) => {
        const href = NAV_ANCHORS[item]
        return href ? (
          <a key={item} className="nav-link" href={href} onClick={onNavigate}>
            {item}
          </a>
        ) : (
          <a key={item} className="nav-link nav-link--static" aria-disabled="true">
            {item}
          </a>
        )
      })}
    </nav>
  )
}
