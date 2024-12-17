import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';import Header from './components/Header';
import TweetList from './components/TweetList';
import TweetInput from './components/TweetInput';
import SideList from './components/SideList';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  const [tweets, setTweets] = useState([]);

 const addTweet = (newTweet) => {
    setTweets([newTweet, ...tweets]);
  };

  return (
    <Router>
      <div className="app-container">
        <Header />
        <div className="main-content">
          <SideList />
          <div className="tweet-section">
            <TweetInput addTweet={addTweet} />
            <TweetList tweets={tweets} />
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
