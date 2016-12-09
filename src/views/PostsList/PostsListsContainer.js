import h from 'vhtml'
import Footer from '../../common/Footer'
import Aside from '../../common/Aside'

const PostListsContainer = props => {
  return (
    <span>
      <section class="container">
        <Aside data="" />
        <span class="list">
          { props.data.map(post => (
            <div class="post">
              <a href={`#/post${post.fileName}`}>
                <h1 data-label={post.fileName}>
                  {post.title}
                </h1>
              </a>
              <span class="source">La Nación</span>
            </div>
          )) }
        </span>
      </section>
      <Footer data=""/>
    </span>
  )
}

export default PostListsContainer
