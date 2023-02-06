import React, {useState} from 'react';
import "./App.css";
import AddTaskForm from './components/AddTaskForm';
import Header from './components/Header';
import TaskList from './components/TaskList';

const App = () => {
    const [tasks, setTasks] = useState([
        {id: "task_1", title: "Learn React", status: 0},
        {id: "task_2", title: "Code a Todo List", status: 0}
    ])
    const [showIncomplete, setShowIncomplete] = useState();
    const [newTask, setNewTask] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if (newTask) {
            const task = {
                id: Date.now(),
                title: newTask,
                status: 0,
            };
            setTasks([...tasks, task]);
            setNewTask("");
        }
    }

    const handleInputChange = (e) =>{
        setNewTask(e.target.value);
    }

    const setTaskStatus = (taskId, status) => {
        setTasks(tasks.map(task => {
            if (task.id === taskId) {
                return {...task, status: status ? 1 : 0};
            }
            return task;
        }))
    }

    const removeTask = (taskId) => {
        setTasks(tasks.filter((task) => task.id !== taskId));
    }
  return (
    <div className ="container">
        <Header title="Todo List" subTitle="Get things done" />
        <TaskList 
        tasks={tasks} 
        showIncomplete={showIncomplete} 
        setTaskStatus={setTaskStatus} 
        removeTask={removeTask}
        setShowIncomplete={setShowIncomplete}
        />

       <AddTaskForm 
       newTask={newTask} 
       handleInputChange={handleInputChange} 
       handleSubmit={handleSubmit}
       />
    </div>
  )
}

export default App