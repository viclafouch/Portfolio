import React from 'react'
import classNames from 'classnames/bind';
import styles from './styles.css'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

let cx = classNames.bind(styles);

const contactLinks = [
    {
        text: {
            title: 'victor.dlf@outlook.fr',
            className: cx('header-item-links-text')
        },
        fontawesome: {
            name: 'envelope'
        },
        href: 'mailto:victor.dlf@outlook.fr',
        title: '',
        className: cx('header-item-links'),
    },
    {
        text: {
            title: 'viclafouch',
            className: cx('header-item-links-text')
        },
        fontawesome: {
            prefix: 'fab',
            name: 'skype'
        },
        href: 'skype:victor.dlf?add',
        title: '',
        className: cx('header-item-links'),
    }
]

const socialLinks = [
    {
        fontawesome: {
            prefix: 'fab',
            name: 'linkedin'
        },
        href: 'https://www.linkedin.com/in/victordelafouchardiere/',
        title: '',
        className: cx('header-item-links'),
    },
    {
        fontawesome: {
            prefix: 'fab',
            name: 'codepen'
        },
        href: 'https://codepen.io/Viclafouch/',
        title: '',
        className: cx('header-item-links'),
    },
    {
        fontawesome: {
            prefix: 'fab',
            name: 'google'
        },
        href: 'https://topcontributor.withgoogle.com/profile/victor-de-la-fouchardiere-e5fded',
        title: '',
        className: cx('header-item-links'),
    },
    {
        fontawesome: {
            prefix: 'fab',
            name: 'git'
        },
        href: 'https://github.com/viclafouch',
        title: '',
        className: cx('header-item-links'),
    },
    {
        fontawesome: {
            prefix: 'fab',
            name: 'twitter'
        },
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
                                    <FontAwesomeIcon icon={[link.fontawesome.prefix || 'fa', link.fontawesome.name]} />
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
                                    <FontAwesomeIcon icon={[link.fontawesome.prefix || 'fa', link.fontawesome.name]} />
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
