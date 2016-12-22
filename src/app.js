import h from 'vhtml'
import * as events from './events'

import router from 'vrouter'

import Layout from './views/Layout'
import PostContainer from './views/Post/PostContainer'
import PostsListsContainer from './views/PostsList/PostsListsContainer'

let data = document.querySelector('#content')
data = JSON.parse(data.innerHTML.split('`')[1])

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
