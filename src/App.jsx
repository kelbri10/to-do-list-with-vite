import { useState } from 'react'
import Form from './Form'
import './App.css'

function App() {
  const [task, setTask] = useState(''); 

  const [taskList, setTaskList] = useState([]); 
  return (
    <>
      <h1>To Do List </h1>

      <Form />
    </>
  )
}

export default App
