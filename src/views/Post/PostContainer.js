import h from 'vhtml'
import Post from './Post'
import Footer from '../../common/Footer'
import Aside from '../../common/Aside'

let header

window.addEventListener('load', () => {
  const d = document
  header = d.querySelector('header') //* Ugly but works
})

let readBarWidth = (scrollPosition, windowHeight) => {
  if (windowHeight > 0) {
    return scrollPosition * 100 / windowHeight
  } else {
    return 0
  }
}

window.addEventListener('scroll', () => {
  const fullHeight = document.body.scrollHeight - document.body.clientHeight
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
