import styles from './Sidebar.module.scss'

export function Sidebar () {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://robohash.org/asd"
      />
    
      <div className={styles.profile}>
        <strong>Eduardo</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          Editar perfil
        </a>
      </footer>
    </aside>
  )
}