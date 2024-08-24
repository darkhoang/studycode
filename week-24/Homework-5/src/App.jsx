import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isRed, setIsRed] = useState(false);

  // This effect runs after the component mounts and updates the button text
  useEffect(() => {
    const changeBgButton = document.querySelector('[data-action="background"]');
    if (changeBgButton) {
      changeBgButton.innerHTML = isRed
        ? 'Change the box background to default color'
        : 'Change the box background to "red"';
    }
  }, [isRed]);

  const onChangeBgButtonClicked = () => {
    setIsRed((prevIsRed) => !prevIsRed);
  };
  //button changesize
  const [isbig, setIsBig] = useState(false);
  useEffect(() => {
    const ChangeSizebox = document.querySelector('[data-action="ChangeSize"]');
    if (ChangeSizebox) {
      ChangeSizebox.innerHTML = isbig
        ? 'Make the box goes back to its default size'
        : 'Make the box becomes bigger';
    }
  }, [isbig]);
  const onChangeSize = () => {
    setIsBig((prevIsBig) => !prevIsBig);
  };
  //button hidebox
  const [isHide, setIsHide] = useState(false);
  useEffect(() => {
    const ButtonHide = document.querySelector('[data-action="Hidebox"]');
    if (ButtonHide) {
      ButtonHide.innerHTML = isHide ? 'Hide the box' : 'Show the box';
    }
  }, [isHide]);
  const onHideBox = () => {
    setIsHide((prevIsBig) => !prevIsBig);
  };

  return (
    <div>
      <div className="container">
        <button
          className="changecolor"
          data-action="background"
          onClick={onChangeBgButtonClicked}
        >
          Change the box background to {isRed ? 'default color' : '"red"'}
        </button>
        <button
          className="changesize"
          data-action="ChangeSize"
          onClick={onChangeSize}
        >
          Make the box becomes bigger{' '}
          {isbig ? 'go back to its default size' : 'become bigger'}
        </button>
        <button className="hidebox" data-action="Hidebox" onClick={onHideBox}>
          Hide the box {isHide ? 'show' : 'hide'}
        </button>
      </div>
      <div
        className={`box ${isRed ? 'red' : ''}  ${isbig ? 'bigger' : ''} ${
          isHide ? 'hide' : ''
        }`}
      ></div>
    </div>
  );
}

export default App;
