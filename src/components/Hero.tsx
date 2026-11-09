import { HERO } from '../content'
import { ArrowIcon, SparkleIcon, SunburstIcon } from './Decorations'

/**
 * The headline is split only for visual emphasis. Concatenating the pieces
 * reproduces HERO.headline exactly, including capitalisation and the period.
 */
const [beforeEmphasis, afterEmphasis] = HERO.headline.split(HERO.emphasis)
const headlineTail = afterEmphasis.slice(0, -1) // trailing "." rendered in gold

export function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="container hero__grid">
        <div className="hero__copy">
          <h1 className="hero__title reveal" id="hero-title">
            {beforeEmphasis}
            <span className="mark">{HERO.emphasis}</span>
            {headlineTail}
            <span className="dot">.</span>
          </h1>

          <p className="hero__lead reveal">{HERO.supporting}</p>

          <div className="hero__actions reveal">
            {/* Visual CTAs only — the brief supplies no destinations or workflows. */}
            <button className="btn btn--primary btn--large" type="button">
              {HERO.primaryCta}
              <ArrowIcon className="btn__arrow" />
            </button>
            <button className="btn btn--outline btn--large" type="button">
              {HERO.secondaryCta}
            </button>
          </div>

          <p className="hero__note reveal">
            <span className="hero__note-rule" aria-hidden="true" />
            {HERO.ageNote}
          </p>
        </div>

        <div className="hero__visual reveal">
          <div className="hero__blob" aria-hidden="true" />
          <div className="hero__ring" aria-hidden="true" />
          <SunburstIcon className="hero__sun" />
          <div className="hero__dots" aria-hidden="true" />

          <div className="hero__photo">
            <img
              src="/images/hero-learner.webp"
              alt="A young learner holding a notebook and pencil in a bright classroom"
              width="900"
              height="1125"
              fetchPriority="high"
            />
          </div>

          <span className="hero__disc" aria-hidden="true">
            <SparkleIcon />
          </span>
        </div>
      </div>
    </section>
  )
}
