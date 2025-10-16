import React from 'react'
import SideNav from './SideNav'
import TaskBoard from './TaskBoard'

const Dashboard = () => {
  return (
    <div className='flex'>
    <SideNav />
    <TaskBoard />
    </div>
  )
}

export default Dashboard