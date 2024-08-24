import { useState } from 'react';
import './App.css';

function App() {
  const [firstName, setFirstName] = useState('');
  const onFirstNameChange = (e) => {
    const newValue = e.target.value;
    setFirstName(newValue);
  };
  const [lastName, setlastName] = useState('');
  const onLastNameChange = (e) => {
    const newValue = e.target.value;
    setlastName(newValue);
  };

  // const [fullName, setfullName] = useState('');

  const onButtonClick = () => {
    // const newFullName = `${firstName} ${lastName}`;
    // setfullName(newFullName);
  };

  return (
    <div className="container">
      <h2>Enter Your Names</h2>

      <input
        type="text"
        placeholder="First Name"
        className="firstname"
        value={firstName}
        onChange={onFirstNameChange}
      />
      <input
        type="text"
        placeholder="Last Name"
        className="lastname"
        value={lastName}
        onChange={onLastNameChange}
      />
      <button onClick={onButtonClick}>Show Full Name</button>
      <div className="fullname">
        Full name is : {firstName} {lastName}
      </div>
    </div>
  );
}

export default App;
