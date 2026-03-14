import { useTranslation } from 'react-i18next'
import styles from './Skills.module.css'

const rows = [
  {
    items: ['React', 'TypeScript', 'JavaScript', 'SCSS', 'HTML5', 'Storybook', 'Node.js', 'Express'],
    speed: '30s',
    reverse: false,
  },
  {
    items: ['Jest', 'Playwright', 'Testing Library', 'AWS', 'Git', 'New Relic', 'Datadog', 'Grafana'],
    speed: '22s',
    reverse: true,
  },
  {
    items: ['GitHub Copilot', 'Claude AI', 'LLMs', 'RAG Systems', 'Looker', 'Frontend Architecture', 'AI Agents'],
    speed: '36s',
    reverse: false,
  },
]

function MarqueeRow({ items, speed, reverse }: { items: string[]; speed: string; reverse: boolean }) {
  // Duplicate for seamless loop
  const all = [...items, ...items]
  return (
    <div className={styles.rowWrapper}>
      <div
        className={`${styles.row} ${reverse ? styles.reverse : ''}`}
        style={{ animationDuration: speed }}
      >
        {all.map((item, i) => (
          <span key={i} className={styles.item}>
            {item}
            <span className={styles.dot} aria-hidden="true">·</span>
          </span>
        ))}
      </div>
    </div>
  )
}

export function Skills() {
  const { t } = useTranslation()

  return (
    <section id="skills" className={styles.skills}>
      <div className="container">
        <p className={styles.label}>{t('skills.title')}</p>
        <h2 className={styles.heading}>
          The stack that<br />
          <em>gets things shipped.</em>
        </h2>
      </div>

      <div className={styles.marqueeArea}>
        {rows.map((row, i) => (
          <MarqueeRow key={i} {...row} />
        ))}
      </div>
    </section>
  )
}
