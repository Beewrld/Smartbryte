/**
 * LOCKED COPY — SmartBryte homepage
 * ------------------------------------------------------------------
 * Every string in this file is reproduced verbatim from the controlling
 * "SmartBryte – Lovable Homepage Master Prompt" PDF (§5 canonical block
 * and §4A navigation). Nothing here may be rewritten, re-cased,
 * paraphrased, localised, extended or "improved".
 *
 * Sections without approved copy are deliberately absent from the page.
 */

export const BRAND = 'SmartBryte'

/** §4A — the only navigation labels permitted on the homepage. */
export const NAV_LABELS = ['Home', 'About', 'Programmes', 'Contact'] as const
export type NavLabel = (typeof NAV_LABELS)[number]

/** §4A — header call to action, presented visually only (no application flow). */
export const APPLY_CTA = 'Apply Now'

export const HERO = {
  headline: 'Turn Your Child Into a Future-Ready Genius.',
  /** Existing words that may receive a purely visual emphasis. */
  emphasis: 'Future-Ready',
  supporting:
    'Give your child the knowledge and skills to excel in school, understand technology, solve problems and create opportunities in the world ahead.',
  primaryCta: 'Explore Our Programmes',
  secondaryCta: 'Apply Now',
  ageNote: 'For learners aged 7–22.',
} as const

export const INTRODUCTION = {
  headline: 'Education should prepare children for more than examinations.',
  paragraphs: [
    'The world is changing, and the knowledge and skills that young people need to succeed are changing with it. Gone are the days when good grades alone were enough to make a young person ready for the world of work. Today, especially in the age of AI, children need to know how to use technology, think through problems, develop ideas and turn what they know into something the world values.',
    "That's what SmartBryte brings to your child's education.",
    'Alongside their regular academic learning, our students explore technology, learn how to use AI, develop practical digital skills and work on projects that help them put their knowledge to use. They get to discover their interests, build confidence in their abilities and develop skills that can open doors to future opportunities.',
  ],
} as const

/**
 * In-page anchors exist only for sections that are actually present.
 * `Programmes` and `Contact` have no matching section and stay non-functional
 * (§2 build scope, §7 "never invent a route").
 */
export const NAV_ANCHORS: Partial<Record<NavLabel, string>> = {
  Home: '#home',
  About: '#about',
}
