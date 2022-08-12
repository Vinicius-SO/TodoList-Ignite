import { PlusCircle } from 'phosphor-react'
import { FormEvent } from 'react'
import styles from './CreateTask.module.css'

export function CreateTask(){

    function handleNewTaksCreate(event:FormEvent){
        event.preventDefault()
    }

    return(
        <form onSubmit={handleNewTaksCreate} className={styles.content}>
            <input placeholder='Adicione uma nova tarefa' />
            <button type="submit">Criar <PlusCircle weight='bold' size={18} /></button>
        </form>
    )
}