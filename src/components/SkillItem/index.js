import React from 'react'
import classNames from 'classnames/bind';
import styles from './styles.css'

let cx = classNames.bind(styles);

const SkillItem = (props) => {
    return (
        <article className={cx('skill')}>
            <header className={cx('skill-header')}>
                <img src={props.img} alt={props.title.toUpperCase()} title={props.title.toUpperCase()} />
            </header>
            <footer className={cx('skill-footer')}>
                <h5>{props.title}</h5>
                <span>{props.dateInYears} ans d'expérience</span>
                <ul>
                    { props.items && props.items.map((item, index) => {
                        return (
                            <li key={index}>
                                {item}
                            </li>
                        )
                    })}
                </ul>
            </footer>
        </article>
    )
}

export default SkillItem
