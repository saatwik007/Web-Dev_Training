import React from 'react'
import TaskCard from './TaskCard'

const TaskBoard = () => {
  return (
    <div className='w-full bg-gray-900 h-auto p-4'>
        <TaskCard />
        <TaskCard />
        <TaskCard />

    </div>
  )
}

export default TaskBoard