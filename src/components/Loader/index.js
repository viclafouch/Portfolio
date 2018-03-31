import React from 'react'
import classNames from 'classnames/bind';
import styles from './styles.css'
let cx = classNames.bind(styles);

const Loader = () => {
  return (
    <div className={cx('loader_container')}>
      <div className={cx('loader')}></div>
    </div>
  )
}

export default Loader
