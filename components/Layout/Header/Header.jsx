import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './header.scss'

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
  },
  {
    text: {
      title: 'viclafouch'
    },
    fontawesome: {
      prefix: 'fab',
      name: 'skype'
    },
    href: 'skype:victor.dlf?add',
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
    title: 'linkedin'
  },
  {
    fontawesome: {
      prefix: 'fab',
      name: 'codepen'
    },
    href: 'https://codepen.io/Viclafouch/',
    title: 'codepen'
  },
  {
    fontawesome: {
      prefix: 'fab',
      name: 'google'
    },
    href:
      'https://topcontributor.withgoogle.com/profile/victor-de-la-fouchardiere-e5fded',
    title: 'google'
  },
  {
    fontawesome: {
      prefix: 'fab',
      name: 'git'
    },
    href: 'https://github.com/viclafouch',
    title: 'github'
  },
  {
    fontawesome: {
      prefix: 'fab',
      name: 'twitter'
    },
    href: 'https://twitter.com/TrustedSheriff',
    title: 'twitter'
  }
]

export const Header = () => {
  return (
    <header className="header">
      <div className="header-links flex-me container flex-justify-between">
        <div className="header-links-box-left">
          {contactLinks.map((link, index) => {
            return (
              <a
                rel="noreferrer noopener"
                href={link.href}
                key={index}
                target="_blank"
                className="header-links-item"
                title={link.text.title}
              >
                <FontAwesomeIcon
                  icon={[
                    link.fontawesome.prefix || 'fa',
                    link.fontawesome.name
                  ]}
                />
                <span className="header-links-item-text">
                  {link.text.title}
                </span>
              </a>
            )
          })}
        </div>
        <div className="header-links-box-right">
          {socialLinks.map((link, index) => {
            return (
              <a
                rel="noreferrer noopener"
                href={link.href}
                key={index}
                target="_blank"
                className="header-links-item"
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
