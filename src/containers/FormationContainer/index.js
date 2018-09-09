import React, { Component } from 'react'
import classNames from 'classnames/bind';
import styles from './styles.css'
import Title from '../../components/Title';
import EEMIlogo from './eemi-logo.png'
import SEO from '../../components/SEO';
import Freecodecamplogo from './freecodecamp.png'
import DigitalGooglelogo from './digital-active.png'
import SaintPaullogo from './saint-paul.png'
import Training from '../../components/Training';

let cx = classNames.bind(styles);

let trainings = [
    {
        date: '2015 - 2018',
        title: 'EEMI',
        href: 'http://www.eemi.com/',
        rows: [
            {
                text: 'Spécialisation dans le web developpement'
            },
            {
                text: 'Connaissances acquises dans : Webmarketing / Communication digitale / Webdesign / Développement web / Gestion de Projet'
            },
            {
                text: 'Objectif : Licence'
            }
        ],
        img: EEMIlogo
    },
    {
        date: 'Obtenu en 2016',
        title: 'Certifications Google',
        href: 'https://learndigital.withgoogle.com/digitalactive/',
        rows: [
            {
                text: 'Digital Active (Google)'
            },
            {
                text: 'Conception de sites mobiles (Google)'
            },
            {
                text: 'Développement de chaîne (YouTube)'
            }
        ],
        img: DigitalGooglelogo
    },
    {
        date: 'Depuis Oct 2016',
        title: 'Free Code Camp',
        href: 'https://www.freecodecamp.org/',
        rows: [
            {
                text: 'Javascript'
            },
            {
                text: 'Php'
            },
            {
                text: 'CSS/SCSS'
            }
        ],
        img: Freecodecamplogo
    },
    {
        date: ' Obtenu en 2015',
        title: 'BAC Economique et Social',
        href: 'http://www.lycee-saint-paul-lille.fr/',
        rows: [
            {
                text: 'Diplôme du Baccalauréat Economique et Social (ES)'
            },
            {
                text: 'Lycée Saint Paul - Lille'
            },
        ],
        img: SaintPaullogo
    },
]

export class FormationsContainer extends Component {
  render() {
    return (
        <section className={cx('formationscontainer')}>
            <SEO url={this.props.match.url} />
            <Title title="Formations" subtitle="Ce que j'apprends" />
            <ul className={cx('training-list')}>
                {
                    trainings.map((training, index) => {
                        return (
                            <Training {...training} key={index} />
                        )
                    })
                }
            </ul>
        </section>
    )
  }
}

export default FormationsContainer
