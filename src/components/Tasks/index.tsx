import { useState } from "react";
import { CreateTask } from "../CreateTask";
import { TaskList, Todo } from "../TaksList";
import { TaskItem } from "../TaskItem";
import { TaskListEmpty } from "../TaskListEmpty";
import { TasksInfos } from "../TasksInfos";
import styles from "./Tasks.module.css"


export function Tasks(){

    const [todoList, setTodoList] = useState<Todo[]>([
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
      
    ])


    const completedItens = todoList.reduce((acc:number, Todo:Todo) => {
        if (Todo.isCompleted){
            return acc + 1
        }
        return acc + 0
    },0);
      
    console.log(`completedItens: ${completedItens}`)

    function handleCreateNewTodo(todo:string){
        setTodoList((state)=>{
            return [...state, {
                id: state.length + 1,
                content: todo,
                isCompleted:false,
            }]
        })
    }

    function handleCompleteStatusChange(id:number){
        const mutableTodoList = [...todoList]
        console.log(mutableTodoList)
        const todoItem = mutableTodoList.find(item=> item.id == id)
        todoItem!.isCompleted = !todoItem!.isCompleted 
        // console.log(mutableTodoList)
        
        setTodoList([...mutableTodoList])
    }

    return (
        <>
        <CreateTask createNewTodo={handleCreateNewTodo}/>
            <div className={styles.wrapper}>
                <TasksInfos createdTasksAmount={todoList.length} completedTasks={completedItens} />
                {todoList.length !== 0 ? <TaskList isCompleteChange={handleCompleteStatusChange} tasks={todoList} /> : <TaskListEmpty/>}
            </div>
        </>
    )
}