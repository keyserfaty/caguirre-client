import h from 'vhtml'

import PostContainer from './views/Post/PostContainer'
import PostsListsContainer from './views/PostsList/PostsListsContainer'

import data from './async'
import { redirect } from './helpers'

const routes = {
  'posts': () => <PostsListsContainer data={data} />,
  'post': () => <PostContainer data={data} /> //* TODO: this needs to handle dynamic routes otherwise it will display always the same route
}

const root = document.querySelector('.root')

if (location.hash === '') {
  root.innerHTML = routes.posts()
} else {
  redirect(root, routes)
}

window.addEventListener('hashchange', function () {
  const route = location.hash.slice(2)

  if (route.includes('post') && route !== 'posts') {
    root.innerHTML = routes.post()
  }

  if (route.includes('posts')) {
    root.innerHTML = routes.posts()
  }
})
