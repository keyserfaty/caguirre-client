import { routes } from './app'

const d = document

const ifElse = (i, e) =>
  cond =>
    cond ? i : e

const layoutWrapper = (layout, component) =>
  ifElse(layout(component), component())

export const redirect = (root, routes) => {
  const route = location.hash.split('/')[1]

  const hasLayout = routes.hasOwnProperty('layout') // Did user defined a layout on router?
  const hasIndexRedirect = routes.hasOwnProperty('indexRedirect') // Did user defined an indexRedirect on router?

  const isIndex = (i, e) => ifElse(i, e)(route === '')

  root.innerHTML = layoutWrapper(
    routes.layout,
    isIndex(
      ifElse(routes.indexRedirect, '')(hasIndexRedirect),
      routes[route]
    )
  )(hasLayout)
}

window.addEventListener('load', () => {
  const root = d.querySelector('.root')
  redirect(root, routes)
}, false)

window.addEventListener('hashchange', (e) => {
  const root = d.querySelector('.root')
  redirect(root, routes)
}, false)
