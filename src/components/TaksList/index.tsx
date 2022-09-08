import { TaskItem } from "../TaskItem"
import styles from "./TaskList.module.css"

export interface Todo{
    id:string
    content:string
    isCompleted: boolean
}

interface TaskListProps{
    tasks: Todo[]
    isCompleteChange:(id:string)=>void
    deleteTask:(id:string)=>void
}

export function TaskList({ tasks, isCompleteChange, deleteTask}:TaskListProps){
    return(
        <div className={styles.wrapper}>
            {
                tasks.map(task=>{
                    return(
                        <TaskItem
                         id={task.id}
                         content={task.content}
                         isCompleted={task.isCompleted}
                         isCompleteChange={isCompleteChange}
                         deleteTask={deleteTask}
                        />
                    )
                })
            }
        </div>
    )
} 