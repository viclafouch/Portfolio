import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Title from 'components/Title/Title'
import Button from 'components/Button/Button'
import Meta from 'components/Meta/Meta'
import styles from 'scss/pages/training.module.scss'

const pathTraining = '/images/training'

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

function Formations() {
  return (
    <>
      <Meta
        title="Formations de Victor de la Fouchardiere"
        description="Diplomé à l'Ecole Européenne des Métiers de l'Internet, découvrez le cursus de Victor de la Fouchardiere, développeur web."
      />
      <div className={styles.training__page}>
        <Title title="Formations" subtitle="Ce que j'apprends" />
        <ul className={styles.training__list}>
          {trainings.map((training, index) => (
            <li key={index}>
              <article className={styles.training__article}>
                <div className={styles.training__article__thumbnail__side}>
                  <img src={training.img} alt={training.title} />
                </div>
                <div className={styles.training__article__description__side}>
                  <div className={styles.training__article__top}>
                    <p className={styles.training__article__date}>
                      <FontAwesomeIcon icon="calendar-alt" />
                      <span>{training.date}</span>
                    </p>
                    <Button primary inverse href={training.href} target="_blank">
                      A propos
                    </Button>
                  </div>
                  <h4 className={styles.training__article__title}>{training.title}</h4>
                  <ul className={styles.training__article__list__texts}>
                    {training.rows.map((text, i) => (
                      <li key={i}>- {text}.</li>
                    ))}
                  </ul>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Formations
