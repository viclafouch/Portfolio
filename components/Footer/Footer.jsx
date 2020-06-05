import styles from './footer.module.scss'

function Footer() {
  return (
    <footer className={`${styles.footer} flex-me flex-vertical flex-align flex-justify-center`}>
      <p>&copy;{new Date().getFullYear()} by Victor de la Fouchardiere</p>
      <p className="note">Developed with Next.js</p>
    </footer>
  )
}

export default Footer
