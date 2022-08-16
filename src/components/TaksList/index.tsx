import { TaskItem } from "../TaskItem"
import styles from "./TaskList.module.css"

export interface Todo{
    id:number
    content:string
    isCompleted: boolean
}

interface TaskListProps{
    tasks: Todo[]
    isCompleteChange:(id:number)=>void
}

export function TaskList({ tasks, isCompleteChange}:TaskListProps){
    return(
        <div className={styles.wrapper}>
            {
                tasks.map(task=>{
                    return(
                        <TaskItem id={task.id} content={task.content} isCompleted={task.isCompleted} isCompleteChange={isCompleteChange} />
                    )
                })
            }
        </div>
    )
} 