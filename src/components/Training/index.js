import React from 'react'
import classNames from 'classnames/bind';
import styles from './styles.css'
import Button from '../Button';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

let cx = classNames.bind(styles);

const Training = (props) => {
    return (
        <li className={cx('training-item')}>
            <div className={cx('training-item-thumbnail')}>
                <img src={props.img} alt=""/>
            </div>
            <div className={cx('training-item-description')}>
                <header className={cx('training-item-description-header')}>
                    <p className={cx('training-item-description-date')}>
                        <FontAwesomeIcon icon="calendar-alt" />
                        <span>{props.date}</span>
                    </p>
                    <Button inverse anchor href={props.href} target="_blank" primary text='A propos' />
                </header>
                <h4>{props.title}</h4>
                <ul className={cx('training-item-list-row')}>
                    {
                        props.rows.map((row, index) => {
                            return (
                                <li key={index}>
                                    - {row.text}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </li>
    )
}

export default Training
