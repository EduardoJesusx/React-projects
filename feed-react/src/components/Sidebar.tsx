import styles from './Sidebar.module.scss'
import { PencilLine } from 'phosphor-react'

export function Sidebar () {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover} 
        src="https://images.unsplash.com/photo-1675629172984-adaffe2ad47e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        
      />
    
      <div className={styles.profile}>

      <img src="" alt="" />
        <img className={styles.avatar} src="https://robohash.org/asd"/>
        
        <strong>Eduardo</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20}/>
          Editar perfil
        </a>
      </footer>
    </aside>
  )
}