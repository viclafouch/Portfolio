import React from 'react'
import App, { Container } from 'next/app'
import Font from '../components/Layout/Font/Font'
import Head from 'next/head'
import 'what-input'
import Nprogress from 'nprogress'
import Router from 'next/router'
import 'nprogress/nprogress.css'

Nprogress.configure({
  showSpinner: false,
  easing: 'ease',
  speed: 200,
  trickle: true,
  trickleSpeed: 200,
  parent: 'body'
})

export default class MyApp extends App {
  constructor() {
    super()
    Router.events.on('routeChangeStart', () => Nprogress.start())
    Router.events.on('routeChangeComplete', () => Nprogress.done())
    Router.events.on('routeChangeError', () => Nprogress.done())
  }
  componentDidMount = () => Font()

  render() {
    const { Component } = this.props

    return (
      <Container>
        <Head>
          <link key="reset" rel="stylesheet" href="/static/reset.css" />
        </Head>
        <Component />
      </Container>
    )
  }
}
