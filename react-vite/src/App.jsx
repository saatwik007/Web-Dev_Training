import './App.css'
import { useState, useEffect } from 'react';


function App() {
  
  const [a, changeState] = useState(0); 
  
  useEffect(() => {
    alert ("count updated to " + a)
  }, [a])
  


  return (
    <>
    <p>

    HELLO WORLD - {a}
    </p>
    <button onClick={() => changeState(a + 1)}>Click Me</button>
    </>
  )
}

export default App
