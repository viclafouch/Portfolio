import React, { Component } from 'react'
import classNames from 'classnames/bind';
import styles from './styles.css'
import FontAwesome from 'react-fontawesome'

let cx = classNames.bind(styles);

const contactLinks = [
    {
        text: {
            title: 'victor.dlf@outlook.fr',
            className: cx('header-item-links-text')
        },
        fontawesome: 'envelope-o',
        href: 'mailto:victor.dlf@outlook.fr',
        title: '',
        className: cx('header-item-links'),
    },
    {
        text: {
            title: 'viclafouch',
            className: cx('header-item-links-text')
        },
        fontawesome: 'skype',
        href: 'skype:victor.dlf?add',
        title: '',
        className: cx('header-item-links'),
    }
]

const socialLinks = [
    {
        fontawesome: 'linkedin-square',
        href: 'https://www.linkedin.com/in/victordelafouchardiere/',
        title: '',
        className: cx('header-item-links'),
    },
    {
        fontawesome: 'codepen',
        href: 'https://codepen.io/Viclafouch/',
        title: '',
        className: cx('header-item-links'),
    },
    {
        fontawesome: 'google',
        href: 'https://topcontributor.withgoogle.com/profile/victor-de-la-fouchardiere-e5fded',
        title: '',
        className: cx('header-item-links'),
    },
    {
        fontawesome: 'git',
        href: 'https://github.com/viclafouch',
        title: '',
        className: cx('header-item-links'),
    },
    {
        fontawesome: 'twitter',
        href: 'https://twitter.com/VicAndTips',
        title: '',
        className: cx('header-item-links'),
        blank: true
    },
]

export const Header = () => {
    return (
        <header className={cx('header')}>
            <div className={cx('header-links')}>
                <div className={cx('header-box-links')}>
                    {
                        contactLinks.map((link, index) => {
                            return (
                                <a href={link.href} key={index} target="_blank" className={link.className} title={link.title}>
                                    <FontAwesome name={link.fontawesome} />
                                    <span className={link.text.className}>{link.text.title}</span>
                                </a>
                            )
                        })
                    }
                </div>
                <div className={cx('header-box-links')}>
                    {
                        socialLinks.map((link, index) => {
                            return (
                                <a href={link.href} key={index} target="_blank" className={link.className} title={link.title}>
                                    <FontAwesome name={link.fontawesome} />
                                </a>
                            )
                        })
                    }
                </div>
            </div>
        </header>
    )
}

export default Header
