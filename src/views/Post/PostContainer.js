import h from 'vhtml'
import Post from './Post'
import Footer from '../../common/Footer'
import Aside from '../../common/Aside'

const Container = props => (
  <span>
    <header />
    <section class="container">
      <Aside data=""/>
      <Post data={props.data} />
    </section>
    <Footer data=""/>
  </span>
)

export default Container
