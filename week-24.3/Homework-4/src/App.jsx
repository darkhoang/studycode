import React from 'react';
import './App.css';
function App() {
  let inputText = document.querySelector('.text');
  let button = document.querySelector('button');
  let Upper = document.querySelector('.result');
  let to_uppercase = function (str) {
    return str.toUpperCase();
  };
  let OnClick = function () {
    let input = inputText.value;
    Upper.innerHTML = to_uppercase(input);
  };
  button.addEventListener('click', OnClick);
  return (
    <div className="container">
      <h2>Convert Text to Uppercase</h2>
      <div>
        <input className="text" placeholder="Enter Text Here"></input>
      </div>
      <button>Convert to uppercase</button>
      <div className="result"></div>
    </div>
  );
}

export default App;
