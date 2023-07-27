import React, { useState } from 'react'
import TodoInput from './TodoInput'
import TodoTask from './TodoTask'

export default function Todo() {
    // 1. Props : Component гаднаас орж ирж байгаа утга
    let tasks = []
    const [taskList, setTaskList] = useState(tasks)
    // 2. State: Компонентийн төлөв
    const [title, setTitle] = useState("TODOS")


    const onPressAdd = (text) => {
        console.log("onPressAdd clicked", text);
        setTaskList([...taskList, { text }])
    }
    const onPressDelete = (text) => {
        console.log("Delete clicked", text);
        const newList = taskList.filter(task => task.text !== text)
        console.log("newlist", newList)
        setTaskList([...newList])
    }
    return (
        <div className='todo-container'>
            <h1>{title}</h1>
            <TodoInput onPressAdd={onPressAdd} />
            {
                taskList.map((task) => {
                    return <TodoTask onPressDelete={onPressDelete} data={task} too1={200} />
                })
            }
        </div>
    );
}
