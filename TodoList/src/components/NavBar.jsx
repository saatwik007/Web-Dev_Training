import React from 'react'
import { useState } from 'react';
import TaskModal from './TaskModal';

const NavBar = ({onAddTask}) => {
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
        <header className='flex items-center justify-between p-4 bg-gray-900 border-b border-gray-800 shadow-lg'>
            <div className='text-2xl font-bold text-white tracking-wider'>TodoFlow</div>
            <div className="relative w-1/3 max-w-md hidden md:block">
            <input type="text" placeholder='Search...' className="w-full py-2 pl-10 pr-4 text-gray-200 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:border-transparent" /> 
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#007a55" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
            {/* <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#00b868"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12.12 12.78C12.05 12.77 11.96 12.77 11.88 12.78C10.12 12.72 8.71997 11.28 8.71997 9.50998C8.71997 7.69998 10.18 6.22998 12 6.22998C13.81 6.22998 15.28 7.69998 15.28 9.50998C15.27 11.28 13.88 12.72 12.12 12.78Z" stroke="#007a55" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M18.74 19.3801C16.96 21.0101 14.6 22.0001 12 22.0001C9.40001 22.0001 7.04001 21.0101 5.26001 19.3801C5.36001 18.4401 5.96001 17.5201 7.03001 16.8001C9.77001 14.9801 14.25 14.9801 16.97 16.8001C18.04 17.5201 18.64 18.4401 18.74 19.3801Z" stroke="#007a55" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#007a55" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg> */}
            </div>
            </div>
            <div className="flex items-center space-x-4">
                <button onClick={createTask} className="px-4 py-2 text-sm font-semibold text-gray-900 bg-emerald-700 rounded-lg shadow-md hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:ring-opacity-50 transition duration-150 ease-in-out">+New Task</button>
                <button className='flex items-center justify-center w-10 h-10 rounded-full bg-emerald-700 text-white font-medium hover:bg-emerald-500 hover:ring-2 hover:ring-emerald-500 hover:ring-offset-2 hover:ring-offset-gray-900 transition duration-150 ease-in-out'>JD</button>
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