import './heading.scss'
import Link from 'next/link'
import Button from '../Button/Button'

const Heading = () => (
  <div className="subheading">
    <div className="container flex-me flex-vertical flex-align flex-justify-center">
      <Link href="/">
        <a className="subheading-link-logo center-text">
          <img src="/static/logo-de-la-fouchardiere-victor.png" alt="Victor de la Fouchardiere Logo" />
        </a>
      </Link>
      <h1 className="subheading-title center-text">Besoin d'un développeur web&nbsp;?</h1>
      <p className="subheading-subtitle center-text">
        Disponible pour vous aider dans le développement de votre projet, je vous invite à regarder ci-dessous l'ensemble de mes
        références pour mieux connaitre mon profil.
      </p>
      <div className="mgi--top-10 mgi--left-20 mgi--right-20">
        <Button href="/static/CV-Victor-de-la-Fouchardiere.pdf" icon="download" download primary>
          Télécharger/Imprimer le CV
        </Button>
      </div>
    </div>
  </div>
)

export default Heading
