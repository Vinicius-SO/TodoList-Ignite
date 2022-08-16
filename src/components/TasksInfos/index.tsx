
import styles from './TasksInfos.module.css'


interface TasksInfosPorps{
    createdTasksAmount:number,
    completedTasks:number
}

export function TasksInfos({createdTasksAmount, completedTasks}:TasksInfosPorps){
    console.log(createdTasksAmount)
    return(
        <>
            <div className={styles.flexWrapper}>
                <div className={styles.info}>Taferas criadas<span className={styles.circle}>{createdTasksAmount}</span></div>
                <div>Concluidas<span className={styles.circle}>{completedTasks} de {createdTasksAmount}</span></div>
            </div>
        </>
    )
}