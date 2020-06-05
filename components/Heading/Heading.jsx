import Link from 'next/link'
import Button from '../Button/Button'
import styles from './heading.module.scss'

function Heading() {
  return (
    <div className={styles.subheading}>
      <div className="container flex-me flex-vertical flex-align flex-justify-center">
        <Link href="/">
          <a>
            <img className={styles.subheading_logo} src="/images/logo.png" alt="Victor de la Fouchardiere Logo" />
          </a>
        </Link>
        <h1 className={`${styles.subheading_title}`}>Besoin d&#39;un développeur web&nbsp;?</h1>
        <p className={`${styles.subheading_subtitle}`}>
          Disponible pour vous aider dans le développement de votre projet, je vous invite à regarder ci-dessous l&#39;ensemble de
          mes références pour mieux connaitre mon profil.
        </p>
        <div className="mgi--top-10">
          <Button href="/pdf/CV-Victor-de-la-Fouchardiere.pdf" icon="download" download primary>
            Télécharger/Imprimer le CV
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Heading
