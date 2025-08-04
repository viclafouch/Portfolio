import Image from 'next/image'
import Meta from 'components/Meta/Meta'
import Title from 'components/Title/Title'
import styles from 'scss/pages/index.module.scss'

const Home = () => {
  return (
    <>
      <Meta
        title="Portfolio of Victor de la Fouchardiere"
        description="Victor de la Fouchardiere | Front-end developer (React, Vue, Angular, etc...). Fan of Javascript. Discover my portfolio!"
      />
      <div className={styles.home__page}>
        <div className={styles.home__block}>
          <Image
            width={100}
            height={100}
            src="/images/victordelafouchardiere.jpg"
            priority
            title="Victor de la Fouchardiere"
            alt="Victor de la Fouchardiere"
            objectFit="cover"
            className={styles.profile__picture}
          />
          <Title
            title="Victor de la Fouchardiere"
            subtitle="🚀 Senior Front-end Developer"
          />
        </div>
        <hr className="striped" />
        <div
          className={`${styles.home__block} ${styles.experience__container}`}
        >
          <h4 className={styles.experience__title}>Latest Job</h4>
          <a
            target="_blank"
            href="https://www.zoi.com"
            title="zoi"
            className={styles.experience_logo}
            rel="noreferrer noopener"
          >
            <Image
              width={60}
              height={60}
              src="/images/companies/zoi.jpeg"
              alt="Zoi"
            />
          </a>
          <p>
            <b>Senior Front-End developer</b>
            at{' '}
            <a
              target="_blank"
              href="https://www.zoi.com"
              title="zoi"
              rel="noreferrer noopener"
            >
              <b>Zoī</b>
            </a>{' '}
            between May 2024 - August 2025.
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
