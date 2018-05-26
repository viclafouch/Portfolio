import React from 'react'
import moment from 'moment';
import classNames from 'classnames/bind';
import styles from './styles.css'

let cx = classNames.bind(styles);

export class SkillItem extends React.Component {

    convertDate(date) {
        let now = moment();
        let diff = now.diff(date, 'month');
        if (diff < 12) return diff + ' mois';
        if ((diff / 12) % 1 > 0.5) return Math.floor((diff / 12) + 1) + ' ans'
        return Math.floor((diff / 12)) + ' ans'
    }

    render() {

        let props = this.props;

        return (
            <article className={cx('skill')}>
                <header className={cx('skill-header')}>
                    <img src={props.img} alt={props.title.toUpperCase()} title={props.title.toUpperCase()} />
                </header>
                <footer className={cx('skill-footer')}>
                    <h5>{props.title}</h5>
                    <span>{this.convertDate(props.dateInYears)} d'expérience</span>
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
}

export default SkillItem
