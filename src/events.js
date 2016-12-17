import { readBarWidth } from './helpers'

const d = document

d.addEventListener('click', (e) => {
  if (e.target.classList.contains('top')) {
    window.scrollTo(0, 0)
  }

  if (e.target.classList.contains('menu')) {
    const menu = d.querySelector('.menu')
    menu.classList.toggle('toggle-menu')
  }
}, false)

window.addEventListener('scroll', () => {
  const header = d.querySelector('header')

  if (!header) return

  const fullHeight = d.body.scrollHeight - d.body.clientHeight
  const scrollPosition = window.pageYOffset

  header.setAttribute('style', 'width: ' + readBarWidth(scrollPosition, fullHeight) + '%')
}, false)
