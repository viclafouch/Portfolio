import React from 'react'
import classNames from 'classnames/bind';
import styles from './styles.css'
import { Link } from 'react-router-dom'
import logo from './logo-de-la-fouchardiere-victor.png';
import pdf from './CV-Victor_de_la_Fouchardiere.pdf'
import Button from '../Button';

let cx = classNames.bind(styles);

export const Subheading = () => {
    return (
        <div className={cx('subheading')}>
            <div className={cx('sub-container')}>
                <Link to='/' className={cx('sub-link')}>
                    <img src={logo} alt="Victor de la Fouchardiere Logo"/>
                </Link>
                <h1 className={cx('sub-h1', 'sub-center')}>Besoin d'un développeur web&nbsp;?</h1>
                <p className={cx('sub-p', 'sub-center')}>
                    Disponible pour vous aider dans le développement de votre site web, je vous invite à regarder ci-dessous l'ensemble de mes références pour mieux connaitre mon profil.
                </p>
                <Button anchor href={pdf} fa="download" download primary text='Télécharger/Imprimer le CV' />
            </div>
        </div>
    )
}

export default Subheading
