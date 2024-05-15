
import './App.css';
import {useState} from 'react';
// switch between true and false
// build your own hooks

function useToggle() {
  const[value, setValue] = useState(true);
  const toggle = () => {
    setValue(!value);
  }
  // retuen state and function
  return{
    value,
    toggle
  }
}

function App() {
  const {value, toggle} = useToggle();

  return (
    <div className="App">
      <h1>React App</h1>
      {value && <div>this is div</div> }
      <button onClick = {toggle}>toggle</button>
    </div>
  );
}

export default App;
