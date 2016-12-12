import { readBarWidth, redirect } from './helpers'
import { routes } from './app'

const d = document

d.addEventListener('click', (e) => {
  if (e.target.classList.contains('top')) {
    window.scrollTo(0, 0)
  }

  if (e.target.classList.contains('menu')) {
    // console.log('menu clicked!')
  }
}, false)

window.addEventListener('scroll', () => {
  const header = d.querySelector('header')

  if (!header) return

  const fullHeight = d.body.scrollHeight - d.body.clientHeight
  const scrollPosition = window.pageYOffset

  header.setAttribute('style', 'width: ' + readBarWidth(scrollPosition, fullHeight) + '%')
}, false)

window.addEventListener('load', () => {
  const root = d.querySelector('.root')
  redirect(root, routes)
}, false)

window.addEventListener('hashchange', (e) => {
  const root = d.querySelector('.root')
  redirect(root, routes)
}, false)
