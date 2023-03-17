import React, {
  Children,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState
} from 'react'
import Link from 'next/link'
import { useRouter, withRouter } from 'next/router'
import styles from './nav.module.scss'

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect

const links = [
  { text: 'Home', href: '/' },
  { text: 'Skills', href: '/skills' },
  { text: 'Productions', href: '/productions' },
  { text: 'Trainings', href: '/trainings' },
  { text: 'Blog', href: '/blog' }
]

const ActiveLink = withRouter(
  ({ router, children, activeClassName, ...props }) => {
    const child = Children.only(children)

    let className = child.props.className || ''
    if (router.pathname === props.href && activeClassName) {
      className = `${className} ${activeClassName}`
    }

    return (
      <Link {...props} scroll={false}>
        {React.cloneElement(child, { className })}
      </Link>
    )
  }
)

const Nav = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false)
  const listRef = useRef(null)
  const burgerRef = useRef(null)
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = () => {
      return setIsMenuOpened(false)
    }
    router.events.on('routeChangeStart', handleRouteChange)
    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [router.events])

  const handleEscap = useCallback((event) => {
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
            onKeyPress={() => {
              return setIsMenuOpened((prevState) => {
                return !prevState
              })
            }}
            className={`${styles.nav_burger} ${
              isMenuOpened ? styles.menu_opened : ''
            }`}
            role="button"
            tabIndex="0"
            onClick={() => {
              return setIsMenuOpened((prevState) => {
                return !prevState
              })
            }}
          >
            <span />
          </div>
          <ul
            ref={listRef}
            className={`${styles.nav_links_list} ${
              isMenuOpened ? styles.nav_links_list_active : ''
            }`}
          >
            {links.map((link) => {
              return (
                <li key={link.text} className={styles.nav_links_list_item}>
                  <ActiveLink
                    href={link.href}
                    className={styles.nav_links_list_item_href}
                    activeClassName={styles.active}
                  >
                    <span>{link.text}</span>
                  </ActiveLink>
                </li>
              )
            })}
          </ul>
          {isMenuOpened ? (
            <div
              className={styles.nav_overlay}
              onClick={() => {
                return setIsMenuOpened(false)
              }}
              onKeyPress={() => {
                return setIsMenuOpened(false)
              }}
              aria-label="overlay"
              role="button"
              tabIndex="0"
            />
          ) : null}
        </div>
      </div>
    </nav>
  )
}

export default Nav
