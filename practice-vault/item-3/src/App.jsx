import { useState } from 'react';
import './App.css';

function App() {
  const [fullname, setfullName] = useState('');
  const onSubMit = (e) => {
    e.preventDefault();
    const [firstname, lastname] = e.target.elements;
    setfullName(`${firstname.value} ${lastname.value}`);
  };

  return (
    <div>
      <form onSubmit={onSubMit}>
        <div className="container">
          <h2>Enter Your Names</h2>
          <div className="mid">
            <input
              type="text"
              placeholder="First Name"
              name="firstname"
            ></input>
            <input type="text" placeholder="Last Name" name="lastname"></input>
            <button>Show Full Name</button>
          </div>
          <div className="fullname">{fullname}</div>
        </div>
      </form>
    </div>
  );
}

export default App;
