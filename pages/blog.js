import Page from 'components/Page/Page'
import Title from 'components/Title/Title'
import Meta from 'components/Meta/Meta'

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
          {posts.map((post, index) => (
            <article key={post.id} className="blog-list-item">
              <div role="presentation">
                <div className="blog-article-top">
                  {index === 0 && (
                    <a href={post.url}>
                      <div
                        className="blog-article-cover"
                        style={{
                          backgroundImage: `url(${post.cover_image})`
                        }}
                      />
                    </a>
                  )}
                  <div className="blog-article-top-metas">
                    <div className="blog-meta-left">
                      <img className="blog-author-pic" src={post.user.profile_image_90} alt={post.user.name} />
                      <div className="meta-texts">
                        <span className="meta-author-name">{post.user.name}</span>
                        <a className="meta-author-date" href={post.url}>
                          <time>16 June 2020</time>
                        </a>
                      </div>
                    </div>
                    <div className="blog-meta-right">
                      <a href={post.url}>
                        <img src="/images/devto.svg" alt="Dev.to" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="blog-article-body">
                  <h2 className="body-article-title">
                    <a href={post.url}>{post.title}</a>
                  </h2>
                  <ul className="blog-list-tags">
                    {post.tag_list.map((tag, index) => (
                      <li key={index}>#{tag}</li>
                    ))}
                  </ul>
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
