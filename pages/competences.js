import Page from '../components/Layout/main'
import moment from 'moment'
import Title from '../components/Title/Title'
import { convertDate } from '../utils/date'
import Meta from '../components/Meta/Meta'

const pathSkills = '/static/skills'

const languages = [
  {
    img: `${pathSkills}/languages/html-logo.png`,
    title: 'html',
    duration: [moment([2015, 1, 1])],
    items: ['HTML5', 'Sémantique', 'SVG']
  },
  {
    img: `${pathSkills}/languages/css-logo.png`,
    title: 'css',
    duration: [moment([2015, 1, 1])],
    items: ['CSS3', 'Grid', 'SASS']
  },
  {
    img: `${pathSkills}/languages/js-logo.png`,
    title: 'js',
    duration: [moment([2015, 1, 1])],
    items: ['ES7/ES8', 'JSX', 'SSR']
  },
  {
    img: `${pathSkills}/languages/php-logo.png`,
    title: 'php',
    duration: [moment([2016, 1, 1])],
    items: ['Objet', 'MVC', 'MySql']
  }
]

const frameworks = [
  {
    img: `${pathSkills}/frameworks/jquery-logo.png`,
    title: 'jquery',
    duration: [moment([2015, 1, 1])]
  },
  {
    img: `${pathSkills}/frameworks/bootstrap-logo.png`,
    title: 'bootstrap',
    duration: [moment([2016, 1, 1])]
  },
  {
    img: `${pathSkills}/frameworks/materialize-logo.png`,
    title: 'materialize',
    duration: [moment([2017, 1, 1]), moment([2017, 9, 1])]
  },
  {
    img: `${pathSkills}/frameworks/vuejs-logo.png`,
    title: 'vue',
    duration: [moment([2018, 7, 1]), moment()]
  },
  {
    img: `${pathSkills}/frameworks/react-logo.png`,
    title: 'react',
    duration: [moment([2018, 1, 1])]
  },
  {
    img: `${pathSkills}/frameworks/symfony-logo.svg`,
    title: 'symfony',
    duration: [moment([2017, 10, 1]), moment([2018, 3, 1])]
  },
  {
    img: `${pathSkills}/frameworks/ror-logo.png`,
    title: 'ruby on rails',
    duration: [moment([2017, 10, 1]), moment([2018, 2, 1])]
  },
  {
    img: `${pathSkills}/frameworks/angular-logo.png`,
    title: 'angular 5',
    duration: [moment([2017, 10, 1]), moment([2018, 3, 1])]
  },
  {
    img: `${pathSkills}/frameworks/expressjs-logo.svg`,
    title: 'express',
    duration: [moment([2018, 11, 1])]
  },
  {
    img: `${pathSkills}/frameworks/nextjs-logo.svg`,
    title: 'next.js',
    duration: [moment([2018, 10, 1])]
  }
]

const technos = [
  {
    title: 'Git',
    type: 'Versioning',
    img: `${pathSkills}/git-logo.svg`
  },
  {
    title: 'Webpack',
    type: 'Automatisation',
    img: `${pathSkills}/webpack-logo.svg`
  },
  {
    title: 'Visual Studio Code',
    type: 'Editeur',
    img: `${pathSkills}/visual-code-studio-logo.svg`
  },
  {
    title: 'MAC OS',
    type: 'OS',
    img: `${pathSkills}/apple-logo.png`
  },
  {
    title: 'Photoshop',
    type: 'Graphisme',
    img: `${pathSkills}/photoshop-logo.png`
  },
  {
    title: 'Parcel',
    type: 'Automatisation',
    img: `${pathSkills}/parcel-logo.png`
  },
  {
    title: 'Windows',
    type: 'OS',
    img: `${pathSkills}/windows-logo.png`
  }
]

const SkillTitle = ({ title }) => {
  return (
    <div className="skill-title center-text">
      <h4>{title}</h4>
    </div>
  )
}

export default () => (
  <Page>
    <Meta
      title="Compétences de Victor de la Fouchardiere"
      description="Découvrez les compétences de Victor de la Fouchardiere, développeur web coté front. React, Vue, ou encore Angular sont mes préférences !"
      canonical="https://www.victor-de-la-fouchardiere.fr/competences"
    />
    <section className="skills-section">
      <Title title="Compétences" subtitle="Ce que je sais faire" />
      <div className="skills-languages">
        <SkillTitle title="Langages" />
        <ul className="languages-list skills-list">
          {languages.map((language, index) => (
            <li key={index}>
              <article className="skill-article">
                <header className="skill-article-header">
                  <img
                    className="skills-img"
                    src={language.img}
                    alt={language.title.toUpperCase()}
                    title={language.title.toUpperCase()}
                  />
                  <h5 className="skill-article-header-title">
                    {language.title}
                  </h5>
                  <span className="skill-article-header-note note">
                    {convertDate(language.duration)} d'expérience
                  </span>
                </header>
                <footer className="skill-article-footer">
                  <ul className="skill-article-footer-list">
                    {language.items &&
                      language.items.map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                </footer>
              </article>
            </li>
          ))}
        </ul>
      </div>
      <div className="skills-frameworks">
        <SkillTitle title="Frameworks" />
        <ul className="framworks-list skills-list">
          {frameworks.map((framework, index) => (
            <li key={index}>
              <article className="skill-article">
                <header className="skill-article-header">
                  <img
                    className="skills-img"
                    src={framework.img}
                    alt={framework.title.toUpperCase()}
                    title={framework.title.toUpperCase()}
                  />
                  <h5 className="skill-article-header-title">
                    {framework.title}
                  </h5>
                  <span className="skill-article-header-note note">
                    {convertDate(framework.duration)} d'expérience
                  </span>
                </header>
              </article>
            </li>
          ))}
        </ul>
      </div>
      <div className="skills-languages">
        <SkillTitle title="Technologies" />
        <ul className="technos-list skills-list">
          {technos.map((techno, index) => (
            <li key={index}>
              <article className="skill-article">
                <header className="skill-article-header">
                  <img
                    className="skills-img"
                    src={techno.img}
                    alt={techno.title.toUpperCase()}
                    title={techno.title.toUpperCase()}
                  />
                  <h5 className="skill-article-header-title">{techno.title}</h5>
                  <span className="skill-article-header-note note">
                    {techno.type}
                  </span>
                </header>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  </Page>
)
