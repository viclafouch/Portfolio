import Image from 'next/image'
import Meta from 'components/Meta/meta'
import Title from 'components/Title/title'
import styles from 'scss/pages/index.module.scss'

const Home = () => {
  return (
    <>
      <Meta
        title="Portfolio of Victor de la Fouchardiere"
        description="Senior Fullstack Developer specializing in TypeScript, React, TanStack, and Next.js. Discover my portfolio!"
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
            style={{ objectFit: 'cover' }}
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
          <h4 className={styles.experience__title}>Current Job</h4>
          <a
            target="_blank"
            href="https://www.naboo.app"
            title="Naboo"
            className={styles.experience_logo}
            rel="noreferrer noopener"
          >
            <Image
              width={60}
              height={60}
              src="/images/companies/naboo.webp"
              alt="Naboo"
              style={{ objectFit: 'cover' }}
            />
          </a>
          <p>
            <b>Senior Front-End developer</b> at{' '}
            <a
              target="_blank"
              href="https://www.naboo.app"
              title="Naboo"
              rel="noreferrer noopener"
            >
              <b>Naboo</b>
            </a>{' '}
            since April 2026.
            <br />
            <span className={styles.experience__description}>
              Co-responsible for frontend DX (~40 fullstack developers) with the
              Staff Frontend Lead. Driving ESLint to Oxlint migration and
              frontend practices standardization. Frontend performance
              optimization on Naboo apps.
            </span>
          </p>
        </div>
      </div>
    </>
  )
}

export default Home
