import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        Copyright &copy; {new Date().getFullYear()} by Victor de la Fouchardiere
      </p>
      <p>Developed with React.js / Next.js</p>
    </footer>
  )
}

export default Footer
