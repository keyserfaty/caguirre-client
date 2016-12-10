import h from 'vhtml'
import Post from './Post'
import Footer from '../../common/Footer'
import Aside from '../../common/Aside'

import { readBarWidth } from '../../helpers'

window.addEventListener('scroll', () => {
  const d = document
  const header = d.querySelector('header')

  const route = location.hash.length ? location.hash.slice(2) : '' //* This is ugly
  if (route !== 'posts') {
    const fullHeight = d.body.scrollHeight - d.body.clientHeight
    const scrollPosition = window.pageYOffset

    header.setAttribute('style', 'width: ' + readBarWidth(scrollPosition, fullHeight) + '%')
  }
})

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
