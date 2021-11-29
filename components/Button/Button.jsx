import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './button.module.scss'

const Button = (props) => {
  const {
    primary,
    inverse,
    disabled,
    children,
    icon,
    href,
    target,
    download,
    ...rest
  } = props
  const classnames = [styles.button]
  if (primary) classnames.push(styles.primary)
  if (inverse) classnames.push(styles.inverse)

  return href ? (
    <a
      href={href}
      rel={target ? 'noreferrer noopener' : ''}
      target={target || ''}
      className={classnames.join(' ')}
      download={download || false}
      {...rest}
    >
      {icon && <FontAwesomeIcon icon={icon} />}
      {children}
    </a>
  ) : (
    <button
      disabled={disabled}
      type="button"
      className={classnames.join(' ')}
      {...rest}
    >
      {icon && <FontAwesomeIcon icon={icon} />}
      {children}
    </button>
  )
}

export default Button
