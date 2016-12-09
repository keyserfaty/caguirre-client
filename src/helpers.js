export const splitContent = content => content.split('\n')

export const redirect = (root, routes) => {
  const route = location.hash.slice(2)

  if (routes.hasOwnProperty(route)) {
    root.innerHTML = routes[route]
  }
}
