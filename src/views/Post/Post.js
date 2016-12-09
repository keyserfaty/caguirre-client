import h from 'vhtml'
import { splitContent } from '../../helpers'

const Post = props => {
  const { title, content } = props.data
  return (
    <article>
      <h1>{title}</h1>
      {splitContent(content).map(p => <p>{p}</p>)}
    </article>
  )
}

export default Post
