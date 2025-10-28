import { useEffect, useState } from 'react'
import './App.css'
import Dashboard from './components/Dashboard'
import TaskBoard from './components/TaskBoard'
import NavBar from './components/NavBar'
import SideNav from './components/SideNav'
import MobileSideNav from './components/MobileSideNav'
import TaskCard from './components/TaskCard'

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('todoTasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Save tasks to localStorage whenever tasks state changes
  useEffect(() => {
    localStorage.setItem('todoTasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (taskData) => {
    const newTask ={
      id: Date.now(),
      ...taskData,
      completed: false
    }
    console.log("Task added to App:", newTask);
    setTasks(prevTasks => [...prevTasks, newTask]);
  }
 const toggleTaskComplete = (taskId) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };
  
  const deleteTask = (taskId) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  };

  const clearAllTasks = () => {
    setTasks([]);
    localStorage.removeItem('todoTasks');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-gray-900">
      {/* Desktop Sidebar - hidden on mobile */}
      <SideNav />
      
      {/* Mobile Sidebar */}
      <MobileSideNav 
        isOpen={isMobileMenuOpen} 
        onClose={closeMobileMenu} 
      />
      
      <div className="flex-1 flex flex-col min-w-0">
        <NavBar 
          onAddTask={addTask} 
          onToggleMobileMenu={toggleMobileMenu}
        />
        <TaskBoard 
          tasks={tasks}
          onToggleComplete={toggleTaskComplete}
          onDeleteTask={deleteTask}
          onClearAll={clearAllTasks}
        />
      </div>
    </div>
  )
}

export default App
