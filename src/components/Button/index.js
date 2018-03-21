import React from 'react'
import classNames from 'classnames/bind';
import styles from './styles.css'
import FontAwesome from 'react-fontawesome'

let cx = classNames.bind(styles);

const Button = (props) => {

    const button = props.anchor ? (
        <a href={props.href} target={props.target} download={props.download} className={cx('button', { 'primary': props.primary }, { 'inverse': props.inverse })}>
            {
                props.fa && <FontAwesome name={props.fa} />
            }
            {props.text}
        </a>
    ) : (
        <button disabled={props.disabled} className={cx('button', { 'primary': props.primary }, { 'inverse': props.inverse })}>
            {props.text}
        </button>
    );

    return (
        button
    )
}

export default Button
