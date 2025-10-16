import './App.css'
import Dashboard from './components/Dashboard'
import NavBar from './components/NavBar'
import SideNav from './components/SideNav'
import TaskCard from './components/TaskCard'

function App() {

  return (
    <>
    <div className="h-screen bg-gray-900">

     <NavBar />
     <Dashboard />
     {/* <SideNav />
     <TaskCard /> */}
    </div>
    </>
  )
}

export default App
