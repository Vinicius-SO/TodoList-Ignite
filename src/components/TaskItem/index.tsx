import { Trash } from "phosphor-react";

import styles from './TaskItem.module.css'

export function TaskItem(){
    return(
        <div className={styles.container}>
            <input type="checkbox" />
            <span>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</span>
            <Trash />
        </div>
    )   
}