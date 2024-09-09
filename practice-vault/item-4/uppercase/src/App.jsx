import { useState } from 'react';
import './App.css';

function App() {
  const [uppercase, setisUppercase] = useState('');
  const onclickButton = (e) => {
    e.preventDefault();
    const { input } = e.target.elements;
    const newvalue = input.value.toUpperCase();
    setisUppercase(newvalue);
  };
  return (
    <div className="container">
      <h2>Convert Text to Uppercase</h2>
      <form onSubmit={onclickButton}>
        <input type="text" placeholder="Enter text here" name="input"></input>
        <button>Convert to uppercase</button>
        <div className="output">{uppercase}</div>
      </form>
    </div>
  );
}

export default App;
