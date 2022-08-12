
import styles from './TasksInfos.module.css'

export function TasksInfos(){
    return(
        <>
            <div className={styles.flexWrapper}>
                <div className={styles.info}>Taferas criadas<span className={styles.circle}>0</span></div>
                <div>Concluidas<span className={styles.circle}>0</span></div>
            </div>
        </>
    )
}