import { useState } from 'react';
import './App.css';

function App() {
  const [value, setisnewvalue] = useState('');
  const onclickSubMit = (e) => {
    e.preventDefault();
    const { name } = e.target.elements;
    const newvalue = name.value.toUpperCase();
    setisnewvalue(newvalue);
  };
  return (
    <div className="container">
      <h2>Convert Text to Uppercas</h2>
      <form onSubmit={onclickSubMit}>
        <input type="text" placeholder="Enter text here" name="name"></input>
        <button>Convert to uppercase</button>
        <div className="output">{value}</div>
      </form>
    </div>
  );
}

export default App;
