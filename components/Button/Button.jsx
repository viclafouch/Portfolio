import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './button.scss'

function Button(props) {
  const classnames = ['button']
  if (props.primary) classnames.push('primary')
  if (props.inverse) classnames.push('inverse')
  if (props.className) classnames = classnames.concat(props.className)

  const button = (
    <button disabled={props.disabled} className={classnames.join(' ')} tabIndex={props.href ? '-1' : '0'}>
      {props.icon && <FontAwesomeIcon icon={props.icon} />}
      {props.children}
    </button>
  )

  return props.href ? (
    <a
      href={props.href}
      className="focused-button"
      rel={props.target ? 'noreferrer noopener' : ''}
      target={props.target || ''}
      download={props.download || 'false'}
    >
      <style jsx>{`
        a {
          display: block;
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
