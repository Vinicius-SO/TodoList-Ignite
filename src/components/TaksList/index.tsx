import { TaskItem } from "../TaskItem"
import styles from "./TaskList.module.css"

export interface Todo{
    id:number
    content:string
    isCompleted: boolean
}

interface TaskListProps{
    tasks: Todo[]
}

export function TaskList({ tasks }:TaskListProps){
    return(
        <div className={styles.wrapper}>
            {
                tasks.map(task=>{
                    return(
                        <TaskItem task={task}/>
                    )
                })
            }
        </div>
    )
} 