import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Post, PostType } from './components/Post'

import styles from './App.module.css'
import './global.css'

// author: {avtar_url: "", name: "", role: ""}
//publishedAt: Date
// content: string


const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/atilaCSilva.png",
      name: "Atila Silva ",
      role: "Web Developer & UI/UX Designer"
    },
    content: [
      { type: 'paragraph', content: ' Fala galeraa 👋', },
      { type: 'paragraph', content: ' Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-05-20 20:00')
  },

  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes ",
      role: "CTO da Rocketseat"
    },
    content: [
      { type: 'paragraph', content: ' Fala galeraa 👋', },
      { type: 'paragraph', content: ' Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-06-1 20:00')
  },
];

function App() {

  return (
    <>
      <Header />
      <div className={styles.wrapper}>

        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}


export default App

