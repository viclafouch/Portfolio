import Head from 'next/head'

import React, { Component } from 'react'

export class Meta extends Component {
  state = {
    title: ''
  }
  static getDerivedStateFromProps(props, state) {
    if (props.title) {
      return {
        title:
          props.title + ' de Victor de la Fouchardiere – Développeur Front-end'
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
            this.state.title ||
            "Je m'appelle Victor de la Fouchardière, titulaire d'une licence 'Chef de Projets Digitaux' (à l'Ecole Européenne des Métiers de l'Internet) et développeur web fullstack chez Seald, j'ai une vraie vocation pour la programmation web coté frontend (React, Vue.js, Angular ...)."
          }
        />
      </Head>
    )
  }
}

export default Meta
