import React from 'react'
import TaskCard from './TaskCard'

const TaskBoard = ({tasks}) => {
  return (
    <div className='w-full bg-gray-900 h-auto p-4'>
        {tasks.map((task, index) => (
            <TaskCard key={index} task={task} />
        ))}
    </div>
  )
}

export default TaskBoard