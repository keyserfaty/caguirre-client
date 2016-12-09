import h from 'vhtml'

import PostContainer from './views/Post/PostContainer'
import PostsListsContainer from './views/PostsList/PostsListsContainer'

import { data } from './async'
import { redirect } from './helpers'

const routes = {
  'posts': <PostsListsContainer data='' />,
  'post': <PostContainer data={data} />
}

const root = document.querySelector('.root')

if (location.hash === '') {
  root.innerHTML = routes.posts
} else {
  redirect(root, routes)
}

window.addEventListener('hashchange', function () {
  redirect(root, routes)
})
