import React from 'react'
import { useState } from 'react';
import TaskModal from './TaskModal';

const NavBar = ({onAddTask, onToggleMobileMenu}) => {
    const [isModalOpen,setIsModalOpen] = useState(false);
    const createTask = () => {
       setIsModalOpen(true);
    }
    const closeModal = ()=>{
      setIsModalOpen(false); 
    }
    const handleTaskCreate = (taskData) => {
        console.log("New Task Data:", taskData);
        // Here you would typically handle the new task data,
        // e.g., send it to a backend or update global state
         onAddTask(taskData); 
         closeModal();
    }
  return (
    <div>
        <header className='flex items-center justify-between p-3 sm:p-4 bg-gray-900 border-b border-gray-800 shadow-lg'>
            {/* Mobile menu button - visible on small screens */}
            <div className="flex items-center space-x-3">
                <button 
                    onClick={onToggleMobileMenu}
                    className="lg:hidden p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 transition duration-150"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
                <div className='text-xl sm:text-2xl font-bold text-white tracking-wider'>TodoFlow</div>
            </div>

            {/* Search bar - hidden on mobile, visible on md+ */}
            <div className="relative w-1/3 max-w-md hidden md:block">
                <input type="text" placeholder='Search...' className="w-full py-2 pl-10 pr-4 text-gray-200 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:border-transparent" /> 
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier"> 
                            <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#007a55" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> 
                        </g>
                    </svg>
                </div>
            </div>

            {/* Right side buttons */}
            <div className="flex items-center space-x-2 sm:space-x-4">
                <button onClick={createTask} className="px-2 py-2 sm:px-4 text-xs sm:text-sm font-semibold text-gray-900 bg-emerald-700 rounded-lg shadow-md hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:ring-opacity-50 transition duration-150 ease-in-out">
                    <span className="hidden sm:inline">+New Task</span>
                    <span className="sm:hidden">+</span>
                </button>
                <button className='flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-emerald-700 text-white font-medium hover:bg-emerald-500 hover:ring-2 hover:ring-emerald-500 hover:ring-offset-2 hover:ring-offset-gray-900 transition duration-150 ease-in-out text-sm'>JD</button>
            </div>
        </header>
                  {/* Modal */}
            {isModalOpen && (
                <TaskModal 
                    isOpen={isModalOpen} 
                    onClose={closeModal} 
                    onSubmit={handleTaskCreate}
                />
            )}
    </div>
  )
}

export default NavBar