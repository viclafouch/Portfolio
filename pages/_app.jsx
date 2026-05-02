import React from 'react'
import Router from 'next/router'
import Script from 'next/script'
import Nprogress from 'nprogress'
import Layout from '../components/Layout/layout'
import * as gtag from '../utils/analytics'
import 'scss/app.scss'
import 'nprogress/nprogress.css'
import '@fortawesome/fontawesome-svg-core/styles.css'

Nprogress.configure({
  showSpinner: false,
  easing: 'ease',
  speed: 200,
  trickle: true,
  trickleSpeed: 200,
  parent: 'body'
})

// oxlint-disable-next-line prefer-destructuring
const GA_TRACKING_ID = process.env.GA_TRACKING_ID
const IS_PRODUCTION = process.env.NODE_ENV === 'production'

const getScrolled = () => {
  const navHeight = document.getElementById('navbar').offsetHeight
  const { top } = document.getElementById('main-app').getBoundingClientRect()

  return { navHeight, betweenTopScreenAndMain: top }
}

const MyApp = ({ Component, pageProps }) => {
  React.useEffect(() => {
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

      if (scroll) {
        window.scrollBy(0, betweenTopScreenAndMain - navHeight)
      }
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
      <Script id="gtag-init" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}', {
            page_path: window.location.pathname,
            send_page_view: ${IS_PRODUCTION}
          });
        `}
      </Script>
    </>
  )
}

export default MyApp
