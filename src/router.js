import h from 'vhtml'

//* Helper functions
const ifElse = (i, e) =>
  cond => cond ? i : e

const layoutWrapper = (layout, component) =>
  ifElse(h(layout(), null, h(component())), component())

//* Handle content to be displayed in the view
const redirect = (root, routes) => {
  const route = location.hash.split('/')[1]

  const hasLayout = routes.hasOwnProperty('layout') // Did user defined a layout on router?
  const hasIndexRedirect = routes.hasOwnProperty('indexRedirect') // Did user defined an indexRedirect on router?

  const isIndex = (i, e) => ifElse(i, e)(route === '')

  //* Handle component to be attached to the root component
  root.innerHTML = layoutWrapper(
    routes.layout,
    isIndex(
      ifElse(routes.indexRedirect, '')(hasIndexRedirect),
      routes[route]
    )
  )(hasLayout)
}

/**
 * Router fn
 * @param root: DOM node: element to append components to
 * @param routes: Object: routes object
 */
export const router = (root, routes) => {
  window.addEventListener('load', () => {
    redirect(root, routes)
  }, false)

  window.addEventListener('hashchange', () => {
    redirect(root, routes)
  }, false)
}
