import { useState } from 'react';
import './App.css';

function App() {
  const [fullname, setFullName] = useState('');
  const onclickSubmit = (e) => {
    e.preventDefault();
    const [fistname, lastname] = e.target.elements;
    setFullName(`${fistname.value} ${lastname.value}`);
  };

  return (
    <div className="container">
      <h2>Enter Your Names</h2>
      <form onSubmit={onclickSubmit}>
        <input type="text" placeholder="First Name" name="firstname"></input>
        <input type="text" placeholder="Last Name" name="lastname"></input>
        <button>Show Full Name</button>
        <div className="output">{fullname}</div>
      </form>
    </div>
  );
}

export default App;
