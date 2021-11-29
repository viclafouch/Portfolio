import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './header.module.scss'

const contactLinks = [
  {
    text: {
      title: 'victor.delafouchardiere@gmail.com'
    },
    fontawesome: {
      name: 'envelope'
    },
    href: 'mailto:victor.delafouchardiere@gmail.com',
    title: ''
  }
]

const socialLinks = [
  {
    fontawesome: {
      prefix: 'fab',
      name: 'linkedin'
    },
    href: 'https://www.linkedin.com/in/victordelafouchardiere/',
    title: 'Linkedin'
  },
  {
    fontawesome: {
      prefix: 'fab',
      name: 'dev'
    },
    href: 'https://dev.to/viclafouch',
    title: 'Dev.to'
  },
  {
    fontawesome: {
      prefix: 'fab',
      name: 'codepen'
    },
    href: 'https://codepen.io/Viclafouch/',
    title: 'Codepen'
  },
  {
    fontawesome: {
      prefix: 'fab',
      name: 'git'
    },
    href: 'https://github.com/viclafouch',
    title: 'Github'
  },
  {
    fontawesome: {
      prefix: 'fab',
      name: 'twitter'
    },
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
          {contactLinks.map((link, index) => {
            return (
              <a
                rel="noreferrer noopener"
                href={link.href}
                key={String(index)}
                target="_blank"
                className={styles.header_links_item}
                title={link.text.title}
              >
                <FontAwesomeIcon
                  icon={[
                    link.fontawesome.prefix || 'fa',
                    link.fontawesome.name
                  ]}
                />
                <span className={styles.header_links_item_text}>
                  {link.text.title}
                </span>
              </a>
            )
          })}
        </div>
        <div>
          {socialLinks.map((link, index) => {
            return (
              <a
                rel="noreferrer noopener"
                href={link.href}
                key={String(index)}
                target="_blank"
                className={styles.header_links_item}
                title={link.title}
              >
                <FontAwesomeIcon
                  icon={[
                    link.fontawesome.prefix || 'fa',
                    link.fontawesome.name
                  ]}
                />
              </a>
            )
          })}
        </div>
      </div>
    </header>
  )
}

export default Header
