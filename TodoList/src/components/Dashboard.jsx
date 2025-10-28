import SideNav from './SideNav'
import TaskBoard from './TaskBoard'

const Dashboard = ({tasks, onToggleComplete, onDeleteTask}) => {
  return (
    <div className='flex'>
    <SideNav />
    <TaskBoard tasks={tasks}
    onToggleComplete={onToggleComplete}
    onDeleteTask={onDeleteTask}
    />
    </div>
  )
}

export default Dashboard