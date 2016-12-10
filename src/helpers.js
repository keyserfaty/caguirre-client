export const splitContent = content => content.split('\n')

export const redirect = (root, routes) => {
  const route = location.hash.slice(2)

  if (route.includes('post') && route !== 'posts') {
    root.innerHTML = routes.post()
  }

  if (route.includes('posts')) {
    root.innerHTML = routes.posts()
  }
}

export const readBarWidth = (scrollPosition, windowHeight) => {
  if (windowHeight > 0) {
    return scrollPosition * 100 / windowHeight
  } else {
    return 0
  }
}
