import styles from 'scss/pages/404.module.scss'

export default function Custom404() {
  return (
    <div className={styles.notFound__page}>
      <div className={styles.notFound__block}>
        <h3>No content here.</h3>
      </div>
    </div>
  )
}
