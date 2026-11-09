import { INTRODUCTION } from '../content'
import { ArcLines, SunburstIcon } from './Decorations'

const headline = INTRODUCTION.headline
const headlineBody = headline.slice(0, -1) // trailing "." rendered in gold

export function Introduction() {
  return (
    <section className="intro" id="about" aria-labelledby="intro-title">
      <div className="container intro__grid">
        <div className="intro__copy">
          <h2 className="intro__title" id="intro-title">
            {headlineBody}
            <span className="dot">.</span>
          </h2>

          <p className="intro__body">{INTRODUCTION.paragraphs[0]}</p>

          {/* The brief allows this transition line to be visually distinguished. */}
          <p className="intro__transition">{INTRODUCTION.paragraphs[1]}</p>

          <p className="intro__body">{INTRODUCTION.paragraphs[2]}</p>
        </div>

        <div className="intro__visual">
          <div className="intro__outline" aria-hidden="true" />
          <div className="intro__square" aria-hidden="true" />
          <ArcLines className="intro__arcs" />

          <div className="intro__main-photo">
            <img
              src="/images/intro-learning.webp"
              alt="A young learner working on a laptop beside a small electronics project"
              width="900"
              height="1117"
              loading="lazy"
            />
          </div>

          <div className="intro__inset-photo">
            <img
              src="/images/intro-project.webp"
              alt="Two learners collaborating on a hands-on project with a tablet"
              width="1000"
              height="558"
              loading="lazy"
            />
          </div>

          <SunburstIcon className="intro__sun" />
        </div>
      </div>
    </section>
  )
}
