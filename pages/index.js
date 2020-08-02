import Page from 'components/Page/Page'
import Meta from 'components/Meta/Meta'
import Title from 'components/Title/Title'

function Home() {
  return (
    <Page>
      <Meta
        title="Portfolio de Victor de la Fouchardiere"
        description="Victor de la Fouchardiere | Développeur front (React, Vue, Angular, etc..) chez Seald, diplomé d'un bachelor. Fan de Javascript. Découvrez mon portfolio !"
      />
      <section className="home-section">
        <div className="content-row">
          <img
            src="/images/victordelafouchardiere.jpg"
            className="profile-picture"
            title="Victor de la Fouchardiere"
            alt="Victor de la Fouchardiere"
          />
          <Title title="Victor de la Fouchardiere" subtitle="Developpeur web / Expert Produit Google" />
        </div>
        <hr className="striped" />
        <div className="content-row">
          <p className="profile-resume">
            {`Etudiant entre 2015 et 2018 à l'Ecole Européenne des Métiers de l'Internet et aujourd'hui développeur web, j'ai une
            vraie vocation pour la programmation web tout en ayant acquis des connaissances renforcées en marketing et en design.`}
          </p>
        </div>
        <hr className="striped" />
        <div className="content-row">
          <h3>Expérience actuelle</h3>
          <div className="experience-container">
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
      </section>
    </Page>
  )
}

export default Home
