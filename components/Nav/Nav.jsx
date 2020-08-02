import React, { useLayoutEffect, useCallback, Children, useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { withRouter } from 'next/router'
import styles from './nav.module.scss'

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect

const links = [
  { text: 'Accueil', href: '/' },
  { text: 'Compétences', href: '/competences' },
  { text: 'Productions', href: '/productions' },
  { text: 'Formations', href: '/formations' },
  { text: 'Blog', href: '/blog' }
]

const ActiveLink = withRouter(({ router, children, ...props }) => {
  const child = Children.only(children)

  let className = child.props.className || ''
  if (router.pathname === props.href && props.activeClassName) {
    className = `${className} ${props.activeClassName}`
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

  useIsomorphicLayoutEffect(() => {
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
    <nav className={styles.navigation} id="navbar">
      <div className="container flex-me flex-align">
        <a href="/">
          <img src="/images/logo.png" alt="Logo Victor de la Fouchardière" />
        </a>
        <div>
          <div
            ref={burgerRef}
            className={`${styles.nav_burger} ${isMenuOpened ? styles.menu_opened : ''}`}
            onClick={() => setIsMenuOpened(isMenuOpened => !isMenuOpened)}
          >
            <span />
          </div>
          <ul ref={listRef} className={`${styles.nav_links_list} ${isMenuOpened ? styles.nav_links_list_active : ''}`}>
            {links.map((link, index) => (
              <li key={index} className={styles.nav_links_list_item} onClick={() => setIsMenuOpened(false)}>
                <ActiveLink href={link.href} activeClassName={styles.active}>
                  <a className={styles.nav_links_list_item_href}>{link.text}</a>
                </ActiveLink>
              </li>
            ))}
          </ul>
          {isMenuOpened && <div className={styles.nav_overlay} onClick={() => setIsMenuOpened(false)} />}
        </div>
      </div>
    </nav>
  )
}

export default Nav
