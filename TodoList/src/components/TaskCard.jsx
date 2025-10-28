import React from 'react'

const TaskCard = ({task, onToggleComplete, onDelete}) => {
      const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'bg-red-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };
    const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };
  return (
    <div className="bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition duration-200 ease-in-out cursor-pointer overflow-hidden flex">

    <div className={`w-1 sm:w-2 ${getPriorityColor(task.priority)} flex-shrink-0`}></div>

    <div className="p-3 sm:p-4 flex flex-grow items-start justify-between">
        
        <div className="flex items-start space-x-2 sm:space-x-3 flex-grow min-w-0">
            
            <input
                type="checkbox"
                checked={task.completed || false}
                onChange={() => onToggleComplete(task.id)}
                className="mt-1 w-4 h-4 sm:w-5 sm:h-5 form-checkbox rounded text-green-500 bg-gray-700 border-gray-600 focus:ring-green-500 flex-shrink-0"
            />
            
            <div className="min-w-0 flex-grow">
                <h4 className={`text-sm sm:text-lg font-semibold ${task.completed ? 'text-gray-500 line-through' : 'text-white'} truncate`}>
                    {task.title}
                </h4>
                <p className="text-xs sm:text-sm text-gray-400 mt-1 line-clamp-2">
                    {task.description || 'No description provided.'}
                </p>
            </div>
        </div>
 
        <div className="flex-shrink-0 flex flex-col sm:flex-row items-end sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 ml-2 sm:ml-4 text-xs sm:text-sm">
            
           {task.dueDate && (
               <span className="text-gray-500 flex items-center">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                <span className="hidden sm:inline">{formatDate(task.dueDate)}</span>
                <span className="sm:hidden text-xs">{formatDate(task.dueDate).split(' ')[1]}</span>
            </span>
            )}

            <button onClick={()=> onDelete(task.id)} className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 hover:text-red-400 p-0.5">
            <svg fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9zM4 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 012 0v4a1 1 0 11-2 0V9zm4 0a1 1 0 012 0v4a1 1 0 11-2 0V9z" clipRule="evenodd"></path>
            </svg>
            </button>
        </div>
    </div>
</div>
  )
}

export default TaskCard