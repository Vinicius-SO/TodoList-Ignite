import { Trash } from "phosphor-react";
import { Todo } from "../TaksList";

import styles from './TaskItem.module.css'

interface TaskItemProps extends Todo{
    isCompleteChange:(id:number)=>void
}

export function TaskItem({ content, id, isCompleted, isCompleteChange }:TaskItemProps){
    function handleCheckBoxChange(){
        isCompleteChange(id)
    }
    return(
        <div className={styles.container}>
            <input onChange={handleCheckBoxChange} checked={isCompleted} id={id.toString()}type="checkbox" />
            <label htmlFor={id.toString()}>{content}</label>
            <button>
                <Trash size={20}/>
            </button>
        </div>
    )   
}