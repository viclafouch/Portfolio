import React, { useLayoutEffect, useCallback, Children, useState, useRef } from 'react'
import Link from 'next/link'
import { withRouter } from 'next/router'
import './nav.scss'

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

function Nav() {
  const [isMenuOpened, setIsMenuOpened] = useState(false)
  const listRef = useRef(null)
  const burgerRef = useRef(null)

  const handleEscap = useCallback(event => {
    if (event.keyCode === 27) setIsMenuOpened(false)
  }, [])

  useLayoutEffect(() => {
    if (isMenuOpened) {
      const listWidth = listRef.current.offsetWidth
      const burgerWidth = burgerRef.current.offsetWidth
      const translationX = listWidth / 2 - (burgerWidth - 5)
      burgerRef.current.style.transform = `translateX(-${translationX}px)`
      document.addEventListener('keydown', handleEscap, false)
    } else {
      burgerRef.current.style.transform = 'translateX(0px)'
    }
    return () => {
      document.removeEventListener('keydown', handleEscap, false)
    }
  }, [isMenuOpened, handleEscap])

  return (
    <nav className="navigation" id="navbar">
      <div className="container flex-me flex-align">
        <a href="/">
          <img src="/static/logo-de-la-fouchardiere-victor.png" alt="Logo Victor de la Fouchardière" />
        </a>
        <div>
          <div
            ref={burgerRef}
            className={`nav-burger ${isMenuOpened ? 'menu-opened' : ''}`}
            onClick={() => setIsMenuOpened(true)}
          >
            <span />
          </div>
          <ul ref={listRef} className={`nav-links-list ${isMenuOpened ? 'active' : ''}`}>
            {links.map((link, index) => (
              <li key={index} className="nav-links-list-item">
                <ActiveLink href={link.href} activeClassName="active">
                  <a className="nav-links-list-item-href">{link.text}</a>
                </ActiveLink>
              </li>
            ))}
          </ul>
          {isMenuOpened && <div className="nav-overlay" onClick={() => setIsMenuOpened(false)} />}
        </div>
      </div>
    </nav>
  )
}

export default Nav
