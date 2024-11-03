import React, { useEffect, useState } from 'react'
import { attach } from '../assets/assets';
import Card from './Card';
import { startCounting } from '../utils/counter';
import "./Todo.css"

function Todo(props) {
    const [task, setTask] = useState("");
    const [todos, setTodos] = useState([]);

    const deleteTask = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }
    useEffect(() => {
        startCounting()
    }, [])
    return (
        <div className='Todo'>
            <h2>What's the plan for today?</h2>
            <div className='Todo-hero'>
                <form>
                    <input type="text" placeholder="Any Tasks to Complete?" value={task} onChange={(e) => setTask(e.target.value)} />
                    <button onClick={(e) => {
                        e.preventDefault()
                        setTodos([...todos, { id: todos.length + 1, name: task }]);
                        setTask("");
                    }}>
                        <img src={attach} alt="Add" />
                    </button>
                </form>
            </div>
            {todos.map(todo => <Card key={todo.id} todo={todo} task={props.task} delete={deleteTask} />)}
        </div>
    )
}

export default Todo