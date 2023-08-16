// components/LoadingLogo.js
import React from 'react';
import './LoadingLogo.css';
import logo from '../../assets/Images/p10.gif'

const LoadingLogo = () => {
  return (
    <div className="loading-logo">
      <img src={logo} alt="Logo" />
    </div>
  );
};

export default LoadingLogo;
