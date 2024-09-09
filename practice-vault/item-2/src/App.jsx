import { useState } from 'react';
import './App.css';

function App() {
  const [value, setisValue] = useState('');
  const onclickButton = () => {
    setisValue('A button is clicked');
  };
  return (
    <div className="container">
      <input type="text" value={value}></input>
      <button onClick={onclickButton}>
        Click me to change the input value
      </button>
    </div>
  );
}
export default App;
