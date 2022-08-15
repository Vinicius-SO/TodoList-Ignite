import { Trash } from "phosphor-react";

import styles from './TaskItem.module.css'

export function TaskItem(){
    return(
        <div className={styles.container}>
            <input id=''type="checkbox" />
            <label htmlFor=''>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.</label>
            <button>
                <Trash size={20}/>
            </button>
        </div>
    )   
}