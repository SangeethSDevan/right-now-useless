import React, { useEffect, useState } from 'react'
import { attach} from '../assets/assets';
import Card from './Card';
import { startCounting } from '../utils/Counter';

function Todo() {
    const [task, setTask] = useState("");
    const [todos, setTodos] = useState([
        {
            id: 1,
            name: "Buy Milk"
        },
        {
            id: 2,
            name: "Buy Bread"
        }
    ]);

    useEffect(()=>{
        startCounting()
    },[])
  return (  
    <div>
            <p>Todo</p>
            <input type="text"  value={task} onChange={(event)=>setTask(event.target.value)}/>
            <button>
                <img src={attach} alt="Add" onClick={()=>{
                    setTodos([...todos, {id: todos.length + 1, name: task}]);
                    setTask("");
                }}/>
            </button>
            {todos.map(todo=><Card key={todo.id} name={todo.name}/>)}
    </div>
  )
}

export default Todo