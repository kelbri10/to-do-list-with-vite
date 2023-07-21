import { useState } from "react";

const Form = () => { 
    const [task, setTask] = useState(''); 

    const [taskList, setTaskList] = useState([]); 

    const handleSubmit = (e) => { 
        e.preventDefault(); 

        setTaskList([...taskList, task]); 
        console.log(taskList); 
        setTask(''); 
    }

    const deleteTask = (t) => {
        setTaskList( taskList.filter(task => task !== t));  
    }
    
    return(
        <>
            <form onSubmit={handleSubmit}>
                <input type='text'
                placeholder='Task Goes Here...' 
                value={task}
                onChange={e => setTask(e.target.value)}
                />

                <button type='submit'>Add Task</button>
            </form>

            <ul>    
                {taskList.map(task =>
                    <>
                        <li key={task}>{task}</li>
                        <button onClick={() => deleteTask(task)}>delete</button>
                    </>
                )}
            </ul>
        </>
    )
}

export default Form; 