import React, { Component } from 'react'
import classNames from 'classnames/bind';
import styles from './styles.css'
import Title from '../../components/Title';
import SEO from '../../components/SEO';
import Production from '../../components/Production';

import PokemonBattle from './pokemon-battle.png'
import TCsCenter from './tc-center.png'
import FicheAndTricks from './ficheandtricks.png'
import TutoBwim from './tutobwim.fr.png'
import WpInformations from './wpinformations.png'
import uScroll from './uscroll.png'
import Bubblesee from './bubblesee.png'

let cx = classNames.bind(styles);

let typesDev = ['FrontEnd', 'BackEnd', 'FrontEnd/BackEnd', 'Extension']

const productions = [
    {
        title: 'Pokemon battle',
        img: PokemonBattle,
        type: typesDev[0],
        href: 'https://codepen.io/Viclafouch/full/VMNdpg/'
    },
    {
        title: 'TC\'s Center',
        img: TCsCenter,
        type: typesDev[3],
        href: 'https://chrome.google.com/webstore/detail/tcs-center/hanknpkmjbfhcalmipokkfplndkohgdm'
    },
    {
        title: 'FicheAndTricks',
        img: FicheAndTricks,
        type: typesDev[2],
        href: 'https://tc-center.victor-de-la-fouchardiere.fr/'
    },
    {
        title: 'uScroll',
        img: uScroll,
        type: typesDev[0],
        href: 'https://viclafouch.github.io/uscroll/demo.html'
    },
    {
        title: 'TutoBwim.fr',
        img: TutoBwim,
        type: typesDev[2],
        href: 'https://www.tutobwim.fr/'
    },
    {
        title: 'Bubblesee',
        img: Bubblesee,
        type: typesDev[0],
        href: 'https://viclafouch.github.io/bubblesee/demo.html'
    },
    {
        title: 'WP Informations',
        img: WpInformations,
        type: typesDev[1],
        href: 'https://viclafouch.github.io/WP_Informations/'
    },
]

export class ProductionsContainer extends Component {
    render() {
        return (
            <section className={cx('productionscontainer')}>
                <SEO url={this.props.match.url} />
                <Title title="Portfolio" subtitle="Ce que je développe" />
                <ul className={cx('productions-list')}>
                {
                        productions.map((production, index) => {
                            return (
                                <li key={index}>
                                    <Production {...production} />
                                </li>
                            )
                        })
                }
                </ul>
            </section>
        )
    }
}

export default ProductionsContainer
