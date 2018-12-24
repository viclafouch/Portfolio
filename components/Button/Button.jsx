import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './button.scss'

const Button = props => {
  let classnames = ['button']
  if (props.primary) classnames.push('primary')
  if (props.inverse) classnames.push('inverse')
  if (props.className) classnames = classnames.concat(props.className)

  const button = (
    <button disabled={props.disabled} className={classnames.join(' ')}>
      {props.icon && <FontAwesomeIcon icon={props.icon} />}
      {props.children}
    </button>
  )

  return props.href ? (
    <a
      href={props.href}
      target={props.target || ''}
      download={props.download || 'false'}
    >
      <style jsx>{`
        a {
          text-decoration: none;
        }
      `}</style>
      {button}
    </a>
  ) : (
    button
  )
}

export default Button
