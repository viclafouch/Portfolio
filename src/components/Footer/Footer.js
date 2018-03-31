import React from 'react'
import classNames from 'classnames/bind';
import styles from './styles.css'
let cx = classNames.bind(styles);

const Footer = () => {
  return (
    <footer className={cx('footer')}>
        <p>Copyright &copy; 2018 by Victor de la Fouchardiere</p>
    </footer>
  )
}

export default Footer
