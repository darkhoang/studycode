import { useState } from 'react';
import classNames from 'classnames';
import './App.css';

function App() {
  const [value, setisvalue] = useState({
    changecolor: false,
    changesize: false,
    hide: false,
  });
  const onclickChangecolor = () => {
    setisvalue({
      ...value,
      changecolor: !value.changecolor,
    });
  };
  const onclickChangesize = () => {
    setisvalue({
      ...value,
      changesize: !value.changesize,
    });
  };
  const onclickHide = () => {
    setisvalue({
      ...value,
      hide: !value.hide,
    });
  };
  const boxname = classNames(
    {
      red: value.changecolor,
      larger: value.changesize,
      hidden: value.hide,
    },
    'box'
  );
  return (
    <div>
      <div className="container">
        <button className="button" onClick={onclickChangecolor}>
          Change the box background to "{value.changecolor ? 'default' : 'red'}"
        </button>
        <button className="button warning" onClick={onclickChangesize}>
          Make the box{' '}
          {value.changesize
            ? ' goes back to its default size'
            : ' becomes bigger'}
        </button>
        <button className="button dangerous" onClick={onclickHide}>
          {value.hide ? 'Show' : 'Hide'} the box
        </button>
      </div>
      <div className={boxname}></div>
    </div>
  );
}

export default App;
