import h from 'vhtml'
import * as events from './events'

import PostContainer from './views/Post/PostContainer'
import PostsListsContainer from './views/PostsList/PostsListsContainer'

import data from './content.json'

export const routes = {
  '/': () => <PostsListsContainer data={data.content} />,
  '/posts': () => <PostsListsContainer data={data.content} />,
  '/post': () => <PostContainer data={data.content} />
}
