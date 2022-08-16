import { Background } from './components/Background'
import { Header } from './components/Header'
import styles from './App.module.css'
import { Tasks } from './components/Tasks'

function App() {
  return (
    <>
      <Background/>
      <main className={styles.main}>
        <Header/>
        <Tasks />
      </main>
    </>
  )
}

export default App
