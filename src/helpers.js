export const splitContent = content => content.split('\n')

export const redirect = (root, routes) => {
  const route = location.hash.slice(2)

  if (routes.hasOwnProperty(route)) {
    root.innerHTML = routes[route]
  }
}

export const readBarWidth = (scrollPosition, windowHeight) => {
  if (windowHeight > 0) {
    return scrollPosition * 100 / windowHeight
  } else {
    return 0
  }
}
