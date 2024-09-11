import { useState } from 'react';
import classNames from 'classnames';
import './App.css';

function App() {
  const [change, setisChange] = useState({
    changecolor: false,
    changesize: false,
    invisible: false,
  });
  const onclickChangcolorRed = () => {
    setisChange({
      ...change,
      changecolor: !change.changecolor,
    });
  };
  const onclickChangesize = () => {
    setisChange({
      ...change,
      changesize: !change.changesize,
    });
  };
  const onclickHide = () => {
    setisChange({
      ...change,
      invisible: !change.invisible,
    });
  };
  const boxclass = classNames(
    {
      red: change.changecolor,
      larger: change.changesize,
      hidden: change.invisible,
    },
    'box'
  );
  return (
    <div>
      <div className="container">
        <button className="button" onClick={onclickChangcolorRed}>
          Change the box background to "{change.changecolor ? 'red' : 'default'}
          "
        </button>
        <button className="button warning" onClick={onclickChangesize}>
          Make the box
          {change.changesize
            ? ' becomes bigger'
            : ' goes back to its default size'}
        </button>
        <button className="button danger" onClick={onclickHide}>
          {change.invisible ? 'Hide' : 'Show'} the box
        </button>
      </div>
      <div className={boxclass}></div>
    </div>
  );
}

export default App;
