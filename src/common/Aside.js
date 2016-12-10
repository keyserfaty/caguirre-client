import h from 'vhtml'

window.addEventListener('load', () => {
  const d = document
  const top = d.querySelector('.top') // horrible bug here
})

top.onclick = () => { // horrible bug here
  window.scrollTo(0, 0)
}

const Aside = prop => (
  <aside>
    <div class='top'></div>
    <a href='#/posts'>
      <div class='menu'></div>
    </a>
  </aside>
)

export default Aside
