import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import 'what-input'
import Nprogress from 'nprogress'
import Router from 'next/router'
import * as gtag from '../utils/analytics'
import Font from '../components/Layout/Font/Font'
import 'nprogress/nprogress.css'

Nprogress.configure({
  showSpinner: false,
  easing: 'ease',
  speed: 200,
  trickle: true,
  trickleSpeed: 200,
  parent: 'body',
})

const getScrolled = () => {
  const navHeight = document.getElementById('navbar').offsetHeight
  const { top } = document.getElementById('main-app').getBoundingClientRect()

  return { navHeight, betweenTopScreenAndMain: top }
}

export default class MyApp extends App {
  constructor() {
    super()
    let scroll = false
    Router.events.on('routeChangeStart', () => {
      Nprogress.start()
      const { navHeight, betweenTopScreenAndMain } = getScrolled()
      scroll = betweenTopScreenAndMain < navHeight + 20
    })
    Router.events.on('routeChangeError', () => Nprogress.done())
    Router.events.on('routeChangeComplete', (url) => {
      gtag.pageview(url)
      Nprogress.done()
      const { navHeight, betweenTopScreenAndMain } = getScrolled()
      if (scroll) window.scrollBy(0, betweenTopScreenAndMain - navHeight)
    })
  }

  componentDidMount = () => {
    Nprogress.start()
    Font().finally(Nprogress.done())
  }

  render() {
    const { Component } = this.props

    return (
      <>
        <Head>
          <link key="reset" rel="stylesheet" href="/static/reset.css" />
        </Head>
        <Component />
      </>
    )
  }
}
