import React, { useState } from 'react';
import './TweetInput.css';

const TweetInput = ({ addTweet }) => {
  const [tweet, setTweet] = useState('');

  const handleSubmit = () => {
    if (tweet.trim()) {
      addTweet({ text: tweet, likes: 0, retweets: 0 });
      setTweet('');
    }
  };

  return (
    <div className="tweet-input">
      <textarea
        placeholder=" Tell us your Opinion..."
        value={tweet}
        onChange={(e) => setTweet(e.target.value)}
      ></textarea>
      <button onClick={handleSubmit}>Tweet</button>
    </div>
  );
};

export default TweetInput;
