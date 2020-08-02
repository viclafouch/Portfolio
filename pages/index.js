import Meta from 'components/Meta/Meta'
import Title from 'components/Title/Title'
import styles from 'scss/pages/index.module.scss'

function Home() {
  return (
    <>
      <Meta
        title="Portfolio de Victor de la Fouchardiere"
        description="Victor de la Fouchardiere | Développeur front (React, Vue, Angular, etc..) chez Seald, diplomé d'un bachelor. Fan de Javascript. Découvrez mon portfolio !"
      />
      <div className={styles.home__page}>
        <div className={styles.home__block}>
          <picture>
            <source srcSet="/images/victordelafouchardiere.webp" type="image/webp" />
            <source srcSet="/images/victordelafouchardiere.jpg" type="image/png" />
            <img
              src="/images/examples/meme-2.png"
              title="Victor de la Fouchardiere"
              alt="Victor de la Fouchardiere"
              className={styles.profile__picture}
            />
          </picture>
          <Title title="Victor de la Fouchardiere" subtitle="Developpeur web / Expert Produit Google" />
        </div>
        <hr className="striped" />
        <div className={styles.home__block}>
          <p className={styles.profile__resume}>
            {`Etudiant entre 2015 et 2018 à l'Ecole Européenne des Métiers de l'Internet et aujourd'hui développeur web, j'ai une
            vraie vocation pour la programmation web tout en ayant acquis des connaissances renforcées en marketing et en design.`}
          </p>
        </div>
        <hr className="striped" />
        <div className={`${styles.home__block} ${styles.experience__container}`}>
          <h4 className={styles.experience__title}>Expérience actuelle</h4>
          <a target="_blank" href="https://www.seald.io" title="seald" rel="noreferrer noopener">
            <img src="/images/companies/seald-logo.svg" alt="Seald" />
          </a>
          <p>
            Développeur Full-Stack chez <b>Seald</b> depuis oct. 2018.
            <br />
            {`Contributions au développement des applications internes de l'entreprise (front-end et back-end).`}
          </p>
        </div>
      </div>
    </>
  )
}

export default Home
