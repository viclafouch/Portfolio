import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Page from '../components/Layout/main'
import Title from '../components/Title/Title'
import Meta from '../components/Meta/Meta'

const pathProductions = '/static/productions'

const typesDev = ['FrontEnd', 'BackEnd', 'FrontEnd/BackEnd', 'Extension']

const productions = [
  {
    title: 'Fetch Crawler',
    img: `${pathProductions}/fetch-crawler.jpg`,
    type: typesDev[1],
    href: 'https://github.com/viclafouch/fetch-crawler'
  },
  {
    title: 'Seald Dashboard',
    img: `${pathProductions}/dashboard-seald.jpg`,
    type: typesDev[0],
    href: 'https://dashboard.seald.io/dashboard/v2/#'
  },
  {
    title: 'Pokemon battle',
    img: `${pathProductions}/pokemon-battle.jpg`,
    type: typesDev[0],
    href: 'https://codepen.io/Viclafouch/full/VMNdpg/'
  },
  {
    title: 'PE Center',
    img: `${pathProductions}/pe-center.jpg`,
    type: typesDev[3],
    href: 'https://chrome.google.com/webstore/detail/pe-center/hanknpkmjbfhcalmipokkfplndkohgdm'
  },
  {
    title: 'Google Support Crawler',
    img: `${pathProductions}/google-support-crawler.jpg`,
    type: typesDev[1],
    href: 'https://github.com/viclafouch/Google-Support-Crawler'
  },
  {
    title: 'Seald.io',
    img: `${pathProductions}/seald.io.jpg`,
    type: typesDev[0],
    href: 'https://www.seald.io/'
  },
  {
    title: 'uScroll',
    img: `${pathProductions}/uscroll.jpg`,
    type: typesDev[0],
    href: 'https://viclafouch.github.io/uscroll/demo.html'
  },
  {
    title: 'TutoBwim.fr',
    img: `${pathProductions}/tutobwim.fr.jpg`,
    type: typesDev[2],
    href: 'https://www.tutobwim.fr/'
  },
  {
    title: 'Bubblesee',
    img: `${pathProductions}/bubblesee.jpg`,
    type: typesDev[0],
    href: 'https://viclafouch.github.io/bubblesee/demo.html'
  },
  {
    title: 'WP Informations',
    img: `${pathProductions}/wpinformations.jpg`,
    type: typesDev[1],
    href: 'https://viclafouch.github.io/WP_Informations/'
  },
  {
    title: 'React Template Form',
    img: `${pathProductions}/react-template-form.jpg`,
    type: typesDev[0],
    href: 'https://viclafouch.github.io/react-template-form/'
  },
  {
    title: 'Github Profile',
    img: `${pathProductions}/github-profil.jpg`,
    type: typesDev[0],
    href: 'https://viclafouch.github.io/github-profile/'
  }
]

export default () => (
  <Page>
    <Meta
      title="Productions de Victor de la Fouchardiere"
      description="Dernières productions, réalisations et projets personnels de Victor de la Fouchardiere, développeur front chez Seald."
      canonical="https://www.victor-de-la-fouchardiere.fr/productions"
    />
    <section className="productions-section">
      <Title title="Portfolio" subtitle="Ce que je développe" />
      <ul className="productions-list">
        {productions.map((production, index) => (
          <li key={index}>
            <article className="production-article">
              <header className="production-article-header">
                <div className="production-article-header-overlay">
                  <a href={production.href} target="_blank" title={production.title} rel="noreferrer noopener">
                    <FontAwesomeIcon icon="link" />
                  </a>
                </div>
                <img src={production.img} alt={production.title} className="production-article-header-cover" />
              </header>
              <footer className="production-article-footer">
                <h5 className="production-article-footer-title">{production.title}</h5>
                <p className="production-article-footer-subtitle note">{production.type}</p>
              </footer>
            </article>
          </li>
        ))}
      </ul>
    </section>
  </Page>
)
