import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './styles.css'
import profilePicture from './victor-de-la-fouchardiere.png'
import SEO from '../../components/SEO';
import { Link } from 'react-router-dom'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

import imgActually from './myedc.png'

let cx = classNames.bind(styles);

export class HomeContainer extends Component {
    render() {
        return(
            <section className={cx('homecontainer')}>
                <SEO url={this.props.match.url} />
                <div className={cx('content-row')}>
                    <img src={profilePicture} className={cx('profile-picture')} title="Victor de la Fouchardiere" alt="Victor de la Fouchardiere"/>
                    <h2 className={cx('title-h2', 'title')}>Victor de la Fouchardiere</h2>
                    <span className={cx('sub-title', 'title')}>Google TC / Etudiant / Developpeur web</span>
                </div>
                <hr/>
                <div className={cx('content-row')}>
                    <p className={cx('profile-resume')}>
                    Developpeur web et étudiant depuis septembre 2015 à l'Ecole Européenne des Métiers de l'Internet, j'ai une vraie vocation pour la programmation web tout en ayant acquis des connaissances renforcées en marketing et en design.
                    </p>
                </div>
                <hr />
                <div className={cx('content-row')}>
                    <h3>Aujourd'hui</h3>
                    <div className={cx('actually-container')}>
                        <Link target="_blank" to="http://www.myedco.fr/">
                            <img src={imgActually} className={cx('actually-img')} alt="" />
                        </Link>
                        <p>Développeur Frontend en stage chez <b><i>My Edition Company</i> depuis le 01/03/2018</b>.</p>
                        <p>
                            <span>React.js{' '}
                            <FontAwesomeIcon icon={["fab", "react"]}
                            /></span>{' / '}
                            <span>Python{' '}
                            <FontAwesomeIcon icon={["fab", "python"]}
                            /></span>
                        </p>
                    </div>
                </div>
            </section>
        )
    }
}

export default HomeContainer;