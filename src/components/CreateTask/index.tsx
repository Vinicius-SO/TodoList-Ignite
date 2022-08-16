import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, useState } from 'react'
import { Todo } from '../TaksList'
import styles from './CreateTask.module.css'

interface CreateTaskProsps {
    createNewTodo: (todo:string)=>void
}

export function CreateTask({ createNewTodo }:CreateTaskProsps){

    const [inputValueState, setInputValueState] = useState('')

    const isInputEmpty = inputValueState === ''

    function handleInputValueChange(event:ChangeEvent<HTMLInputElement>){
        // console.log(event.target.value)
        setInputValueState(event.target.value)
    }

    function handleNewTaksCreate(event:FormEvent){
        event.preventDefault()
        createNewTodo(inputValueState)
        setInputValueState('')
        
    }

    return(
        <form onSubmit={handleNewTaksCreate} className={styles.content}>
            <input value={inputValueState}  onChange={handleInputValueChange} placeholder='Adicione uma nova tarefa' />
            <button type="submit" disabled={isInputEmpty}>Criar <PlusCircle weight='bold' size={18} /></button>
        </form>
    )
}