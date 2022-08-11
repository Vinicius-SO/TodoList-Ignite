import * as React from 'react'
import { Background } from './components/Background'
import { Header } from './components/Header'
import styles from './App.module.css'

function App() {
  return (
    <>
      <Background/>
      <main className={styles.main}>
        <Header/>
      </main>
    </>
  )
}

export default App
