import React, { useState } from 'react';
import './Tweet.css';

const Tweet = ({ tweet }) => {
  const [likes, setLikes] = useState(tweet.likes);
  const [tweetText, setTweetText] = useState(tweet.text);
  const [isEditing, setIsEditing] = useState(false);

  const handleRetweetClick = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <div className="tweet">
      {isEditing ? (
        <div>
          <input 
            type="text" 
            value={tweetText} 
            onChange={(e) => setTweetText(e.target.value)} 
          />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <p>{tweetText}</p>
      )}
      <div className="tweet-actions">
        <button onClick={() => setLikes(likes + 1)}>Like ({likes})</button>
        <button onClick={handleRetweetClick}>
          {isEditing ? "Editing..." : "Edit Tweet"}
        </button>
      </div>
    </div>
  );
};

export default Tweet;
