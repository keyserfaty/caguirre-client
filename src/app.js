import h from 'vhtml'
import * as events from './events'

import { router } from './router'

import Layout from './views/Layout'
import PostContainer from './views/Post/PostContainer'
import PostsListsContainer from './views/PostsList/PostsListsContainer'

import data from './content.json'

router(
  {
    indexRedirect: 'posts',
    'posts': () => (
      <Layout>
        <PostsListsContainer data={data.content} />
      </Layout>
    ),
    'post': () => (
      <Layout>
        <PostContainer data={data.content} />
      </Layout>
    )
  },
  document.querySelector('.root')
)
