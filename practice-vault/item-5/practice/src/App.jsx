import { useState } from 'react';
import classNames from 'classnames';
import './App.css';

function App() {
  const [state, setstate] = useState({
    corlorChange: false,
    sizeChange: false,
    invisible: false,
  });
  const onclickChangcolor = () => {
    setstate({
      ...state,
      corlorChange: !state.corlorChange,
    });
  };
  const boxClassName = classNames({
    red: state.corlorChange,
    larger: state.sizeChange,
    hidden: state.invisible,
  });

  return (
    <div>
      <div className="container">
        <button className="button" onClick={onclickChangcolor}>
          Change the box background to "
          {state.corlorChange ? 'deafault' : 'red'}"
        </button>
        <button className="button warning">Make the box becomes bigger</button>
        <button className="button danger">Hide the box</button>
      </div>
      <div className="box">{boxClassName}</div>
    </div>
  );
}

export default App;
