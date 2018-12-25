import React from 'react'
import App, { Container } from 'next/app'
import Font from '../components/Layout/Font/Font'
import Head from 'next/head'

export default class MyApp extends App {
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
