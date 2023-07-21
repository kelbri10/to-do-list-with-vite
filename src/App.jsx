import { useState } from 'react'
import Form from './Tasks'
import './App.css'

function App() {
  const [task, setTask] = useState(''); 

  const [taskList, setTaskList] = useState([]); 
  return (
    <>
      <h1>To Do List </h1>

      <Tasks />
    </>
  )
}

export default App
