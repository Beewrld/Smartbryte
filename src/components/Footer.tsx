import { BRAND } from '../content'
import { NavLinks } from './NavLinks'

/** Minimal footer: wordmark + the navigation labels already used in the header (§4D). */
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <span className="wordmark wordmark--light">{BRAND}</span>
        <NavLinks label="Footer" className="site-footer__nav" />
        <span className="site-footer__mark" aria-hidden="true" />
      </div>
    </footer>
  )
}
