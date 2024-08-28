import { useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setisinputValue] = useState('');
  const buttonClick = () => {
    setisinputValue('A button is clicked');
  };
  return (
    <div className="container">
      <input placeholder="Lets click on Button" value={inputValue} />
      <button onClick={buttonClick}>Click me to change the input value</button>
    </div>
  );
}
export default App;
