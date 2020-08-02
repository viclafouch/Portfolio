import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Title from 'components/Title/Title'
import Meta from 'components/Meta/Meta'
import styles from 'scss/pages/productions.module.scss'

const productionsPath = '/images/productions'

const FRONTEND = 'FrontEnd'
const BACKEND = 'BackEnd'
const FULLSTACK = 'FullStack'

const productions = [
  {
    title: 'Meme Studio',
    img: `${productionsPath}/meme-studio.png`,
    type: FULLSTACK,
    href: 'https://www.meme-studio.io'
  },
  {
    title: 'Minesweeper',
    img: `${productionsPath}/minesweeper.jpg`,
    type: FRONTEND,
    href: 'https://github.com/viclafouch/Minesweeper'
  },
  {
    title: 'Fetch Crawler',
    img: `${productionsPath}/fetch-crawler.jpg`,
    type: BACKEND,
    href: 'https://github.com/viclafouch/fetch-crawler'
  },
  {
    title: 'Seald Dashboard',
    img: `${productionsPath}/dashboard-seald.jpg`,
    type: FRONTEND,
    href: 'https://dashboard.seald.io/dashboard/v2/#'
  },
  {
    title: 'Pokemon battle',
    img: `${productionsPath}/pokemon-battle.jpg`,
    type: FRONTEND,
    href: 'https://codepen.io/Viclafouch/full/VMNdpg/'
  },
  {
    title: 'PE Center',
    img: `${productionsPath}/pe-center.jpg`,
    type: FULLSTACK,
    href: 'https://chrome.google.com/webstore/detail/pe-center/hanknpkmjbfhcalmipokkfplndkohgdm'
  },
  {
    title: 'Google Support Crawler',
    img: `${productionsPath}/google-support-crawler.jpg`,
    type: BACKEND,
    href: 'https://github.com/viclafouch/Google-Support-Crawler'
  },
  {
    title: 'Seald.io',
    img: `${productionsPath}/seald.io.jpg`,
    type: FRONTEND,
    href: 'https://www.seald.io/'
  },
  {
    title: 'uScroll',
    img: `${productionsPath}/uscroll.jpg`,
    type: FRONTEND,
    href: 'https://viclafouch.github.io/uscroll/demo.html'
  },
  {
    title: 'TutoBwim.fr',
    img: `${productionsPath}/tutobwim.fr.jpg`,
    type: FULLSTACK,
    href: 'https://www.tutobwim.fr/'
  },
  {
    title: 'Bubblesee',
    img: `${productionsPath}/bubblesee.jpg`,
    type: FRONTEND,
    href: 'https://viclafouch.github.io/bubblesee/demo.html'
  },
  {
    title: 'WP Informations',
    img: `${productionsPath}/wpinformations.jpg`,
    type: BACKEND,
    href: 'https://viclafouch.github.io/WP_Informations/'
  },
  {
    title: 'React Template Form',
    img: `${productionsPath}/react-template-form.jpg`,
    type: FRONTEND,
    href: 'https://viclafouch.github.io/react-template-form/'
  },
  {
    title: 'Github Profile',
    img: `${productionsPath}/github-profil.jpg`,
    type: FRONTEND,
    href: 'https://viclafouch.github.io/github-profile/'
  }
]

function Productions() {
  return (
    <>
      <Meta
        title="Productions de Victor de la Fouchardiere"
        description="Dernières productions, réalisations et projets personnels de Victor de la Fouchardiere, développeur front chez Seald."
      />
      <section className={styles.productions__page}>
        <Title title="Portfolio" subtitle="Ce que je développe" />
        <ul className={styles.productions__list}>
          {productions.map((production, index) => (
            <li key={index}>
              <article className={styles.production__article}>
                <header className={styles.production__article__header}>
                  <div className={styles.production__article__header__overlay}>
                    <a href={production.href} target="_blank" title={production.title} rel="noreferrer noopener">
                      <FontAwesomeIcon icon="link" />
                    </a>
                  </div>
                  <img src={production.img} alt={production.title} className={styles.production__article__header__cover} />
                </header>
                <footer className={styles.production__article__footer}>
                  <h3 className={styles.production__article__footer__title}>{production.title}</h3>
                  <span className={`${styles.production__article__footersubtitle} note`}>{production.type}</span>
                </footer>
              </article>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}

export default Productions
