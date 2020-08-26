import React, { useEffect } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faCodepen,
  faDev,
  faGit,
  faLinkedin,
  faTwitter
} from '@fortawesome/free-brands-svg-icons'
import {
  faCalendarAlt,
  faDownload,
  faEnvelope,
  faLink
} from '@fortawesome/free-solid-svg-icons'
import GoogleFonts from 'next-google-fonts'
import Router from 'next/router'
import Nprogress from 'nprogress'

import Layout from '../components/Layout/Layout'
import * as gtag from '../utils/analytics'

import 'scss/app.scss'
import 'nprogress/nprogress.css'

library.add(
  faLinkedin,
  faCodepen,
  faGit,
  faTwitter,
  faEnvelope,
  faDownload,
  faCalendarAlt,
  faLink,
  faDev
)

Nprogress.configure({
  showSpinner: false,
  easing: 'ease',
  speed: 200,
  trickle: true,
  trickleSpeed: 200,
  parent: 'body'
})

const getScrolled = () => {
  const navHeight = document.getElementById('navbar').offsetHeight
  const { top } = document.getElementById('main-app').getBoundingClientRect()
  return { navHeight, betweenTopScreenAndMain: top }
}

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    let scroll = false
    Router.events.on('routeChangeStart', () => {
      Nprogress.start()
      const { navHeight, betweenTopScreenAndMain } = getScrolled()
      scroll = betweenTopScreenAndMain < navHeight + 20
    })
    Router.events.on('routeChangeError', () => Nprogress.done())
    Router.events.on('routeChangeComplete', url => {
      gtag.pageview(url)
      Nprogress.done()
      const { navHeight, betweenTopScreenAndMain } = getScrolled()
      if (scroll) window.scrollBy(0, betweenTopScreenAndMain - navHeight)
    })

    return () => Nprogress.done()
  }, [])

  return (
    <Layout>
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=ABeeZee:wght@400;700&family=Karma:wght@500" />
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
