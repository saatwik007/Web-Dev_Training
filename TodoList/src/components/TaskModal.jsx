import React, { useState } from 'react'

const TaskModal = ({onClose,onSubmit}) => {
    const [taskData, setTaskData] = useState({
        title: '',
        description: 'Description . . .',
        priority: 'low',
        dueDate: ''
    });

    const handleChange = (e) => {
        setTaskData({
            ...taskData,
            [e.target.name]: e.target.value
        });
        console.log(taskData);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitting Task:", taskData);
        onSubmit(taskData);
        onClose();
        setTaskData({
            title: '',
            description: '',
            priority: 'low',
            dueDate: ''
        });
    }
  return (
      <div className="fixed inset-0 bg-opacity-50 bg-white/30 flex items-center justify-center z-50">
            <div className="bg-gray-800 rounded-lg p-6 w-full max-w-md mx-4">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold text-white">Create New Task</h2>
                    <button 
                        onClick={onClose}
                        className="text-gray-400 hover:text-white hover:cursor-pointer"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <form 
                onSubmit={handleSubmit}
                 className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-200 mb-1">
                            Task Title
                        </label>
                        <input
                            type="text"
                            name="title"
                            value={taskData.title}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-700"
                            placeholder="Enter task title..."
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-200 mb-1">
                            Description
                        </label>
                        <textarea
                            name="description"
                            value={taskData.description}
                            onChange={handleChange}
                            rows="3"
                            className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-700"
                            placeholder="Enter task description..."
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-200 mb-1">
                            Priority
                        </label>
                        <select
                            name="priority"
                            value={taskData.priority}
                            onChange={handleChange}
                            className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-700"
                        >
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-200 mb-1">
                            Due Date
                        </label>
                        <input
                            type="date"
                            name="dueDate"
                            value={taskData.dueDate}
                            onChange={handleChange}
                            className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-700"
                        />
                    </div>

                    <div className="flex space-x-3 pt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="hover:cursor-pointer flex-1 px-4 py-2 text-gray-300 bg-gray-600 rounded-md hover:bg-gray-500 transition duration-150"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="hover:cursor-pointer flex-1 px-4 py-2 text-white bg-emerald-700 rounded-md hover:bg-emerald-600 transition duration-150"
                        >
                            Create Task
                        </button>
                    </div>
                </form>
            </div>
        </div>
  )
}

export default TaskModal