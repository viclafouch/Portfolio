import styles from './title.module.scss'

function Title({ title, subtitle }) {
  return (
    <div className={styles.container}>
      <h1 id="title" className={styles.title}>
        {title}
      </h1>
      <p className={styles.subtitle}>{subtitle}</p>
    </div>
  )
}

export default Title
