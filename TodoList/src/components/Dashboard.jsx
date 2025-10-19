import React from 'react'
import SideNav from './SideNav'
import TaskBoard from './TaskBoard'

const Dashboard = ({tasks}) => {
  return (
    <div className='flex'>
    <SideNav />
    <TaskBoard tasks={tasks} />
    </div>
  )
}

export default Dashboard