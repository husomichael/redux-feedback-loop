import React from 'react';
import axios from 'axios';
import './App.css';
import Header from '../Header/Header.jsx';
import Feeling from '../Feeling/Feeling.jsx';
import Understanding from '../Understanding/Understanding.jsx';

function App() {

  return (
    <div className='App'>
      <Header />
      <Feeling />
      <Understanding />
    </div>
  );
};

export default App;