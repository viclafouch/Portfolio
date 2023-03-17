import Image from 'next/image'
import Meta from 'components/Meta/Meta'
import Title from 'components/Title/Title'
import { format, formatDistance } from 'date-fns'
import styles from 'scss/pages/blog.module.scss'

const Blog = ({ posts }) => {
  return (
    <>
      <Meta
        title="Blog of Victor de la Fouchardiere"
        description={`Discover the ${posts.length} blog articles written by Victor de la Fouchardière about Javascript, UX design, HTML, etc...`}
      />
      <div className={styles.blog__page}>
        <Title title="Blog" subtitle="What I write" />
        <div className={styles.blog__list}>
          {posts.map((post) => {
            return (
              <article
                key={post.id}
                className={styles.blog__list__item}
                data-id={post.id}
              >
                <div role="presentation">
                  <div className={styles.blog__article__top}>
                    <a href={post.url} target="_blank" rel="noreferrer">
                      <Image
                        src="/images/devto.webp"
                        className={styles.source__url}
                        alt="Dev.to"
                        width={30}
                        height={30}
                        loading="lazy"
                      />
                      <div
                        className={styles.blog__article__cover}
                        style={{
                          backgroundImage: `url(${post.cover_image})`
                        }}
                      />
                    </a>
                  </div>
                  <div className={styles.blog__article__body}>
                    <div className={styles.blog__article__top__metas}>
                      <h3 className={styles.body__article__title}>
                        <a href={post.url} target="_blank" rel="noreferrer">
                          {post.title}
                        </a>
                      </h3>
                      <p className={styles.blog__article__description}>
                        {post.description}
                      </p>
                    </div>
                    <div className={styles.blog__article__bottom__metas}>
                      <ul className={styles.blog__list__tags}>
                        {post.tag_list.map((tag) => {
                          return <li key={tag}>#{tag}</li>
                        })}
                      </ul>
                      <div className={styles.blog__user__meta}>
                        <a
                          href="https://dev.to/viclafouch"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Image
                            className={styles.blog__author__pic}
                            src={post.user.profile_image_90}
                            alt={post.user.name}
                            height={38}
                            width={38}
                          />
                        </a>
                        <div className={styles.meta__texts}>
                          <span className={styles.meta__author__name}>
                            {post.user.name}
                          </span>
                          <a
                            className={styles.meta__author__date}
                            href={post.url}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <time>
                              {format(
                                new Date(post.published_timestamp),
                                'd LLL yyy'
                              )}
                            </time>{' '}
                            (
                            {formatDistance(
                              new Date(post.published_timestamp),
                              new Date(),
                              { addSuffix: true }
                            )}
                            )
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const response = await fetch(
    'https://dev.to/api/articles?username=viclafouch'
  )
  const posts = await response.json()
  return {
    props: {
      posts: posts.filter((post) => {
        return !post.tags.includes('discuss')
      })
    },
    // we will attempt to re-generate the page:
    // - when a request comes in
    // - at most once every second
    revalidate: 1
  }
}

export default Blog
