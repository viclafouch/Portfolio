import React from 'react'
import classNames from 'classnames/bind';
import styles from './styles.css'
let cx = classNames.bind(styles);

const Footer = () => {
  return (
    <footer className={cx('footer')}>
        <p>Copyright &copy; {(new Date()).getFullYear()} by Victor de la Fouchardiere</p>
      <p>Developed with React.js </p>
    </footer>
  )
}

export default Footer
