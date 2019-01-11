import Page from '../components/Layout/main'
import Meta from '../components/Meta/Meta'
import SVG from 'react-inlinesvg'

export default () => (
  <Page>
    <Meta
      title="Portfolio de Victor de la Fouchardiere"
      description="Je m'appelle Victor de la Fouchardière, titulaire d'une licence 'Chef de Projets Digitaux', j'ai une vraie vocation pour le métier de développeur web coté front-end (React, Vue, Angular ...)."
    />
    <section className="home-section">
      <div className="content-row">
        <img
          src="/static/victor-de-la-fouchardiere.jpg"
          className="profile-picture"
          title="Victor de la Fouchardiere"
          alt="Victor de la Fouchardiere"
        />
        <h2 className="title-h2 pdi--5">Victor de la Fouchardiere</h2>
        <span className="sub-title note">
          Developpeur web / YouTube/Google TC
        </span>
      </div>
      <hr className="striped" />
      <div className="content-row">
        <p className="profile-resume">
          Etudiant entre 2015 et 2018 à l'Ecole Européenne des Métiers de
          l'Internet et aujourd'hui développeur web, j'ai une vraie vocation
          pour la programmation web tout en ayant acquis des connaissances
          renforcées en marketing et en design.
        </p>
      </div>
      <hr className="striped" />
      <div className="content-row">
        <h3>Expérience actuelle</h3>
        <div className="experience-container">
          <a target="_blank" href="https://www.seald.io">
            <SVG src="/static/seald-logo.svg" className="svgblock" />
          </a>
          <p>
            Développeur Full-Stack chez <b>Seald</b> depuis oct. 2018.
            <br />
            Contributions au développement des applications internes de
            l'entreprise (front-end et back-end).
          </p>
          <p>
            <span>
              Vue.js <SVG src="/static/vuejs.svg" className="vuejs" />
            </span>
            {' / '}
            <span>
              Python <img src="/static/python.svg" className="python" />
            </span>
          </p>
        </div>
      </div>
    </section>
  </Page>
)
