import styles from 'scss/pages/index.module.scss'

import Meta from 'components/Meta/Meta'
import Title from 'components/Title/Title'

function Home() {
  return (
    <>
      <Meta
        title="Portfolio of Victor de la Fouchardiere"
        description="Victor de la Fouchardiere | Front-end developer (React, Vue, Angular, etc...) at Frichti, bachelor degree. Fan of Javascript. Discover my portfolio!"
      />
      <div className={styles.home__page}>
        <div className={styles.home__block}>
          <picture>
            <source
              srcSet="/images/victordelafouchardiere.webp"
              type="image/webp"
            />
            <source
              srcSet="/images/victordelafouchardiere.jpg"
              type="image/png"
            />
            <img
              src="/images/examples/meme-2.png"
              title="Victor de la Fouchardiere"
              alt="Victor de la Fouchardiere"
              className={styles.profile__picture}
            />
          </picture>
          <Title
            title="Victor de la Fouchardiere"
            subtitle="🚀 Full-stack Developer JS at Frichti 🍋"
          />
        </div>
        <hr className="striped" />
        <div className={styles.home__block}>
          <p className={styles.profile__resume}>
            {`As a student between 2015 and 2018 at the Ecole Européenne des Métiers de L'Internet and today a web developer, I have a
            true vocation for web programming while having acquired a reinforced knowledge in marketing and design`}
          </p>
        </div>
        <hr className="striped" />
        <div
          className={`${styles.home__block} ${styles.experience__container}`}
        >
          <h4 className={styles.experience__title}>Current Job</h4>
          <a
            target="_blank"
            href="https://www.frichti.co"
            title="frichti"
            className={styles.experience_logo}
            rel="noreferrer noopener"
          >
            <img
              width="100"
              height="100"
              src="/images/companies/frichti.png"
              alt="Frichti"
            />
          </a>
          <p>
            Front-End developer at{' '}
            <a
              target="_blank"
              href="https://www.frichti.co"
              title="frichti"
              rel="noreferrer noopener"
            >
              <b>Frichti</b>
            </a>{' '}
            since Nov. 2020.
            <br />
            <span className={styles.experience__description}>
              {`• Develop new functionalities. • Participate in transversal technical projects within the Front guild. • Collaborate with other developers and product owners.`}
            </span>
          </p>
        </div>
      </div>
    </>
  )
}

export default Home
