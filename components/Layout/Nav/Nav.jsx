import React, { Component } from 'react'
import Link from 'next/link'
import './nav.scss'

const links = [
  { text: 'Accueil', href: '/' },
  { text: 'Compétences', href: '/competences' },
  { text: 'Productions', href: '/productions' },
  { text: 'Formations', href: '/formations' },
  { text: 'Contact', href: '/contact' }
]

export class Nav extends Component {
  constructor() {
    super()
    this.state = {
      menuOpened: false
    }
    this.toggleNavigation = this.toggleNavigation.bind(this)
  }

  toggleNavigation() {
    return this.setState({
      menuOpened: !this.state.menuOpened
    })
  }

  render() {
    return (
      <nav className="navigation">
        <div className="container">
          <div
            className={
              'nav-burger ' + this.state.menuOpened ? 'menu-opened' : ''
            }
            onClick={this.toggleNavigation}
          >
            <span />
          </div>
          <ul
            className={
              'nav-links-list ' + this.state.menuOpened ? 'active' : ''
            }
          >
            {links.map((link, index) => (
              <li key={index} className="nav-links-list-item">
                <Link href={link.href}>
                  <a className="nav-links-list-item-href">{link.text}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    )
  }
}

export default Nav
