import { useState } from 'react';
import './App.css';

function App() {
  const [fullname, setFullName] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    const [fistname, lastname] = e.target.elements;
    setFullName(`${fistname.value} ${lastname.value}`);
  };
  return (
    <div className="container">
      <h2>Enter Your Names</h2>
      <form onSubmit={onSubmit}>
        <div className="mid">
          <input type="text" placeholder="First Name" name="firstname"></input>
          <input type="text" placeholder="Last Name" name="lastname"></input>
          <button type="submit">Show Full Name</button>
        </div>
      </form>
      <div className="fullname">{fullname}</div>
    </div>
  );
}

export default App;
