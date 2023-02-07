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
          <Post 
          author="teste " 
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit suscipit nam aliquid voluptate aperiam architecto rem at eveniet porro eligendi, quibusdam natus quasi reiciendis molestiae asperiores dolor veniam debitis quidem"
          />
          <Post 
          author="teste " 
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit suscipit nam aliquid voluptate aperiam architecto rem at eveniet porro eligendi, quibusdam natus quasi reiciendis molestiae asperiores dolor veniam debitis quidem"
          />
          <Post 
          author="teste " 
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit suscipit nam aliquid voluptate aperiam architecto rem at eveniet porro eligendi, quibusdam natus quasi reiciendis molestiae asperiores dolor veniam debitis quidem"
          />
        </main>
      </div>
    </div>
  )
}