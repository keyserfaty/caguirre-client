import h from 'vhtml'
import Footer from '../common/Footer'
import Aside from '../common/Aside'

const Layout = props => {
  console.log(props)
  return (
    <span>
      <section class="container">
        <Aside data="" />
      </section>
      <Footer data=""/>
    </span>
  )
}

export default Layout
