import { useTranslation } from 'react-i18next'
import { useTheme } from '../../hooks/useTheme'
import styles from './Header.module.css'

const SunIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
  </svg>
)

const MoonIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
)

export function Header() {
  const { t, i18n } = useTranslation()
  const currentLang = i18n.language
  const { isDark, toggleTheme } = useTheme()

  const toggleLang = () => {
    i18n.changeLanguage(currentLang === 'en' ? 'es' : 'en')
  }

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <span className={styles.logo}>Aaron Saban</span>

        <nav className={styles.nav}>
          <a href="#about">{t('nav.about')}</a>
          <a href="#experience">{t('nav.experience')}</a>
          <a href="#skills">{t('nav.skills')}</a>
          <a href="#contact">{t('nav.contact')}</a>
        </nav>

        <div className={styles.controls}>
          <button
            className={styles.themeToggle}
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
          </button>
          <button
            className={styles.langToggle}
            onClick={toggleLang}
            aria-label="Toggle language"
          >
            {currentLang === 'en' ? 'ES' : 'EN'}
          </button>
        </div>
      </div>
    </header>
  )
}
