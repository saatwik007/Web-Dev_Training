import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App bg-red-200">
      {count}
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
}

export default App;
