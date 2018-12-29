import './footer.scss'

export default () => (
  <footer className="footer flex-me flex-vertical flex-align flex-justify-center">
    <p>&copy;{new Date().getFullYear()} by Victor de la Fouchardiere</p>
    <p className="note">Developed with React.js / Next.js</p>
  </footer>
)
