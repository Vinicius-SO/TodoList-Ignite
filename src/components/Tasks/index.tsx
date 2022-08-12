import { TaskList, Todo } from "../TaksList";
import { TaskItem } from "../TaskItem";
import { TaskListEmpty } from "../TaskListEmpty";
import { TasksInfos } from "../TasksInfos";
import styles from "./Tasks.module.css"

const ToDoList:Array<Todo> = [
    {
        id: 1,
        content: 'Lavar a louça',
        isCompleted: false
    },
    {
        id: 2,
        content: 'Passar a roupa',
        isCompleted: true
    },
    {
        id: 3,
        content: 'Fazer a Comida',
        isCompleted: true
    },

]

export function Tasks(){
    return (
        <>
            <div className={styles.wrapper}>
                <TasksInfos createdTasksAmount={ToDoList.length} />
                {ToDoList.length !== 0 ? <TaskList tasks={ToDoList}/> : <TaskListEmpty/>}
            </div>
        </>
    )
}