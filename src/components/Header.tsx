import { useEffect, useState } from 'react'
import { APPLY_CTA, BRAND } from '../content'
import { NavLinks } from './NavLinks'
import { CloseIcon, MenuIcon } from './Decorations'

export function Header() {
  const [open, setOpen] = useState(false)

  // Close the mobile disclosure with Escape and when returning to desktop widths.
  useEffect(() => {
    if (!open) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    const desktop = window.matchMedia('(min-width: 861px)')
    const onBreakpoint = () => {
      if (desktop.matches) setOpen(false)
    }

    window.addEventListener('keydown', onKeyDown)
    desktop.addEventListener('change', onBreakpoint)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      desktop.removeEventListener('change', onBreakpoint)
    }
  }, [open])

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a className="wordmark" href="#home">
          {BRAND}
        </a>

        <NavLinks label="Primary" className="site-header__nav" />

        {/* Presentational CTA only: no application flow exists (§4A). */}
        <button className="btn btn--primary site-header__cta" type="button">
          {APPLY_CTA}
        </button>

        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-controls="mobile-nav"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      <div id="mobile-nav" className="mobile-nav" hidden={!open}>
        <div className="container mobile-nav__inner">
          <NavLinks
            label="Mobile"
            className="mobile-nav__links"
            onNavigate={() => setOpen(false)}
          />
          <button className="btn btn--primary mobile-nav__cta" type="button">
            {APPLY_CTA}
          </button>
        </div>
      </div>
    </header>
  )
}
