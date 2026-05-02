import {
  faCodepen,
  faDev,
  faGit,
  faLinkedin,
  faTwitter
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './header.module.scss'

const contactLinks = [
  {
    text: {
      title: 'victor.delafouchardiere@gmail.com'
    },
    icon: faEnvelope,
    href: 'mailto:victor.delafouchardiere@gmail.com',
    title: ''
  }
]

const socialLinks = [
  {
    icon: faLinkedin,
    href: 'https://www.linkedin.com/in/victordelafouchardiere/',
    title: 'Linkedin'
  },
  {
    icon: faDev,
    href: 'https://dev.to/viclafouch',
    title: 'Dev.to'
  },
  {
    icon: faCodepen,
    href: 'https://codepen.io/Viclafouch/',
    title: 'Codepen'
  },
  {
    icon: faGit,
    href: 'https://github.com/viclafouch',
    title: 'Github'
  },
  {
    icon: faTwitter,
    href: 'https://twitter.com/TrustedSheriff',
    title: 'Twitter'
  }
]

const Header = () => {
  return (
    <header className={styles.header}>
      <div
        className={`${styles.header_links} flex-me container flex-justify-between`}
      >
        <div>
          {contactLinks.map((link) => {
            return (
              <a
                rel="noreferrer noopener"
                href={link.href}
                key={link.text.title}
                target="_blank"
                className={styles.header_links_item}
                title={link.text.title}
              >
                <FontAwesomeIcon icon={link.icon} />
                <span className={styles.header_links_item_text}>
                  {link.text.title}
                </span>
              </a>
            )
          })}
        </div>
        <div>
          {socialLinks.map((link) => {
            return (
              <a
                rel="noreferrer noopener"
                href={link.href}
                key={link.title}
                target="_blank"
                className={styles.header_links_item}
                title={link.title}
              >
                <FontAwesomeIcon icon={link.icon} />
              </a>
            )
          })}
        </div>
      </div>
    </header>
  )
}

export default Header
