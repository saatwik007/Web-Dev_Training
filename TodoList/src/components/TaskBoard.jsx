import React from 'react'
import TaskCard from './TaskCard'

const TaskBoard = ({tasks, onToggleComplete, onDeleteTask, onClearAll}) => {
  return (
       <div className="flex-1 p-3 sm:p-4 lg:p-6 bg-gray-900 overflow-y-auto">
      <div className="mb-4 sm:mb-6 flex flex-col sm:flex-row sm:justify-between sm:items-center">
        <div className="mb-4 sm:mb-0">
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">My Tasks</h1>
          <p className="text-gray-400 text-sm sm:text-base">
            {tasks.length === 0 
              ? "No tasks yet" 
              : `${tasks.filter(t => !t.completed).length} pending, ${tasks.filter(t => t.completed).length} completed`
            }
          </p>
        </div>
        
        {tasks.length > 0 && (
          <button
            onClick={onClearAll}
            className="px-3 py-2 text-xs sm:text-sm text-red-400 border border-red-400 rounded-md hover:bg-red-400 hover:text-white transition duration-150 self-start sm:self-auto"
          >
            Clear All
          </button>
        )}
      </div>
      
      <div className="space-y-3 sm:space-y-4">
        {tasks.length === 0 ? (
          <div className="text-center py-8 sm:py-12">
            <div className="text-gray-500 text-base sm:text-lg">No tasks yet</div>
            <div className="text-gray-600 text-xs sm:text-sm mt-2">Click "+ New Task" to create your first task</div>
          </div>
        ) : (
          tasks.map(task => (
            <TaskCard 
              key={task.id} 
              task={task}
              onToggleComplete={onToggleComplete}
              onDelete={onDeleteTask}
            />
          ))
        )}
      </div>
    </div>
  )
}

export default TaskBoard