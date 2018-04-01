import React from 'react'
import classNames from 'classnames/bind';
import styles from './styles.css'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

let cx = classNames.bind(styles);

const Production = (props) => {
    return (
        <article className={cx('production')}>
            <header className={cx('production-header')}>
                <div className={cx('production-header-overlay')}>
                    <a href={props.href} target="_blank">
                        <FontAwesomeIcon icon="link" />
                    </a>
                </div>
                <img src={props.img} alt="" className={cx('production-header-cover')}/>
            </header>
            <footer className={cx('production-footer')}>
                <h4 className={cx('production-title')}>{props.title}</h4>
                <p className={cx('production-subtitle')}>{props.type}</p>
            </footer>
        </article>
    )
}

export default Production
