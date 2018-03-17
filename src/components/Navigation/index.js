import React, { Component } from 'react'
import classNames from 'classnames/bind';
import styles from './styles.css'
import { NavLink } from 'react-router-dom'
let cx = classNames.bind(styles);

const navigationLinks = [
    {
        href: '/',
        exact: true,
        text: 'Accueil'
    },
    {
        href: '/formations',
        exact: false,
        text: 'Formations'
    },
    {
        href: '/productions',
        exact: false,
        text: 'Portfolio'
    },
    {
        href: '/competences',
        exact: false,
        text: 'Compétences'
    },
    {
        href: '/contact',
        exact: false,
        text: 'Contact'
    },
]

export class Navigation extends Component {


    constructor() {
        super()
        this.state = {
            menuOpened: false
        }
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            menuOpened: !this.state.menuOpened
        }, () => {
            console.log(this.state.menuOpened);
        });
    }

    render() {
        return (
            <nav className={cx('navigation')}>
                <div className={cx('nav-links-container')}>
                    <div className={cx('nav-burger', { 'menu-opened': this.state.menuOpened })} onClick={this.toggle}><span></span></div>
                    <ul className={cx('nav-links-list', { 'active': this.state.menuOpened })}>
                    {
                        navigationLinks.map((navlink, index) => {
                            return (
                                <li key={index} className={cx('nav-links-list-item')}>
                                    <NavLink exact={navlink.exact} to={navlink.href} className={cx('nav-links-list-item-href')} activeClassName={cx('active')}>{navlink.text}</NavLink>
                                </li>
                            )
                        })
                    }
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navigation
