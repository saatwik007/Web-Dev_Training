import './App.css'
import { useState, useEffect } from 'react';


function App() {
  const [ showBtn , setShowBtn] = useState(false);
    const [loading, setLoading] = useState(false); // Optional: loading state
  const [todos, setTodos] = useState([]);
  
    useEffect(() => {
  setLoading(true);
  fetch ("https://jsonplaceholder.typicode.com/todos").then(response => response.json())
      .then(json => {
        setTodos(json);
        setLoading(false);
      })
  }, [])


  const Todo = ({todo}) => {
    return (
    <div className='m-4 border-1 border-red-900 p-4'>
    <div className='todo'>{todo.id} {todo.title}</div>
    </div>
    )
  }


  return (
    <>
    <p>
    </p>
    <button onClick={() => { setShowBtn(!showBtn)}}>CLICK ME !!</button>
   {showBtn && <h1 className='text-3xl font-bold underline'>TODOS</h1>}
     {/* Show loading state */}
      {showBtn && loading && <p>Loading todos...</p>}
   {showBtn && todos.map(todo => {
     return <Todo key={todo.id} todo={todo}/>
   })}
    </>
  )
}

export default App
