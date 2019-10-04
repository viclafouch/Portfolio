import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Page from '../components/Layout/main'
import Title from '../components/Title/Title'
import Button from '../components/Button/Button'
import Meta from '../components/Meta/Meta'

const pathTraining = '/static/training'

const trainings = [
  {
    date: '2015 - 2018',
    title: 'EEMI',
    href: 'http://www.eemi.com/',
    rows: [
      'Spécialisation dans le web developpement',
      'Connaissances acquises dans : Webmarketing / Communication digitale / Webdesign / Développement web / Gestion de Projet',
      "Licence 'Chef de Projets Digitaux' obtenue"
    ],
    img: `${pathTraining}/eemi-logo.png`
  },
  {
    date: 'Obtenu en 2016',
    title: 'Certifications Google',
    href: 'https://learndigital.withgoogle.com/digitalactive/',
    rows: ['Digital Active (Google)', 'Conception de sites mobiles (Google)', 'Développement de chaîne (YouTube)'],
    img: `${pathTraining}/digital-active.png`
  },
  {
    date: 'Depuis Oct 2016',
    title: 'Free Code Camp',
    href: 'https://www.freecodecamp.org/',
    rows: ['Javascript', 'Php', 'CSS/SCSS'],
    img: `${pathTraining}/freecodecamp.png`
  },
  {
    date: ' Obtenu en 2015',
    title: 'BAC Economique et Social',
    href: 'http://www.lycee-saint-paul-lille.fr/',
    rows: ['Diplôme du Baccalauréat Economique et Social (ES)', 'Lycée Saint Paul - Lille'],
    img: `${pathTraining}/saint-paul.png`
  }
]

export default () => (
  <Page>
    <Meta
      title="Formations de Victor de la Fouchardiere"
      description="Diplomé à l'Ecole Européenne des Métiers de l'Internet, découvrez le cursus de Victor de la Fouchardiere, développeur web."
      canonical="https://www.victor-de-la-fouchardiere.fr/formations"
    />
    <section className="training-section">
      <Title title="Formations" subtitle="Ce que j'apprends" />
      <ul className="training-list">
        {trainings.map((training, index) => (
          <li key={index}>
            <article className="training-article">
              <div className="training-article-thumbnail-side">
                <img src={training.img} alt="" />
              </div>
              <div className="training-article-description-side">
                <div className="training-article-top flex-me flex-align flex-justify-between">
                  <p className="training-article-date">
                    <FontAwesomeIcon icon="calendar-alt" />
                    <span>{training.date}</span>
                  </p>
                  <Button primary inverse href={training.href} target="_blank">
                    A propos
                  </Button>
                </div>
                <h4 className="training-article-title">{training.title}</h4>
                <ul className="training-article-list-texts">
                  {training.rows.map((text, i) => (
                    <li key={i}>- {text}.</li>
                  ))}
                </ul>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  </Page>
)
