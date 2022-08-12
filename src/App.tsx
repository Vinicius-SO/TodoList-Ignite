import * as React from 'react'
import { Background } from './components/Background'
import { Header } from './components/Header'
import styles from './App.module.css'
import { CreateTask } from './components/CreateTask'
import { Tasks } from './components/Tasks'

function App() {
  return (
    <>
      <Background/>
      <main className={styles.main}>
        <Header/>
        <CreateTask/>
        <Tasks />
      </main>
    </>
  )
}

export default App
