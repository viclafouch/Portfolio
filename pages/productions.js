import Page from '../components/Layout/main'
import Title from '../components/Title/Title'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Meta from '../components/Meta/Meta'

const pathProductions = '/static/productions'

const typesDev = ['FrontEnd', 'BackEnd', 'FrontEnd/BackEnd', 'Extension']

const productions = [
  {
    title: 'Pokemon battle',
    img: `${pathProductions}/pokemon-battle.png`,
    type: typesDev[0],
    href: 'https://codepen.io/Viclafouch/full/VMNdpg/'
  },
  {
    title: "TC's Center",
    img: `${pathProductions}/tc-center.png`,
    type: typesDev[3],
    href:
      'https://chrome.google.com/webstore/detail/tcs-center/hanknpkmjbfhcalmipokkfplndkohgdm'
  },
  {
    title: 'FicheAndTricks',
    img: `${pathProductions}/ficheandtricks.png`,
    type: typesDev[2],
    href: 'https://tc-center.victor-de-la-fouchardiere.fr/'
  },
  {
    title: 'uScroll',
    img: `${pathProductions}/uscroll.png`,
    type: typesDev[0],
    href: 'https://viclafouch.github.io/uscroll/demo.html'
  },
  {
    title: 'TutoBwim.fr',
    img: `${pathProductions}/tutobwim.fr.png`,
    type: typesDev[2],
    href: 'https://www.tutobwim.fr/'
  },
  {
    title: 'Bubblesee',
    img: `${pathProductions}/bubblesee.png`,
    type: typesDev[0],
    href: 'https://viclafouch.github.io/bubblesee/demo.html'
  },
  {
    title: 'WP Informations',
    img: `${pathProductions}/wpinformations.png`,
    type: typesDev[1],
    href: 'https://viclafouch.github.io/WP_Informations/'
  },
  {
    title: 'React Template Form',
    img: `${pathProductions}/react-template-form.png`,
    type: typesDev[0],
    href: 'https://viclafouch.github.io/react-template-form/'
  },
  {
    title: 'Github Profile',
    img: `${pathProductions}/github-profile.png`,
    type: typesDev[0],
    href: 'https://viclafouch.github.io/github-profile/'
  }
]

export default () => (
  <Page>
    <Meta title="Productions" />
    <section className="productions-section">
      <Title title="Portfolio" subtitle="Ce que je développe" />
      <ul className="productions-list">
        {productions.map((production, index) => (
          <li key={index} className="p-shadow">
            <article className="production-article">
              <header className="production-article-header">
                <div className="production-article-header-overlay">
                  <a href={production.href} target="_blank">
                    <FontAwesomeIcon icon="link" />
                  </a>
                </div>
                <img
                  src={production.img}
                  alt=""
                  className="production-article-header-cover"
                />
              </header>
              <footer className="production-article-footer">
                <h5 className="production-article-footer-title">
                  {production.title}
                </h5>
                <p className="production-article-footer-subtitle note">
                  {production.type}
                </p>
              </footer>
            </article>
          </li>
        ))}
      </ul>
    </section>
  </Page>
)
