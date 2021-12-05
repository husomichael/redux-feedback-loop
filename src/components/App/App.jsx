import React from 'react';
import axios from 'axios';
import './App.css';
import Header from '../Header/Header.jsx';
import Feeling from '../Feeling/Feeling.jsx';
import Understanding from '../Understanding/Understanding.jsx';
import Supported from '../Supported/Supported.jsx';
import Comments from '../Comments/Comments.jsx';

function App() {

  return (
    <div className='App'>
      <Header />
      <Feeling />
      <Understanding />
      <Supported />
      <Comments />
    </div>
  );
};

export default App;