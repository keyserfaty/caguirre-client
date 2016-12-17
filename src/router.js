import { routes } from './app'

const d = document

export const redirect = (root, routes) => {
  const route = location.hash.split('/')[1]

  //* Handle redirect to index
  if (route === '' && routes.hasOwnProperty('indexRedirect')) {
    root.innerHTML = routes.indexRedirect()
    return
  }

  //* Handle routing if there is a layout present
  if (routes.hasOwnProperty('layout')) {
    root.innerHTML = routes.layout(routes[route])
    return
  }

  root.innerHTML = routes[route]()
}

window.addEventListener('load', () => {
  const root = d.querySelector('.root')
  redirect(root, routes)
}, false)

window.addEventListener('hashchange', (e) => {
  const root = d.querySelector('.root')
  redirect(root, routes)
}, false)
