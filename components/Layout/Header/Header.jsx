import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './header.scss'

const contactLinks = [
  {
    text: {
      title: 'victor.delafouchardiere@gmail.com',
      className: 'header-item-links-text'
    },
    fontawesome: {
      name: 'envelope'
    },
    href: 'mailto:victor.delafouchardiere@gmail.com',
    title: '',
    className: 'header-item-links'
  },
  {
    text: {
      title: 'viclafouch',
      className: 'header-item-links-text'
    },
    fontawesome: {
      prefix: 'fab',
      name: 'skype'
    },
    href: 'skype:victor.dlf?add',
    title: '',
    className: 'header-item-links'
  }
]

const socialLinks = [
  {
    fontawesome: {
      prefix: 'fab',
      name: 'linkedin'
    },
    href: 'https://www.linkedin.com/in/victordelafouchardiere/',
    title: '',
    className: 'header-item-links'
  },
  {
    fontawesome: {
      prefix: 'fab',
      name: 'codepen'
    },
    href: 'https://codepen.io/Viclafouch/',
    title: '',
    className: 'header-item-links'
  },
  {
    fontawesome: {
      prefix: 'fab',
      name: 'google'
    },
    href:
      'https://topcontributor.withgoogle.com/profile/victor-de-la-fouchardiere-e5fded',
    title: '',
    className: 'header-item-links'
  },
  {
    fontawesome: {
      prefix: 'fab',
      name: 'git'
    },
    href: 'https://github.com/viclafouch',
    title: '',
    className: 'header-item-links'
  },
  {
    fontawesome: {
      prefix: 'fab',
      name: 'twitter'
    },
    href: 'https://twitter.com/TrustedSheriff',
    title: '',
    className: 'header-item-links',
    blank: true
  }
]

export const Header = () => {
  return (
    <header className="header">
      <div className="header-links">
        <div className="header-box-links">
          {contactLinks.map((link, index) => {
            return (
              <a
                href={link.href}
                key={index}
                target="_blank"
                className={link.className}
                title={link.title}
              >
                <FontAwesomeIcon
                  icon={[
                    link.fontawesome.prefix || 'fa',
                    link.fontawesome.name
                  ]}
                />
                <span className={link.text.className}>{link.text.title}</span>
              </a>
            )
          })}
        </div>
        <div className="header-box-links">
          {socialLinks.map((link, index) => {
            return (
              <a
                href={link.href}
                key={index}
                target="_blank"
                className={link.className}
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
