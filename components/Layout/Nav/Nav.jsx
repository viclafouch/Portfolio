import React, { Component } from 'react'
import Link from 'next/link'
import './nav.scss'
import { withRouter } from 'next/router'
import { Children } from 'react'

const links = [
  { text: 'Accueil', href: '/' },
  { text: 'Compétences', href: '/competences' },
  { text: 'Productions', href: '/productions' },
  { text: 'Formations', href: '/formations' },
  { text: 'Contact', href: '/contact' }
]

const ActiveLink = withRouter(({ router, children, ...props }) => {
  const child = Children.only(children)

  let className = child.props.className || ''
  if (router.pathname === props.href && props.activeClassName) {
    className = `${className} ${props.activeClassName}`.trim()
  }

  delete props.activeClassName

  return (
    <Link {...props} scroll={false}>
      {React.cloneElement(child, { className })}
    </Link>
  )
})

export class Nav extends Component {
  constructor() {
    super()
    this.state = {
      menuOpened: false
    }
    this.list = React.createRef()
    this.burger = React.createRef()
    this.escFunction = this.escFunction.bind(this)
    this.toggleNavigation = this.toggleNavigation.bind(this)
  }

  escFunction(event) {
    if (event.keyCode === 27) this.toggleNavigation()
  }

  componentWillUnmount = () =>
    document.removeEventListener('keydown', this.escFunction, false)

  toggleNavigation() {
    return this.setState(
      state => ({
        menuOpened: !state.menuOpened
      }),
      () => {
        if (this.state.menuOpened) {
          const listWidth = this.list.current.offsetWidth
          const burgerWidth = this.burger.current.offsetWidth
          const translationX = listWidth / 2 - (burgerWidth - 5) // padding-right + width burger / 2
          this.burger.current.style.transform = `translateX(-${translationX}px)`
          document.addEventListener('keydown', this.escFunction, false)
        } else {
          this.burger.current.style.transform = 'translateX(0px)'
          document.removeEventListener('keydown', this.escFunction, false)
        }
      }
    )
  }

  render() {
    return (
      <nav className="navigation" id="navbar">
        <div className="container flex-me flex-align">
          <a href="/">
            <img
              src="/static/logo-de-la-fouchardiere-victor.png"
              alt="Logo Victor de la Fouchardière"
            />
          </a>
          <div>
            <div
              tabIndex="0"
              onKeyDown={e => e.keyCode === 13 && this.toggleNavigation()}
              ref={this.burger}
              className={
                'nav-burger ' + (this.state.menuOpened ? 'menu-opened' : '')
              }
              onClick={this.toggleNavigation}
            >
              <span />
            </div>
            <ul
              ref={this.list}
              className={
                'nav-links-list ' + (this.state.menuOpened ? 'active' : '')
              }
            >
              {links.map((link, index) => (
                <li key={index} className="nav-links-list-item">
                  <ActiveLink href={link.href} activeClassName="active">
                    <a className="nav-links-list-item-href">{link.text}</a>
                  </ActiveLink>
                </li>
              ))}
            </ul>
            {this.state.menuOpened && (
              <div className="nav-overlay" onClick={this.toggleNavigation} />
            )}
          </div>
        </div>
      </nav>
    )
  }
}

export default Nav
