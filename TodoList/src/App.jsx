import { useEffect, useState } from 'react'
import './App.css'
import Dashboard from './components/Dashboard'
import NavBar from './components/NavBar'
import SideNav from './components/SideNav'
import TaskCard from './components/TaskCard'

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('todoTasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  
  // Save tasks to localStorage whenever tasks state changes
  useEffect(() => {
    localStorage.setItem('todoTasks', JSON.stringify(tasks));
  }, [tasks]);
  
  const addTask = (taskData) => {
    console.log("Task added to App:", taskData);
    setTasks([...tasks, taskData]);
  }
  // const toggleTaskComplete = (taskId) => {
  //   setTasks(tasks.map((task, index) => 
  //     index === taskId ? {...task, completed: !task.completed} : task
  //   )); 
  // }
  // const deleteTask = (taskId) => {
  //   setTasks(tasks.filter((_, index) => index !== taskId));
  // }

  return (
    <>
      <div className="h-screen bg-gray-900">

        <NavBar onAddTask={addTask} />
        <Dashboard
          tasks={tasks}
          // onToggleComplete={toggleTaskComplete}
          // onDeleteTask={deleteTask}
        />
      </div>
    </>
  )
}

export default App
