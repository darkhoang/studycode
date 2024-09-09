import { useState } from 'react';
import './App.css';

function App() {
  const [fullname, setfullName] = useState('');

  return (
    <div>
      <form onSubmit={}>
        <div className="container">
          <h2>Enter Your Names</h2>
          <div className="mid">
            <input
              type="text"
              placeholder="First Name"
              name="firstname"
            ></input>
            <input type="text" placeholder="Last Name" name="lastname"></input>
            <button >Show Full Name</button>
          </div>
        </div>
        <div className="fullname"></div>
      </form>
    </div>
  );
}

export default App;
