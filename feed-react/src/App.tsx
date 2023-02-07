import { Header } from './components/Header'
import { Post } from './components/Post'
import './components/global.scss'

import styles from './App.module.scss'
import { Sidebar } from './components/Sidebar'

export function App() {
 
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post/>
        </main>
      </div>
    </div>
  )
}