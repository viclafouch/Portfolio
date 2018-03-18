import React, { Component } from 'react'
import classNames from 'classnames/bind';
import styles from './styles.css'
import Title from '../../components/Title';
import Production from '../../components/Production';

import Production1 from './codepen-screen.png'

let cx = classNames.bind(styles);

let typesDev = ['FrontEnd']

const productions = [
    {
        title: 'Pokemon battle',
        img: Production1,
        type: typesDev[0],
        description: 'Toutes mes réalisations de front sur Codepen.',
        href: 'https://codepen.io/Viclafouch/'
    },
    {
        title: 'Pokemon battle',
        img: Production1,
        type: typesDev[0],
        description: 'Toutes mes réalisations de front sur Codepen.',
        href: 'https://codepen.io/Viclafouch/'
    },
    {
        title: 'Pokemon battle',
        img: Production1,
        type: typesDev[0],
        description: 'Toutes mes réalisations de front sur Codepen.',
        href: 'https://codepen.io/Viclafouch/'
    },
]

export class ProductionsContainer extends Component {
    render() {
        return (
            <section className={cx('productionscontainer')}>
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
