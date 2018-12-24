import './title-striped.scss'

const TitleStriped = ({ title, subtitle }) => (
  <div className="title-striped flex-me flex-vertical flex-align flex-justify-center">
    <h2 className="pdi--bottom-7">{title}</h2>
    <p>{subtitle}</p>
  </div>
)

export default TitleStriped
