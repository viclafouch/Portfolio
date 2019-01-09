import Page from '../components/Layout/main'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Meta from '../components/Meta/Meta'

export default () => (
  <Page>
    <Meta title="Portfolio de Victor de la Fouchardiere" description="Je m'appelle Victor de la Fouchardière, titulaire d'une licence 'Chef de Projets Digitaux', j'ai une vraie vocation pour le métier de développeur web coté front-end (React, Vue, Angular ...)." />
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
        <h3>Dernière expérience</h3>
        <div className="last-experience-container">
          <a target="_blank" to="http://www.myedco.fr/">
            <img
              src="/static/myedc.png"
              className="last-experience-img"
              alt=""
            />
          </a>
          <p>
            Développeur Frontend en stage chez{' '}
            <b>
              <i>My Edition Company</i> du 02/03/18 au 05/09/18
            </b>
            .
          </p>
          <p>
            <span>
              React.js <FontAwesomeIcon icon={['fab', 'react']} />
            </span>
            {' / '}
            <span>
              Python <FontAwesomeIcon icon={['fab', 'python']} />
            </span>
          </p>
        </div>
      </div>
    </section>
  </Page>
)
