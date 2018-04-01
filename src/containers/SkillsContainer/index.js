import React, { Component } from 'react'
import classNames from 'classnames/bind';
import styles from './styles.css'
import Title from '../../components/Title';
import SEO from '../../components/SEO';
import SkillTitle from '../../components/SkillTitle';
import SkillItem from '../../components/SkillItem';
import Techno from '../../components/Techno';

import HTML from './html-logo.png';
import JS from './js-logo.png';
import PHP from './php-logo.png';
import CSS from './css-logo.png';
import JQUERY from './jquery-logo.png';
import BOOTSTRAP from './bootstrap-logo.png';
import MATERIALIZE from './materialize-logo.png';
import VUEJS from './vuejs-logo.png';
import REACT from './react-logo.png';
import SYMFONY from './symfony-logo.png';
import ROR from './ror-logo.png';
import ANGULAR from './angular-logo.png';
import VSC from './visual-code-studio-logo.png';
import GIT from './git-logo.png';
import GULP from './gulp-logo.png';
import WINDOWS from './windows-logo.png';
import PHOTOSHOP from './photoshop-logo.png';




let cx = classNames.bind(styles);

const languages = [
    {
        img: HTML,
        title: 'html',
        dateInYears: 2,
        items: ['HTML5', 'Sémantique', 'SVG']
    },
    {
        img: CSS,
        title: 'css',
        dateInYears: 3,
        items: ['CSS3', 'Responsive', 'SASS']
    },
    {
        img: JS,
        title: 'js',
        dateInYears: 3,
        items: ['ES6/ES7', 'DOM', 'Ajax']
    },
    {
        img: PHP,
        title: 'php',
        dateInYears: 2,
        items: ['Objet', 'MVC', 'MySql']
    },
]

const frameworks = [
    {
        img: JQUERY,
        title: 'jquery',
        dateInYears: 3,
    },
    {
        img: BOOTSTRAP,
        title: 'bootstrap',
        dateInYears: 2,
    },
    {
        img: MATERIALIZE,
        title: 'materialize',
        dateInYears: 1,
    },
    {
        img: VUEJS,
        title: 'vue.js',
        dateInYears: -1,
    },
    {
        img: REACT,
        title: 'react',
        dateInYears: -1,
    },
    {
        img: SYMFONY,
        title: 'symfony',
        dateInYears: -1,
    },
    {
        img: ROR,
        title: 'ruby on rails',
        dateInYears: -1,
    },
    {
        img: ANGULAR,
        title: 'angular 5',
        dateInYears: -1,
    },
]

const technos = [
    {
        title: 'Visual Code Studio',
        type: 'Editeur',
        img: VSC
    },
    {
        title: 'Git',
        type: 'Versioning',
        img: GIT
    },
    {
        title: 'Gulp',
        type: 'Automatisation',
        img: GULP
    },
    {
        title: 'Windows',
        type: 'OS Principal',
        img: WINDOWS
    },
    {
        title: 'Photoshop',
        type: 'Conception Graphique',
        img: PHOTOSHOP
    },
]

export class SkillContainer extends Component {
    render() {
        return (
            <section className={cx('skillscontainer')}>
                <SEO url={this.props.match.url} />
                <Title title="Compétences" subtitle="Ce que je sais faire" />
                <div className={cx('skillscontainer-languages')}>
                    <SkillTitle title="Languages" />
                    <ul className={cx('languages-list', 'skills-list')}>
                        {
                            languages.map((language, index) => {
                                return (
                                    <li key={index}>
                                        <SkillItem {...language} />
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className={cx('skillscontainer-frameworks')}>
                    <SkillTitle title="Frameworks" />
                    <ul className={cx('frameworks-list', 'skills-list')}>
                        {
                            frameworks.map((framework, index) => {
                                return (
                                    <li key={index}>
                                        <SkillItem {...framework} />
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className={cx('skillscontainer-technos')}>
                    <SkillTitle title="Technologies" />
                    <ul className={cx('technos-list', 'skills-list')}>
                        {
                            technos.map((techno, index) => {
                                return (
                                    <li key={index}>
                                        <Techno {...techno} />
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

export default SkillContainer
