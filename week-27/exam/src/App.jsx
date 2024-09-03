import { useState } from 'react';
import './App.css';

function App() {
  // Khởi tạo trạng thái màu nền, mặc định là 'white'
  const [backgroundColor, setBackgroundColor] = useState('white');

  // Hàm để cập nhật màu nền khi nhấn nút
  const onClickRed = () => {
    setBackgroundColor('red'); // Cập nhật màu nền thành đỏ
  };

  return (
    <div className="container" style={{ backgroundColor }}>
      <button className="color-red" onClick={onClickRed}>
        Red
      </button>

      <button
        className="color-green"
        onClick={() => setBackgroundColor('green')}
      >
        Green
      </button>
      <button className="color-blue" onClick={() => setBackgroundColor('blue')}>
        Blue
      </button>
      <button
        className="color-purple"
        onClick={() => setBackgroundColor('purple')}
      >
        Purple
      </button>
      <button
        className="color-orange"
        onClick={() => setBackgroundColor('orange')}
      >
        Orange
      </button>
      <button
        className="color-black"
        onClick={() => setBackgroundColor('black')}
      >
        Black
      </button>
    </div>
  );
}

export default App;
