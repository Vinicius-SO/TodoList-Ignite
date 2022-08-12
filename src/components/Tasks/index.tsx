import { TaskListEmpty } from "../TaskListEmpty";
import { TasksInfos } from "../TasksInfos";
import styles from "./Tasks.module.css"
export function Tasks(){
    return (
        <>
            <div className={styles.wrapper}>
                <TasksInfos />
                <TaskListEmpty/>
            </div>
        </>
    )
}