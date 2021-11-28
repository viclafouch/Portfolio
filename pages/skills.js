import { differenceInMonths, differenceInYears } from 'date-fns'
import styles from 'scss/pages/skills.module.scss'

import Meta from 'components/Meta/Meta'
import Title from 'components/Title/Title'

const languagesImgPath = '/images/languages'
const frameworksImgPath = '/images/frameworks'
const technosImgPath = '/images/technos'

const languages = [
  {
    img: `${languagesImgPath}/html-logo.png`,
    title: 'HTML',
    duration: [new Date(2015, 1, 1), new Date()],
    items: ['HTML5', 'Sémantique', 'SVG']
  },
  {
    img: `${languagesImgPath}/css-logo.png`,
    title: 'CSS',
    duration: [new Date(2015, 1, 1), new Date()],
    items: ['CSS3', 'Grid', 'SASS']
  },
  {
    img: `${languagesImgPath}/js-logo.png`,
    title: 'JS',
    duration: [new Date(2015, 1, 1), new Date()],
    items: ['ES7/ES8', 'JSX', 'Node']
  },
  {
    img: `${languagesImgPath}/ts-logo.png`,
    title: 'TS',
    duration: [new Date(2019, 1, 1), new Date()],
    items: ['ES7/ES8', 'TSX', 'Casting']
  },
  {
    img: `${languagesImgPath}/php-logo.png`,
    title: 'PHP',
    duration: [new Date(2016, 1, 1), new Date()],
    items: ['Objet', 'MVC', 'MySql']
  }
]

const frameworks = [
  {
    img: `${frameworksImgPath}/vuejs-logo.png`,
    title: 'Vue',
    duration: [new Date(2017, 7, 1), new Date(2020, 8, 1)]
  },
  {
    img: `${frameworksImgPath}/react-logo.png`,
    title: 'React',
    duration: [new Date(2016, 1, 1), new Date()]
  },
  {
    img: `${frameworksImgPath}/symfony-logo.svg`,
    title: 'Symfony',
    duration: [new Date(2017, 10, 1), new Date(2018, 3, 1)]
  },
  {
    img: `${frameworksImgPath}/ror-logo.png`,
    title: 'Ruby on Rails',
    duration: [new Date(2017, 10, 1), new Date(2018, 2, 1)]
  },
  {
    img: `${frameworksImgPath}/angular-logo.png`,
    title: 'Angular 5',
    duration: [new Date(2017, 10, 1), new Date(2018, 3, 1)]
  },
  {
    img: `${frameworksImgPath}/expressjs-logo.svg`,
    title: 'Express',
    duration: [new Date(2018, 11, 1), new Date()]
  },
  {
    img: `${frameworksImgPath}/nextjs-logo.svg`,
    title: 'Next.js',
    duration: [new Date(2018, 10, 1), new Date()]
  },
  {
    img: `${frameworksImgPath}/material-ui.png`,
    title: 'Material UI',
    duration: [new Date(2018, 10, 1), new Date()]
  },
  {
    img: `${frameworksImgPath}/jquery-logo.png`,
    title: 'Jquery',
    duration: [new Date(2015, 1, 1), new Date(2017, 1, 1)]
  },
  {
    img: `${frameworksImgPath}/bootstrap-logo.png`,
    title: 'Bootstrap',
    duration: [new Date(2016, 1, 1), new Date(2017, 1, 1)]
  },
  {
    img: `${frameworksImgPath}/materialize-logo.png`,
    title: 'Materialize',
    duration: [new Date(2017, 1, 1), new Date(2017, 9, 1)]
  }
]

const technos = [
  {
    title: 'Git',
    type: 'Versioning',
    img: `${technosImgPath}/git-logo.svg`
  },
  {
    title: 'Webpack',
    type: 'Bundler',
    img: `${technosImgPath}/webpack-logo.svg`
  },
  {
    title: 'Visual Studio Code',
    type: 'Editor',
    img: `${technosImgPath}/visual-code-studio-logo.svg`
  },
  {
    title: 'MAC OS',
    type: 'OS',
    img: `${technosImgPath}/apple-logo.png`
  },
  {
    title: 'Photoshop',
    type: 'Design',
    img: `${technosImgPath}/photoshop-logo.png`
  },
  {
    title: 'Parcel',
    type: 'Bundler',
    img: `${technosImgPath}/parcel-logo.png`
  },
  {
    title: 'Windows',
    type: 'OS',
    img: `${technosImgPath}/windows-logo.png`
  },
  {
    title: 'Vite',
    type: 'Bundler',
    img: `${technosImgPath}/vite-logo.svg`
  }
]

