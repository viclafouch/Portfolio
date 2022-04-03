import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from 'scss/pages/productions.module.scss'

import Meta from 'components/Meta/Meta'
import Title from 'components/Title/Title'

const productionsPath = '/images/productions'

const FRONTEND = 'FrontEnd'
const BACKEND = 'BackEnd'
const FULLSTACK = 'FullStack'

const productions = [
  {
    title: 'Mui Tel Input',
    img: `${productionsPath}/mui-tel-input.png`,
    type: FRONTEND,
    href: 'https://www.npmjs.com/package/mui-tel-input'
  },
  {
    title: 'Frichti',
    img: `${productionsPath}/frichti.jpg`,
    type: FRONTEND,
    href: 'https://www.frichti.co'
  },
  {
    title: 'Beautify Post',
    img: `${productionsPath}/beautify-post.png`,
    type: FRONTEND,
    href: 'https://www.beautify-post.app'
  },
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
    href: 'https://dashboard.seald.io'
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
    title: 'PE Crawler',
    img: `${productionsPath}/google-support-crawler.jpg`,
    type: BACKEND,
    href: 'https://github.com/viclafouch/PE-Crawler'
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

const Productions = () => {
  return (
    <>
      <Meta
        title="Productions of Victor de la Fouchardiere"
        description="Latest productions, realizations and personal projects of Victor de la Fouchardiere, front-end developer at Frichti."
      />
      <section className={styles.productions__page}>
        <Title title="Portfolio" subtitle="What I work on" />
        <ul className={styles.productions__list}>
          {productions.map((production) => {
            return (
              <li key={production.title}>
                <article className={styles.production__article}>
                  <header className={styles.production__article__header}>
                    <div
                      className={styles.production__article__header__overlay}
                    >
                      <a
                        href={production.href}
                        target="_blank"
                        title={production.title}
                        rel="noreferrer noopener"
                      >
                        <FontAwesomeIcon icon="link" />
                      </a>
                    </div>
                    <img
                      src={production.img}
                      alt={production.title}
                      className={styles.production__article__header__cover}
                    />
                  </header>
                  <footer className={styles.production__article__footer}>
                    <h3 className={styles.production__article__footer__title}>
                      {production.title}
                    </h3>
                    <span
                      className={`${styles.production__article__footersubtitle} note`}
                    >
                      {production.type}
                    </span>
                  </footer>
                </article>
              </li>
            )
          })}
        </ul>
      </section>
    </>
  )
}

export default Productions
