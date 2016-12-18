import h from 'vhtml'
import Post from './Post'
import Footer from '../../common/Footer'
import Aside from '../../common/Aside'

const PostContainer = props => {
  const route = location.hash.split('/')[2]
  const data = props.data.filter(file => file.fileName === '/' + route)[0]
  return (
    <span>
    <header />
    <section class="container">
      <Aside data=""/>
      <Post data={data} />
    </section>
    <Footer data=""/>
  </span>
  )
}

export default PostContainer