const SkillTitle = ({ title }) => {
  return (
    <div className={styles.skill__container__title}>
      <h2 className={styles.skill__title}>{title}</h2>
    </div>
  )
}

const Skills = () => {
  return (
    <>
      <Meta
        title="Skills of Victor de la Fouchardiere"
        description="Discover the skills of Victor de la Fouchardiere, front-end developer. React, Vue, or even Angular are my preferences!"
      />
      <div className={styles.skills__page}>
        <Title title="Skills" subtitle="What I can do" />
        <div className={styles.skills__languages}>
          <SkillTitle title="Languages" />
          <ul className={`${styles.languages__list} ${styles.skills__list}`}>
            {languages.map((language, index) => {
              return (
                <li key={index}>
                  <article className={styles.skill__item}>
                    <header className={styles.skill__item__header}>
                      <img
                        className={styles.skills__img}
                        src={language.img}
                        alt={language.title}
                        title={language.title}
                        loading="lazy"
                        width="40"
                        height="40"
                      />
                      <h3 className={styles.skill__item__header__title}>
                        {language.title}
                      </h3>
                      <span
                        className={`${styles.skill__item__header__note} note`}
                      >
                        {differenceInYears(
                          language.duration[1],
                          language.duration[0]
                        )}{' '}
                        years of experience
                      </span>
                    </header>
                    <footer className={styles.skill__item__footer}>
                      <ul className={styles.skill__item__footer__list}>
                        {language.items.map((item, i) => {
                          return <li key={i}>{item}</li>
                        })}
                      </ul>
                    </footer>
                  </article>
                </li>
              )
            })}
          </ul>
        </div>
        <div className={styles.skills__frameworks}>
          <SkillTitle title="Frameworks" />
          <ul className={`${styles.frameworks__list} ${styles.skills__list}`}>
            {frameworks.map((framework, index) => {
              let duration = differenceInYears(
                framework.duration[1],
                framework.duration[0]
              )
              if (duration === 0) {
                const monthsDifference = differenceInMonths(
                  framework.duration[1],
                  framework.duration[0]
                )
                if (monthsDifference > 1) {
                  duration = `${monthsDifference} months`
                } else {
                  duration = `${monthsDifference} month`
                }
              } else if (duration === 1) {
                duration = duration + ' year'
              } else {
                duration = duration + ' years'
              }
              return (
                <li key={index}>
                  <div className={styles.skill__item}>
                    <div className={styles.skill__item__header}>
                      <img
                        className={styles.skills__img}
                        src={framework.img}
                        alt={framework.title}
                        title={framework.title}
                        loading="lazy"
                        width="40"
                        height="40"
                      />
                      <h3 className={styles.skill__item__header__title}>
                        {framework.title}
                      </h3>
                      <span
                        className={`${styles.skill__item__header__note} note`}
                      >
                        {duration} of experience
                      </span>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
        <div className={styles.skills__technos}>
          <SkillTitle title="Technologies" />
          <ul className={`${styles.technos__list} ${styles.skills__list}`}>
            {technos.map((techno, index) => {
              return (
                <li key={index}>
                  <div className={styles.skill__item}>
                    <div className={styles.skill__item__header}>
                      <img
                        className={styles.skills__img}
                        src={techno.img}
                        alt={techno.title}
                        title={techno.title}
                        loading="lazy"
                        width="40"
                        height="40"
                      />
                      <h3 className={styles.skill__item__header__title}>
                        {techno.title}
                      </h3>
                      <span
                        className={`${styles.skill__item__header__note} note`}
                      >
                        {techno.type}
                      </span>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Skills
