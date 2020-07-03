import moment from 'moment'
import Page from 'components/Page/Page'
import Title from 'components/Title/Title'
import Meta from 'components/Meta/Meta'

moment.locale('fr')

function Blog({ posts }) {
  return (
    <Page>
      <Meta
        title="Blog de Victor de la Fouchardiere"
        description="Découvrez les derniers articles de blog de Victor de la Fouchardière."
        canonical="https://www.victor-de-la-fouchardiere.fr/blog"
      />
      <section className="blog-section">
        <Title title="Blog" subtitle="Ce que j'écris" />
        <div className="blog-list">
          {posts.map(post => (
            <article key={post.id} className="blog-list-item" data-id={post.id}>
              <div role="presentation">
                <div className="blog-article-top">
                  <a href={post.url} target="_blank" rel="noreferrer">
                    <img src="/images/devto.webp" className="source-url" alt="Dev.to" />
                    <div
                      className="blog-article-cover"
                      style={{
                        backgroundImage: `url(${post.cover_image})`
                      }}
                    />
                  </a>
                </div>
                <div className="blog-article-body">
                  <div className="blog-article-top-metas">
                    <h3 className="body-article-title">
                      <a href={post.url} target="_blank" rel="noreferrer">
                        {post.title}
                      </a>
                    </h3>
                    <p className="blog-article-description">{post.description}</p>
                  </div>
                  <div className="blog-article-bottom-metas">
                    <ul className="blog-list-tags">
                      {post.tag_list.map((tag, index) => (
                        <li key={index}>#{tag}</li>
                      ))}
                    </ul>
                    <div className="blog-user-meta">
                      <a href="https://dev.to/viclafouch" target="_blank" rel="noreferrer">
                        <img className="blog-author-pic" src={post.user.profile_image_90} alt={post.user.name} />
                      </a>
                      <div className="meta-texts">
                        <span className="meta-author-name">{post.user.name}</span>
                        <a className="meta-author-date" href={post.url} target="_blank" rel="noreferrer">
                          <time>
                            {moment(post.published_timestamp).format('D MMM YYYY')} ({moment(post.published_timestamp).fromNow()})
                          </time>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Page>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://dev.to/api/articles?username=viclafouch')
  const posts = await res.json()
  return {
    props: {
      posts
    }
  }
}

export default Blog
