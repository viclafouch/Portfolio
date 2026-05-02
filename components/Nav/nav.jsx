import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter, withRouter } from 'next/router'
import clsx from 'clsx'
import styles from './nav.module.scss'

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect

const links = [
  { text: 'Home', href: '/' },
  { text: 'Skills', href: '/skills' },
  { text: 'Productions', href: '/productions' },
  { text: 'Trainings', href: '/trainings' },
  { text: 'Blog', href: '/blog' }
]

const ActiveLink = withRouter(
  ({ router, children, className, activeClassName, ...props }) => {
    return (
      <Link
        {...props}
        scroll={false}
        className={clsx({
          [className]: true,
          [activeClassName]: router.pathname === props.href
        })}
      >
        {children}
      </Link>
    )
  }
)

const Nav = () => {
  const [isMenuOpened, setIsMenuOpened] = React.useState(false)
  const listRef = React.useRef(null)
  const burgerRef = React.useRef(null)
  const router = useRouter()

  React.useEffect(() => {
    const handleRouteChange = () => {
      return setIsMenuOpened(false)
    }

    router.events.on('routeChangeStart', handleRouteChange)

    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [router.events])

  const handleEscap = React.useCallback((event) => {
    if (event.keyCode === 27) {
      setIsMenuOpened(false)
    }
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
        <Link href="/">
          <Image
            width={50}
            height={70}
            priority
            src="/images/logo.png"
            alt="Logo Victor de la Fouchardière"
          />
        </Link>
        <div>
          <button
            type="button"
            ref={burgerRef}
            className={`${styles.nav_burger} ${
              isMenuOpened ? styles.menu_opened : ''
            }`}
            onClick={() => {
              return setIsMenuOpened((prevState) => {
                return !prevState
              })
            }}
          >
            <span />
          </button>
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
            <button
              type="button"
              className={styles.nav_overlay}
              onClick={() => {
                return setIsMenuOpened(false)
              }}
              aria-label="overlay"
            />
          ) : null}
        </div>
      </div>
    </nav>
  )
}

export default Nav
