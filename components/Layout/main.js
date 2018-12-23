import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Meta from '../Meta/Meta'
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

export default ({ children }) => (
  <>
    <Meta />
    <Header />
    {children}
    <Footer />
  </>
)
