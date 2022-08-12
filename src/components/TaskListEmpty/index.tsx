import clipboard from '../../assets/Clipboard.svg'

import styles from './TaskListEmpty.module.css'

export function TaskListEmpty(){
    return(
        <div className={styles.wrapper}>
            <div>
                <img src={clipboard} alt="" />
            </div>
            <p>Você ainda não tem tarefas cadastradas</p>
            Crie tarefas e organize seus itens a fazer
        </div>
    )
}  