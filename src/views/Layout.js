import h from 'vhtml'
import Footer from '../common/Footer'
import Aside from '../common/Aside'

const Layout = props => {
  return (
    <span>
      <section class="container">
        <Aside data="" />
        { props.children[0] }
      </section>
      <Footer data=""/>
    </span>
  )
}

export default Layout
