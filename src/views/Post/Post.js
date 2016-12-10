import h from 'vhtml'

const Post = props => {
  const { content, title } = props.data
  return (
    <article>
      <h1>{title}</h1>
      {content.map(p => <p>{p}</p>)}
    </article>
  )
}

export default Post
