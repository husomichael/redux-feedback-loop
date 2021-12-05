import React from 'react';
import axios from 'axios';
import './App.css';
import Header from '../Header/Header.jsx';
import Feeling from '../Feeling/Feeling.jsx';
import Understanding from '../Understanding/Understanding.jsx';
import Supported from '../Supported/Supported.jsx';
import Comments from '../Comments/Comments.jsx';
import Review from '../Review/Review.jsx';
import {HashRouter as Router, Route, Link} from 'react-router-dom';

function App() {

  return (
    <div className='App'>
      <Header />
      <Router>
        <Route exact path ="/">
          <Feeling />
        </Route>
        <Route exact path ="/understanding">
          <Understanding />
        </Route>
        <Route exact path ="/supported">
          <Supported />
        </Route>
        <Route exact path ="/comments">
          <Comments />
        </Route>
        <Route exact path ="/review">
          <Review />
        </Route>
      </Router>
    </div>
  );
};

export default App;