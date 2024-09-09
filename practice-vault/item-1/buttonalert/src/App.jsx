import react from 'react';
import './App.css';

function App() {
  const onclickButton = () => {
    alert('Button clicked');
  };
  return (
    <div className="container">
      <button onClick={onclickButton}>Click me to open an lert</button>
    </div>
  );
}

export default App;
