import react from 'react';
import './App.css';

function App() {
  const onclickButon = () => {
    alert('Button clicked');
  };
  return (
    <div className="container">
      <button onClick={onclickButon}>Click me to open alert</button>
    </div>
  );
}

export default App;
