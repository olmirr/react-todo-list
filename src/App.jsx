import { useState, useEffect } from 'react'
import './styles.css'
import NewTodoForm from "./NewTodoForm.jsx";
import TodoList from "./TodoList.jsx";
function App() {

    const [todos, setTodos] = useState(() => {
        const localValue = localStorage.getItem('todo-list')
        if (localValue == null) return [];
        return JSON.parse(localValue)
    })
    useEffect(() => localStorage.setItem('todo-list', JSON.stringify(todos)), [todos])

    function addTodo(title) {
        setTodos(currentTodos => {
            return [...currentTodos, {id: crypto.randomUUID(), title, completed: false}]
        })
    }
    function toggleTodo(id, completed) {
        setTodos(currentTodos => {
                return currentTodos.map(todo => {
                    if (todo.id === id) return {...todo, completed};
                    return todo;
                })
            }
        )
    }
    function deleteTodo(id) {
        setTodos(currentTodos => {
            return currentTodos.filter(todo => todo.id !== id)
        })
    }
    return (
        <>
        <NewTodoForm onSubmit={addTodo}/>
        <h1 className={'header'}>Todo List</h1>
        <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo}/>
        </>
    )
}

export default App
