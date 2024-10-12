import Image from 'next/image'
import Meta from 'components/Meta/Meta'
import Title from 'components/Title/Title'
import styles from 'scss/pages/productions.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const productionsPath = '/images/productions'

const FRONTEND = 'FrontEnd'
const BACKEND = 'BackEnd'
const FULLSTACK = 'FullStack'

const productions = [
  {
    title: 'Zoī',
    img: `${productionsPath}/zoi.png`,
    type: FRONTEND,
    href: 'https://zoi.com'
  },
  {
    title: 'Frichti at Work',
    img: `${productionsPath}/frichti-at-work.png`,
    type: FULLSTACK,
    href: 'https://atwork.frichti.co'
  },
  {
    title: 'MUI Chips Input',
    img: `${productionsPath}/mui-chips-input.png`,
    type: FRONTEND,
    href: 'https://viclafouch.github.io/mui-chips-input'
  },
  {
    title: 'MUI File Input',
    img: `${productionsPath}/mui-file-input.png`,
    type: FRONTEND,
    href: 'https://viclafouch.github.io/mui-file-input'
  },
  {
    title: 'MUI OTP Input',
    img: `${productionsPath}/mui-otp-input.png`,
    type: FRONTEND,
    href: 'https://viclafouch.github.io/mui-otp-input'
  },
  {
    title: 'MUI Color Input',
    img: `${productionsPath}/mui-color-input.png`,
    type: FRONTEND,
    href: 'https://viclafouch.github.io/mui-color-input'
  },
  {
    title: 'MUI Tel Input',
    img: `${productionsPath}/mui-tel-input.png`,
    type: FRONTEND,
    href: 'https://viclafouch.github.io/mui-tel-input'
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
    href: 'https://admiring-davinci-96f9e2.netlify.app'
  },
  {
    title: 'Fetch Crawler',
    img: `${productionsPath}/fetch-crawler.jpg`,
    type: BACKEND,
    href: 'https://github.com/viclafouch/fetch-crawler'
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
    title: 'Seald.io',
    img: `${productionsPath}/seald.io.jpg`,
    type: FRONTEND,
    href: 'https://www.seald.io/'
  },
  {
    title: 'TutoBwim.fr',
    img: `${productionsPath}/tutobwim.fr.jpg`,
    type: FULLSTACK,
    href: 'https://www.tutobwim.fr/'
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
                    <Image
                      src={production.img}
                      alt={production.title}
                      loading="lazy"
                      fill
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
