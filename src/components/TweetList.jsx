import React from 'react';
import Tweet from './Tweet';
import './TweetList.css';

const TweetList = ({ tweets }) => {
  return (
    <div className="tweet-list">
      {tweets.length > 0 ? (
        tweets.map((tweet, index) => (
          <Tweet key={index} tweet={tweet} />
        ))
      ) : (
        <p>No tweets yet!</p>
      )}
    </div>
  );
};

export default TweetList;
