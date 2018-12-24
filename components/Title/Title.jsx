import './title.scss'

const Title = ({ title, subtitle }) => (
  <div className="title flex-me flex-vertical flex-align flex-justify-center">
    <h2 className="pdi--bottom-7">{title}</h2>
    <p>{subtitle}</p>
  </div>
)

export default Title
