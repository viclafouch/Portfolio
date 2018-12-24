import React from 'react'
import moment from 'moment'
import classNames from 'classnames/bind'
import styles from './styles.css'
import Title from '../../components/Title'
import SEO from '../../components/SEO'
import SkillTitle from '../../components/SkillTitle'
import SkillItem from '../../components/SkillItem'
import Techno from '../../components/Techno'

import HTML from './html-logo.png'
import JS from './js-logo.png'
import PHP from './php-logo.png'
import CSS from './css-logo.png'
import JQUERY from './jquery-logo.png'
import BOOTSTRAP from './bootstrap-logo.png'
import MATERIALIZE from './materialize-logo.png'
import VUEJS from './vuejs-logo.png'
import REACT from './react-logo.png'
import SYMFONY from './symfony-logo.png'
import ROR from './ror-logo.png'
import ANGULAR from './angular-logo.png'
import VSC from './visual-code-studio-logo.png'
import GIT from './git-logo.png'
import PARCEL from './parcel-logo.png'
import WINDOWS from './windows-logo.png'
import PHOTOSHOP from './photoshop-logo.png'

let cx = classNames.bind(styles)

const languages = [
  {
    img: HTML,
    title: 'html',
    duration: [moment([2015, 1, 1])],
    items: ['HTML5', 'Sémantique', 'SVG']
  },
  {
    img: CSS,
    title: 'css',
    duration: [moment([2015, 1, 1])],
    items: ['CSS3', 'Responsive', 'SASS']
  },
  {
    img: JS,
    title: 'js',
    duration: [moment([2015, 1, 1])],
    items: ['ES6/ES7', 'DOM', 'Ajax']
  },
  {
    img: PHP,
    title: 'php',
    duration: [moment([2016, 1, 1])],
    items: ['Objet', 'MVC', 'MySql']
  }
]

const frameworks = [
  {
    img: JQUERY,
    title: 'jquery',
    duration: [moment([2015, 1, 1])]
  },
  {
    img: BOOTSTRAP,
    title: 'bootstrap',
    duration: [moment([2016, 1, 1])]
  },
  {
    img: MATERIALIZE,
    title: 'materialize',
    duration: [moment([2017, 1, 1]), moment([2017, 9, 1])]
  },
  {
    img: VUEJS,
    title: 'vue.js',
    duration: [moment([2018, 1, 1]), moment([2018, 3, 1])]
  },
  {
    img: REACT,
    title: 'react',
    duration: [moment([2018, 1, 1])]
  },
  {
    img: SYMFONY,
    title: 'symfony',
    duration: [moment([2017, 10, 1]), moment([2018, 3, 1])]
  },
  {
    img: ROR,
    title: 'ruby on rails',
    duration: [moment([2017, 10, 1]), moment([2018, 2, 1])]
  },
  {
    img: ANGULAR,
    title: 'angular 5',
    duration: [moment([2017, 10, 1]), moment([2018, 3, 1])]
  }
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
    title: 'Parcel',
    type: 'Automatisation',
    img: PARCEL
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
  }
]

const SkillTitle = ({ title }) => {
  return (
    <div className="skill-title">
      <h4>{title}</h4>
    </div>
  )
}

const SkillContainer = props => {
  return (
    <section className={cx('skillscontainer')}>
      <SEO url={props.match.url} />
      <Title title="Compétences" subtitle="Ce que je sais faire" />
      <div className={cx('skillscontainer-languages')}>
        <SkillTitle title="Languages" />
        <ul className={cx('languages-list', 'skills-list')}>
          {languages.map((language, index) => {
            return (
              <li key={index}>
                <SkillItem {...language} />
              </li>
            )
          })}
        </ul>
      </div>
      <div className={cx('skillscontainer-frameworks')}>
        <SkillTitle title="Frameworks" />
        <ul className={cx('frameworks-list', 'skills-list')}>
          {frameworks.map((framework, index) => {
            return (
              <li key={index}>
                <SkillItem {...framework} />
              </li>
            )
          })}
        </ul>
      </div>
      <div className={cx('skillscontainer-technos')}>
        <SkillTitle title="Technologies" />
        <ul className={cx('technos-list', 'skills-list')}>
          {technos.map((techno, index) => {
            return (
              <li key={index}>
                <Techno {...techno} />
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default SkillContainer
