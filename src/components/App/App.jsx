import React from 'react';
import axios from 'axios';
import './App.css';
import Header from '../Header/Header.jsx';
import Feeling from '../Feeling/Feeling.jsx';

function App() {

  return (
    <div className='App'>
      <Header />
      <Feeling />
    </div>
  );
};

export default App;
