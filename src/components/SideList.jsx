import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SideList.css';

const SideList = () => {
  const navigate = useNavigate();

  return (
    <div className="side-list">
      <ul>
        <li onClick={() => navigate('/')}>Home</li>
        <li onClick={() => navigate('/about')}>About Us</li>
        <li onClick={() => navigate('/contact')}>Contact</li>
      </ul>
    </div>
  );
};

export default SideList;
