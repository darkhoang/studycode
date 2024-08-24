import { useState } from 'react';
import './App.css';

const colors = [
  'red',
  'orange',
  'yellow ',
  'green',
  'blue',
  'indigo',
  'violet',
];

function App() {
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const currentColor = colors[currentColorIndex];
  const nextColor = colors[currentColorIndex + 1];
  const onButtonClick = () => {
    let newIndex = currentColorIndex + 1;

    if (newIndex === colors.length - 1) {
      newIndex = 0;
    }

    setCurrentColorIndex(newIndex);
  };

  return (
    <div className={`container ${currentColor}`}>
      <button className="button" onClick={onButtonClick}>
        To <span className={nextColor}>{nextColor}</span>
      </button>
    </div>
  );
}

export default App;
