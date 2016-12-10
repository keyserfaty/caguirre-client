import h from 'vhtml'

import PostContainer from './views/Post/PostContainer'
import PostsListsContainer from './views/PostsList/PostsListsContainer'

import data from './async'
import { redirect } from './helpers'

const routes = {
  '/': () => <PostsListsContainer data={data} />,
  '/posts': () => <PostsListsContainer data={data} />,
  '/post': () => <PostContainer data={data} />
}

const root = document.querySelector('.root')

window.addEventListener('load', () =>
  redirect(root, routes)
)

window.addEventListener('hashchange', () =>
  redirect(root, routes)
)
