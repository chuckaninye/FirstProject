import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/index'
import Movies from './components/Movies'


const App: React.FC = () => {


  return (
    <div className="App">
		  <Header />
      <Movies />
    </div>
  );
}

export default App;
