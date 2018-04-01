import React from 'react'
import classNames from 'classnames/bind';
import styles from './styles.css'

let cx = classNames.bind(styles);

class NotFound extends React.Component {

    componentWillMount = () => {
        document.querySelector('body').style.overflow = 'hidden'
    }

    render() {
        return (
            <div className={cx("body")}>
                <div className={cx("hit-the-floor")}>404</div>
            </div>
        )
    }
}

export default NotFound
