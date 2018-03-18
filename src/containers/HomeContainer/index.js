import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './styles.css'

import profilePicture from './victor-de-la-fouchardiere.png'
import gears from './gears.svg';
import correct from './correct.svg';
import smartphone from './smartphone.svg';

let cx = classNames.bind(styles);

const skills = [
    {
        svg: gears,
        title: 'Développement de A à Z',
        text: 'Créer des sites web complets coté client et coté serveur'
    },
    {
        svg: smartphone,
        title: 'Responsive design adapté',
        text: 'Penser responsive quelque soit l\'appareil(tablettes, desktop...).'
    },
    {
        svg: correct,
        title: 'Code propre et soigné',
        text: 'Programmer avec un code (HTML5 ; CSS3 ; PHP ; JS) propre et valide.'
    }
]

class HomeContainer extends Component {

    render() {
        return(
            <section className={cx('homecontainer')}>
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
                    <ul className={cx('list-skills')}>
                    {
                        skills.map((skill, index) => {
                            return (
                                <li key={index} className={cx('list-skills-item')}>
                                    <img className={cx('list-skills-item-img')} src={skill.svg} alt=""/>
                                    <span className={cx('list-skills-item-span')} >{skill.title}</span>
                                    <p className={cx('list-skills-item-p')} >{skill.text}</p>
                                </li>
                            )
                        })
                    }
                    </ul>
                </div>
            </section>
        )
    }
}

export default HomeContainer;