import React from 'react'
import classNames from 'classnames/bind';
import styles from './styles.css'

let cx = classNames.bind(styles);

const Techno = (props) => {
    return (
        <article className={cx('techno')}>
            <h5 className={cx('techno-title')}>{props.title}</h5>
            <span className={cx('techno-subtitle')}>{props.type}</span>
            <img className={cx('techno-img')} src={props.img} alt={props.title} title={props.title}/>
        </article>
    )
}

export default Techno
