
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
//React Hook "useState" cannot be called at the top level.
//React Hooks must be called in a React function component or a custom React Hook function  react-hooks/rules-of-hooks


//const [value, setValue] = useState(true) // error;

function App() {
  const {value, toggle} = useToggle();

  // if(Math.randon() > 0.5){  // error
  //   const [value, setValue] = useState(true);
  // }

  return (
    <div className="App">
      <h1>React App</h1>
      {value && <div>this is div</div> }
      <button onClick = {toggle}>toggle</button>
    </div>
  );
}

export default App;
