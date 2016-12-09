import h from 'vhtml'

import PostContainer from './views/Post/PostContainer'
import PostsListsContainer from './views/PostsList/PostsListsContainer'

import { data } from './async'

const routes = {
  'posts': <PostsListsContainer data='' />,
  'post': <PostContainer data={data} />
}

window.addEventListener('hashchange', function (e) {
  const root = document.querySelector('.root')
  const route = location.hash.slice(2)

  if (routes.hasOwnProperty(route)) {
    root.innerHTML = routes[route]
  }
})
