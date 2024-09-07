import { useState } from 'react';
import './App.css';

const colors = ['red', 'green', 'blue', 'purple', 'orange', 'black'];

// array.map - chuyen hoa 1 array to a different array

function App() {
  // Khởi tạo trạng thái màu nền, mặc định là 'white'
  const [backgroundColor, setBackgroundColor] = useState('white');

  console.log(backgroundColor);

  const onclickButton = (color) => {
    setBackgroundColor(color);
  };
  // tao 1 cai array chua buttons ma co ten la tu colors o tren

  return (
    <div className={`container color-${backgroundColor}`}>
      <div className="content">
        {colors.map((color) => (
          <button
            className={`color-${color}`}
            onClick={() => {
              onclickButton(color);
            }}
          >
            {color}
          </button>
        ))}
      </div>
    </div>
  );
  // return (
  //   <div className={`container color-${backgroundColor}`}>
  //     {colors.map((color) => {
  //       // const onclickButton = () => {
  //       //   setBackgroundColor(color);
  //       // };

  //       return (
  //         <button
  //           className={`color-${color}`}
  //           onClick={() => {
  //             onclickButton(color);
  //           }}
  //         >
  //           {color}
  //         </button>
  //       );
  //     })}
  //   </div>
  // );
}

export default App;
