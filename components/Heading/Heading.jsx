import Image from 'next/image'
import Link from 'next/link'
import Button from '../Button/Button'
import styles from './heading.module.scss'

const Heading = () => {
  return (
    <div className={styles.subheading}>
      <div className="container">
        <Link href="/">
          <Image
            className={styles.subheading_logo}
            src="/images/logo.png"
            width={100}
            height={100}
            alt="Victor de la Fouchardiere Logo"
          />
        </Link>
        <span className={`${styles.subheading_title}`}>
          Need a web developer?
        </span>
        <p className={`${styles.subheading_subtitle}`}>
          Available to help you in the development of your project, I invite you
          to take a look below at the set of my references to get to know my
          profile better.
        </p>
        <Button
          href="/pdf/CV-Victor-de-la-Fouchardiere.pdf"
          icon="download"
          download
          id="download-cv"
          primary
        >
          Download/Print CV
        </Button>
        <a
          className={`${styles.libutton}`}
          href="https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=victordelafouchardiere"
          target="_blank"
          rel="noreferrer"
        >
          Follow on LinkedIn
        </a>
      </div>
    </div>
  )
}

export default Heading
