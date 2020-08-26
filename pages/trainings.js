import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from 'scss/pages/training.module.scss'

import Button from 'components/Button/Button'
import Meta from 'components/Meta/Meta'
import Title from 'components/Title/Title'

const pathTraining = '/images/training'

const trainings = [
  {
    date: '2015 - 2018',
    title: 'EEMI',
    href: 'http://www.eemi.com/',
    rows: [
      'Specialization in web development',
      'Knowledge acquired in: Webmarketing / Digital communication / Webdesign / Web development / Project management',
      "'Digital Project Manager' license obtained"
    ],
    img: `${pathTraining}/eemi-logo.png`
  },
  {
    date: '2016',
    title: 'Google certifications',
    href: 'https://learndigital.withgoogle.com/digitalactive/',
    rows: [
      'Digital Active (Google)',
      'Mobile site design (Google)',
      'Channels Development (YouTube)'
    ],
    img: `${pathTraining}/digital-active.png`
  },
  {
    date: '2015',
    title: 'BAC Economique et Social',
    href: 'http://www.lycee-saint-paul-lille.fr/',
    rows: [
      'Economic and Social Baccalaureate Diploma',
      'Lycée Saint Paul - Lille'
    ],
    img: `${pathTraining}/saint-paul.png`
  }
]

function Trainings() {
  return (
    <>
      <Meta
        title="Trainings of Victor de la Fouchardiere"
        description="Graduated from the Ecole Européenne des Métiers de l'Internet, discover the course of Victor de la Fouchardiere, web developer."
      />
      <div className={styles.training__page}>
        <Title title="Trainings" subtitle="What I learned" />
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
                    <Button
                      primary
                      inverse
                      href={training.href}
                      target="_blank"
                    >
                      About
                    </Button>
                  </div>
                  <h4 className={styles.training__article__title}>
                    {training.title}
                  </h4>
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

export default Trainings
