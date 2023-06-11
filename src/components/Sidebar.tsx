import { Avatar } from './Avatar'
import Styles from './Sidebar.module.css'
import { PencilLine } from 'phosphor-react'

export function Sidebar() {
  return (
    <aside className={Styles.sidebar}>

      <img className={Styles.cover} src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50" />

      <div className={Styles.profile}>

        <Avatar src="https://github.com/atilaCSilva.png" />

        <strong>Atila Costa Silva</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}