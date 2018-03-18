import React from 'react'
import classNames from 'classnames/bind';
import styles from './styles.css'

let cx = classNames.bind(styles);

const SkillTitle = (props) => {
    return (
        <div className={cx('skilltitle')}>
            <h4>{props.title}</h4>
        </div>
    )
}

export default SkillTitle
