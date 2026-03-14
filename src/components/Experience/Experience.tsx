import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from './Experience.module.css'

gsap.registerPlugin(ScrollTrigger)

interface ExperienceItem {
  company: string
  role: string
  period: string
  location: string
  description: string
}

export function Experience() {
  const { t } = useTranslation()
  const items = t('experience.items', { returnObjects: true }) as ExperienceItem[]
  const sectionRef = useRef<HTMLElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Draw the timeline line as you scroll
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            end: 'bottom 60%',
            scrub: true,
          },
        }
      )

      // Each card slides in from alternating sides
      gsap.utils.toArray<HTMLElement>(`.${styles.card}`).forEach((card, i) => {
        gsap.from(card, {
          x: i % 2 === 0 ? -50 : 50,
          opacity: 0,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        })
      })

      // Each dot pops in
      gsap.utils.toArray<HTMLElement>(`.${styles.dot}`).forEach((dot) => {
        gsap.from(dot, {
          scale: 0,
          opacity: 0,
          duration: 0.4,
          ease: 'back.out(2)',
          scrollTrigger: {
            trigger: dot,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="experience" className={styles.experience} ref={sectionRef}>
      <div className="container">
        <p className={styles.label}>{t('experience.title')}</p>
        <h2 className={styles.heading}>
          Where I've<br />
          <em>built things.</em>
        </h2>

        <div className={styles.timeline}>
          {/* The full-height line that gets drawn */}
          <div className={styles.lineTrack}>
            <div className={styles.lineDrawn} ref={lineRef} />
          </div>

          {items.map((item, index) => (
            <div key={index} className={styles.entry}>
              <div className={styles.dot} />
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <div>
                    <span className={styles.company}>{item.company}</span>
                    <span className={styles.role}>{item.role}</span>
                  </div>
                  <div className={styles.meta}>
                    <span className={styles.period}>{item.period}</span>
                    <span className={styles.location}>{item.location}</span>
                  </div>
                </div>
                <p className={styles.description}>{item.description}</p>
                {index === 0 && (
                  <span className={styles.badge}>Current</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
