import './App.css';
import TodoList from './components/TodoList';
import AddCircleIcon from '@atlaskit/icon/glyph/add-circle';
import styled, { css } from 'styled-components';
import Button from '@atlaskit/button/standard-button';
import { useCallback, useState, useEffect } from 'react';
import { v4 } from 'uuid';

const TODO_APP_STORAGE_KEY = 'TODO_APP';

function App() {
    const [todoList, setTodoList] = useState([]);

    useEffect(() => {
      const storagedTodoList = localStorage.getItem(TODO_APP_STORAGE_KEY);
    // const storagedTodoList = '';
      if(storagedTodoList) {
        setTodoList(JSON.parse(storagedTodoList));
      }
    }, []);

    useEffect(() => {
      localStorage.setItem(TODO_APP_STORAGE_KEY, JSON.stringify(todoList));
    }, [todoList]);

    const onAddBtnClick = useCallback((e) => {
        setTodoList([...todoList, { id: v4(), name: '', isCompleted: false, isEdited: false }]);
    }, [todoList]);

    const onCheckBtnClick = useCallback((id) => {
        setTodoList(prevState => prevState.map(todo => todo.id === id ? {...todo, isCompleted: (todo.isCompleted ? false : true) } : todo))
    }, []);

    const onInputComlpeted = useCallback((id) => {
        setTodoList(prevState => prevState.map(todo => todo.id === id ? {...todo, isEdited: true } : todo))
    }, []);
    const onInputStartEditor = useCallback((id) => {
      setTodoList(prevState => prevState.map(todo => todo.id === id ? {...todo, isEdited: false } : todo))
    }, []);
    
    const onTaskChange = useCallback((id, name) => {
        setTodoList(prevState => prevState.map(todo => todo.id === id ? {...todo,  name: name } : todo))
    });
    
    return (
        <>
        <h2>Checkliste Hochzeit</h2>
        
        <Button
            className="btn-add"
            onClick = { onAddBtnClick } >
            <AddCircleIcon size='xlarge' primaryColor='#00f' />
        </Button>
        <TodoList todoList = { todoList }
        onCheckBtnClick = { onCheckBtnClick }
        onInputComlpeted = {onInputComlpeted}
        onTaskChange = {onTaskChange}
        onInputStartEditor={onInputStartEditor} />
        </>
    );
}

export default App;