export const redirect = (root, routes) => { //* This handling is better but could be more generic
  const route = location.hash.length ? location.hash.slice(2) : ''

  if (route === '') {
    root.innerHTML = routes['/posts']()
  }

  if (route.includes('post') && route !== 'posts') {
    root.innerHTML = routes['/post']()
  }

  if (route.includes('posts')) {
    root.innerHTML = routes['/posts']()
  }
}

export const readBarWidth = (scrollPosition, windowHeight) => {
  if (windowHeight > 0) {
    return scrollPosition * 100 / windowHeight
  } else {
    return 0
  }
}
