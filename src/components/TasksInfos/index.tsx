
import styles from './TasksInfos.module.css'


interface TasksInfosPorps{
    createdTasksAmount:number
}

export function TasksInfos({createdTasksAmount}:TasksInfosPorps){
    console.log(createdTasksAmount)
    return(
        <>
            <div className={styles.flexWrapper}>
                <div className={styles.info}>Taferas criadas<span className={styles.circle}>{createdTasksAmount}</span></div>
                <div>Concluidas<span className={styles.circle}>0 de {createdTasksAmount}</span></div>
            </div>
        </>
    )
}