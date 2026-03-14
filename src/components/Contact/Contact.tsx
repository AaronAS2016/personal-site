import { useTranslation } from 'react-i18next'
import { useReveal } from '../../hooks/useReveal'
import styles from './Contact.module.css'

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M7 17L17 7M17 7H7M17 7v10"/>
  </svg>
)

export function Contact() {
  const { t } = useTranslation()
  const ref = useReveal()

  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <div ref={ref as React.RefObject<HTMLDivElement>} className="reveal">
          <h2 className={styles.title}>{t('contact.title')}</h2>
          <p className={styles.subtitle}>{t('contact.subtitle')}</p>
          <div className={styles.links}>
            <a
              href="https://github.com/AaronAS2016"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              {t('contact.github')}
              <ArrowIcon />
            </a>
            <a
              href="https://linkedin.com/in/aaronsaban"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              {t('contact.linkedin')}
              <ArrowIcon />
            </a>
          </div>
        </div>
      </div>
      <footer className={styles.footer}>
        <div className="container">
          <span>{t('footer.rights')} · {new Date().getFullYear()}</span>
          <span>{t('footer.built')}</span>
        </div>
      </footer>
    </section>
  )
}
