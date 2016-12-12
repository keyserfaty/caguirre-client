import h from 'vhtml'
import * as events from './events'

import PostContainer from './views/Post/PostContainer'
import PostsListsContainer from './views/PostsList/PostsListsContainer'

import data from './async'

export const routes = {
  '/': () => <PostsListsContainer data={data} />,
  '/posts': () => <PostsListsContainer data={data} />,
  '/post': () => <PostContainer data={data} />
}
