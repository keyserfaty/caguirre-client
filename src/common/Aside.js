import h from 'vhtml'

let top

window.addEventListener('load', () => {
  const d = document
  top = d.querySelector('.top')
})

top.addEventListener('click', () => {
  window.scrollTo(0, 0)
})

const Aside = prop => (
  <aside>
    <div class='top'></div>
    <a href='#/posts'>
      <div class='menu'></div>
    </a>
  </aside>
)

export default Aside
