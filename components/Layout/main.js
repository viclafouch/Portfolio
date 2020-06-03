import React from 'react'
import '../../scss/app.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSkype, faTwitter, faGit, faCodepen, faLinkedin, faGoogle, faVuejs, faPython } from '@fortawesome/free-brands-svg-icons'
import {
  faLink,
  faShieldAlt,
  faPencilAlt,
  faUser,
  faCalendarAlt,
  faDownload,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import Nav from './Nav/Nav'
import Heading from '../Heading/Heading'

library.add(
  faPython,
  faGoogle,
  faLinkedin,
  faCodepen,
  faGit,
  faTwitter,
  faSkype,
  faVuejs,
  faEnvelope,
  faDownload,
  faCalendarAlt,
  faPencilAlt,
  faUser,
  faShieldAlt,
  faLink
)

class Layout extends React.Component {
  render() {
    const { children } = this.props
    return (
      <>
        <a href="https://github.com/viclafouch/Portfolio" target="_blank" id="forkMe" rel="noopener noreferrer">
          <img
            src="https://camo.githubusercontent.com/567c3a48d796e2fc06ea80409cc9dd82bf714434/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f6c6566745f6461726b626c75655f3132313632312e706e67"
            alt="Fork me on GitHub"
            data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_left_darkblue_121621.png"
          />
        </a>
        <Header />
        <Nav />
        <Heading />
        <main className="container" id="main-app">
          {children}
        </main>
        <Footer />
      </>
    )
  }
}

export default Layout
