import rocketImg from '../../assets/rocket.svg'
import todoImg from '../../assets/todo.svg'
import styles from './Header.module.css'
export function Header(){
    return(
        <header className={styles.header}>
            <img src={rocketImg} alt="" />
            <img src={todoImg} alt="" />       
        </header>
    )
}