import { useState } from 'react';
import './App.css';

const colors = ['red', 'green', 'blue', 'purple', 'orange', 'black'];

function App() {
  const [background, setbackground] = useState('white');
  const onclickButton = (changcolor) => {
    setbackground(changcolor);
  };
  return (
    <div className={`container color-${background}`}>
      {colors.map((changcolor) => {
        return (
          <button
            className={`color-${changcolor}`}
            onClick={() => {
              onclickButton(changcolor);
            }}
          >
            {changcolor}
          </button>
        );
      })}
    </div>
  );
}

export default App;
