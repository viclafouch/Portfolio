import Head from 'next/head'

import React, { Component } from 'react'

export class Meta extends Component {
  state = {
    title: ''
  }
  static getDerivedStateFromProps(props, state) {
    if (props.title) {
      return {
        title: props.title + ' – Développeur Front-end'
      }
    }
    return null
  }

  visibilitychange = () => {
    if (document.hidden) {
      document.title = 'Reviens moi 😢'
    } else {
      document.title = this.state.title
    }
  }

  componentDidMount = () => {
    document.addEventListener('visibilitychange', this.visibilitychange)
  }

  componentWillUnmount = () => {
    document.removeEventListener('visibilitychange', this.visibilitychange)
  }

  render() {
    return (
      <Head>
        <title>{this.state.title || '404 - Not found'}</title>
        <meta
          name="description"
          content={
            (this.props.description || '') +
            " Portfolio de Victor de la Fouchardiere, développeur web chez Seald, diplomé de l'EEMI."
          }
        />
        <link rel="canonical" href={this.props.canonical} />
      </Head>
    )
  }
}

export default Meta
