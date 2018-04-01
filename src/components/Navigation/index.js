import React, { Component } from 'react'
import classNames from 'classnames/bind';
import styles from './styles.css'
import { NavLink } from 'react-router-dom'
import links from '../../pages-config'
let cx = classNames.bind(styles);

export class Navigation extends Component {

    constructor() {
        super()
        this.state = {
            menuOpened: false
        }
        this.toggle = this.toggle.bind(this);
        this.closeNav = this.closeNav.bind(this);
    }

    componentDidMount = () => {


    }

    closeNav() {
        if (this.state.menuOpened) {
            this.setState({
                menuOpened: false
            })
        }
    }

    toggle() {
        this.setState({
            menuOpened: !this.state.menuOpened
        });
    }

    render() {
        return (
            <nav className={cx('navigation')}>
                <div className={cx('nav-links-container')}>
                    <div className={cx('nav-burger', { 'menu-opened': this.state.menuOpened })} onClick={this.toggle}><span></span></div>
                    <ul className={cx('nav-links-list', { 'active': this.state.menuOpened })}>
                    {
                        links.map((navlink, index) => {
                            return (
                                navlink.inNav &&
                                <li key={index} className={cx('nav-links-list-item')}>
                                    <NavLink
                                        onClick={() => {
                                            this.setState({
                                                menuOpened: false
                                            });
                                        }}
                                        exact={navlink.exact}
                                        to={navlink.url}
                                        className={cx('nav-links-list-item-href')}
                                        activeClassName={cx('active')}
                                    >{navlink.textInNav}</NavLink>
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
