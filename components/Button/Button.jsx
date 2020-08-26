import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './button.module.scss'

function Button(props) {
  const classnames = [styles.button]
  if (props.primary) classnames.push(styles.primary)
  if (props.inverse) classnames.push(styles.inverse)

  const button = (
    <button
      disabled={props.disabled}
      className={classnames.join(' ')}
      tabIndex={props.href ? '-1' : '0'}
    >
      {props.icon && <FontAwesomeIcon icon={props.icon} />}
      {props.children}
    </button>
  )

  return props.href ? (
    <a
      href={props.href}
      rel={props.target ? 'noreferrer noopener' : ''}
      target={props.target || ''}
      download={props.download || 'false'}
    >
      <style jsx>{`
        a {
          display: block;
          outline: none;
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
