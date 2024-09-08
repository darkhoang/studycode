import { useState } from 'react';
import './App.css';

function App() {
  const [value, setvalue] = useState('');
  const onclickButton = () => {
    setvalue('A button is clicked');
  };
  return (
    <div className="container">
      <input type="text" value={value}></input>
      <button onClick={onclickButton}>Click to change the vaule input</button>
    </div>
  );
}
export default App;
