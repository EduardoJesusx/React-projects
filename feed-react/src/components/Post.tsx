import styles from './Post.module.scss'

export function Post() {
  return(
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://robohash.org/asd"/>
          <div className={styles.authorInfo}>
            <strong>Nome</strong>
            <span>Web Development</span>
          </div>
        </div>
        <time dateTime=''></time>
      </header>
      <div className={styles.content}>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga veniam sit officia dolorum repudiandae vel repellendus consequuntur.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga veniam sit officia dolorum repudiandae vel repellendus consequuntur.</p>
        <p><a href='#'> #Lorem ipsum dolor</a></p>
        <p><a href='#'> #Lorem ipsum dolor</a></p>
        <p><a href='#'> #Lorem ipsum dolor</a></p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu comentário</strong>
        <textarea 
          placeholder='Deixe seu comentário'
        />
        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>
    </article>
  )
}