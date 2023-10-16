import Image from 'next/image'
import Meta from 'components/Meta/Meta'
import Title from 'components/Title/Title'
import styles from 'scss/pages/index.module.scss'

const Home = () => {
  return (
    <>
      <Meta
        title="Portfolio of Victor de la Fouchardiere"
        description="Victor de la Fouchardiere | Front-end developer (React, Vue, Angular, etc...) at Frichti. Fan of Javascript. Discover my portfolio!"
      />
      <div className={styles.home__page}>
        <div className={styles.home__block}>
          <Image
            width={100}
            height={100}
            src="/images/victordelafouchardiere.webp"
            priority
            title="Victor de la Fouchardiere"
            alt="Victor de la Fouchardiere"
            className={styles.profile__picture}
          />
          <Title
            title="Victor de la Fouchardiere"
            subtitle="🚀 Front-end Developer JS at Frichti 🍋"
          />
        </div>
        <hr className="striped" />
        <div
          className={`${styles.home__block} ${styles.experience__container}`}
        >
          <h4 className={styles.experience__title}>Current Job</h4>
          <a
            target="_blank"
            href="https://www.frichti.co"
            title="frichti"
            className={styles.experience_logo}
            rel="noreferrer noopener"
          >
            <Image
              width={100}
              height={100}
              src="/images/companies/frichti.png"
              alt="Frichti"
            />
          </a>
          <p>
            <b>Senior Front-End developer</b> at{' '}
            <a
              target="_blank"
              href="https://www.frichti.co"
              title="frichti"
              rel="noreferrer noopener"
            >
              <b>Frichti</b>
            </a>{' '}
            since Nov. 2020.
            <br />
            <span className={styles.experience__description}>
              • Develop new functionalities. • Participate in transversal
              technical projects within the Front guild. • Collaborate with
              other developers and product owners.
            </span>
          </p>
        </div>
      </div>
    </>
  )
}

export default Home
