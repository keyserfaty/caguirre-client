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

const Container = props => {
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

export default Container
