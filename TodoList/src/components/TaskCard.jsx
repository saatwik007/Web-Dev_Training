import React from 'react'

const TaskCard = ({task}) => {
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
    <div className="bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition duration-200 ease-in-out cursor-pointer overflow-hidden flex m-4">

    <div className={`w-2 ${getPriorityColor(task.priority)} flex-shrink-0`}></div>

    <div className="p-4 flex flex-grow items-start justify-between">
        
        <div className="flex items-start space-x-3 flex-grow">
            
            <input
                type="checkbox"
                className="mt-1 w-5 h-5 form-checkbox rounded text-green-500 bg-gray-700 border-gray-600 focus:ring-green-500"
            />
            
            <div>
                <h4 className="text-lg font-semibold text-white">
                    {task.title}
                </h4>
                <p className="text-sm text-gray-400 mt-1">
                    {task.description}
                </p>
            </div>
        </div>
 
        <div className="flex-shrink-0 flex items-center space-x-3 ml-4 text-sm">
            
            <span className="text-gray-500 flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                {formatDate(task.dueDate)}
            </span>
 
            <svg className="w-5 h-5 text-red-500 hover:text-red-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.394 6.697a.75.75 0 10-1.061-1.061l-3.5 3.5a.75.75 0 000 1.061l3.5 3.5a.75.75 0 001.061-1.061L9.734 10l2.66-2.66z" clipRule="evenodd"></path><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-5-8a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
        </div>
    </div>
</div>
  )
}

export default TaskCard