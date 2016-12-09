import h from 'vhtml'
import Post from './Post'
import Footer from '../../common/Footer'
import Aside from '../../common/Aside'

import { readBarWidth } from '../../helpers'

let header
let d

window.addEventListener('load', () => {
  d = document
  header = d.querySelector('header')
})

window.addEventListener('scroll', () => {
  const fullHeight = d.body.scrollHeight - d.body.clientHeight
  const scrollPosition = window.pageYOffset
  header.setAttribute('style', 'width: ' + readBarWidth(scrollPosition, fullHeight) + '%')
})

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
