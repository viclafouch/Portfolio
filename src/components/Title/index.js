import React from 'react'
import classNames from 'classnames/bind';
import styles from './styles.css'

let cx = classNames.bind(styles);

const Title = (props) => {
  return (
    <div className={cx('title')}>
      <h2>{props.title}</h2>
      <p>{props.subtitle}</p>
    </div>
  )
}

export default Title
