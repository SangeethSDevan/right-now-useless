import './App.css'
import Todo from './Components/Todo'
import { useState } from 'react'

function App() {

  const [task, setTask] = useState("nothing");

  return (
    <div className="App">
      <h2 className='head'>Right now?</h2>
      <div className='sts'>
        <h1 className='doing-task'>You are doing <span>{task}</span> right now!</h1>
      </div>
      <div className='App-hero'>
        <Todo task={setTask}/>
      </div>
      <p className='footer'>* Click on the tile to mark as complete</p>
    </div>
  )
}

export default App
