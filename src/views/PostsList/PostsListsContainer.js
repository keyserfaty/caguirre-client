import h from 'vhtml'
import Footer from '../../common/Footer'
import Aside from '../../common/Aside'

const postsList = [
  {
    title: 'Todos son mis hijos: detrás del guión como marioneteros invisibles',
    source: 'La Nación',
    label: 'todos-hijos'
  },
  {
    title: 'Sí, yo maté a Pedro',
    source: 'La Nación',
    label: 'pedro'
  },
  {
    title: 'El Chavo y yo',
    source: 'La Nación',
    label: 'chave'
  },
  {
    title: 'No hay nada como hacer llorar para ser buen actor',
    source: 'La Nación',
    label: 'llorar'
  }

]

const PostListsContainer = props => {
  return (
    <span>
      <section class="container">
        <Aside data="" />
        <span class="list">
          { postsList.map(post => (
            <div class="post">
              <a href="#/post">
                <h1 data-label={post.label}>
                  {post.title}
                </h1>
              </a>
              <span class="source">{post.source}</span>
            </div>
          )) }
        </span>
      </section>
      <Footer data=""/>
    </span>
  )
}

export default PostListsContainer
