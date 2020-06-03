import React from 'react'
import './footer.scss'

function Footer() {
  return (
    <footer className="footer flex-me flex-vertical flex-align flex-justify-center">
      <p>&copy;{new Date().getFullYear()} by Victor de la Fouchardiere</p>
      <p className="note">Developed in React.js / Next.js</p>
    </footer>
  )
}

export default Footer
