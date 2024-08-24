import React from 'react';
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Bodier from './component/Bodier';
function App() {
  return (
    <div className="content">
      <Header />
      <Bodier />
      <Footer />
    </div>
  );
}
export default App;
