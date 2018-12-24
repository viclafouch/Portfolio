import React from 'react'
import '../../scss/app.scss'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Meta from '../Meta/Meta'
import Fonts from './Font/Font'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faSkype,
  faTwitter,
  faGit,
  faCodepen,
  faLinkedin,
  faGoogle,
  faReact,
  faPython
} from '@fortawesome/free-brands-svg-icons'
import {
  faLink,
  faShieldAlt,
  faPencilAlt,
  faUser,
  faCalendarAlt,
  faDownload,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons'
import Nav from './Nav/Nav'
import Heading from '../Heading/Heading'
library.add(
  faPython,
  faReact,
  faGoogle,
  faLinkedin,
  faCodepen,
  faGit,
  faTwitter,
  faSkype,
  faEnvelope,
  faDownload,
  faCalendarAlt,
  faPencilAlt,
  faUser,
  faShieldAlt,
  faLink
)

class Layout extends React.Component {
  componentDidMount() {
    Fonts()
  }

  render() {
    return (
      <>
        <Meta />
        <Header />
        <Nav />
        <Heading />
        <main className="container" id="main-app">
          {this.props.children}
        </main>
        <Footer />
      </>
    )
  }
}

export default Layout
