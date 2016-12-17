import h from 'vhtml'
import Footer from '../../common/Footer'
import Aside from '../../common/Aside'

const PostListsContainer = props => {
  return (
    <span class="list">
      { props.data.map(post => (
        <div class="post">
          <a href={`#/post${post.fileName}`}>
            <h1 data-label={post.fileName}>
              {post.title}
            </h1>
          </a>
          <span class="source"><a href={`http://www.lanacion.com${post.fileName}`}>La Nación</a></span>
        </div>
      )) }
    </span>
  )
}

export default PostListsContainer
