import h from 'vhtml'
import * as events from './events'

import { router } from './router'

import Layout from './views/Layout'
import PostContainer from './views/Post/PostContainer'
import PostsListsContainer from './views/PostsList/PostsListsContainer'

import data from './content.json'

router(
  document.querySelector('.root'),
  {
    layout: () => <Layout data={data.content} />,
    indexRedirect: () => <PostsListsContainer data={data.content} />,
    'posts': () => <PostsListsContainer data={data.content} />,
    'post': () => <PostContainer data={data.content} />
  }
)
