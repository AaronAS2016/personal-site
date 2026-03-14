import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from './About.module.css'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { value: '7+', label: 'years building on the web' },
  { value: '6', label: 'roles, always growing' },
  { value: '∞', label: 'components shipped' },
]

export function About() {
  const { t } = useTranslation()
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(`.${styles.stat}`, {
        opacity: 0,
        y: 30,
        stagger: 0.12,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: `.${styles.stats}`,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      })

      gsap.from(`.${styles.bio}`, {
        opacity: 0,
        y: 20,
        stagger: 0.15,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: `.${styles.bios}`,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="about" className={styles.about} ref={sectionRef}>
      <div className="container">
        <p className={styles.label}>{t('about.title')}</p>

        <div className={styles.stats}>
          {stats.map((s) => (
            <div key={s.label} className={styles.stat}>
              <span className={styles.statValue}>{s.value}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>

        <div className={styles.bios}>
          <p className={styles.bio}>{t('about.bio')}</p>
          <p className={styles.bio}>{t('about.bio2')}</p>
        </div>
      </div>
    </section>
  )
}
