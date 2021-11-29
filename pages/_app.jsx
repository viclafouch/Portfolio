import React, { useEffect } from 'react'
import Router from 'next/router'
import Script from 'next/script'
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

const { GA_TRACKING_ID } = process.env
const IS_PRODUCTION = process.env.NODE_ENV === 'production'

const getScrolled = () => {
  const navHeight = document.getElementById('navbar').offsetHeight
  const { top } = document.getElementById('main-app').getBoundingClientRect()
  return { navHeight, betweenTopScreenAndMain: top }
}

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    let scroll = false
    Router.events.on('routeChangeStart', () => {
      Nprogress.start()
      const { navHeight, betweenTopScreenAndMain } = getScrolled()
      scroll = betweenTopScreenAndMain < navHeight + 20
    })
    Router.events.on('routeChangeError', () => {
      return Nprogress.done()
    })
    Router.events.on('routeChangeComplete', (url) => {
      gtag.pageview(url)
      Nprogress.done()
      const { navHeight, betweenTopScreenAndMain } = getScrolled()
      if (scroll) window.scrollBy(0, betweenTopScreenAndMain - navHeight)
    })

    return () => {
      return Nprogress.done()
    }
  }, [])

  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
              send_page_view: ${IS_PRODUCTION}
            });
          `
        }}
      />
    </>
  )
}

export default MyApp
