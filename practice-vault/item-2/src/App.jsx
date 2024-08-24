import { useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const onABCClick = () => {
    setInputValue('A button is clicked');
  };

  return (
    <div className="container">
      <input type="text" className="input" value={inputValue} />
      <button className="button" onClick={onABCClick}>
        Click me to change the input value
      </button>
    </div>
  );
}

export default App;
