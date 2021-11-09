import React from 'react'
import Todo from './Todo';

export default function TodoList({ todoList, onCheckBtnClick, onInputComlpeted, onTaskChange, onInputStartEditor }) {
    return (
    <>
        {
            todoList.map((todo) => ( <
                Todo key = { todo.id }
                todo = { todo }
                onCheckBtnClick = { onCheckBtnClick }
                onInputComlpeted = {onInputComlpeted}
                onTaskChange = {onTaskChange}
                onInputStartEditor = {onInputStartEditor}
                />
            ))
        }
    </>
    )
}