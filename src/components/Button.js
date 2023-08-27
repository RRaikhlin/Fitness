import React, { useState } from 'react';
import ResultComponent from './ResultComponent';
import { Link } from 'react-router-dom';
import './Button.css'

function MainButton({ selectedBodyItems, male, setReset }) {
  const [showResult, setShowResult] = useState(false);
  const selectedItemsString = selectedBodyItems.current.join(',')

  
  const buttonStyleMan = {
    backgroundColor: `rgb(130, 189, 231)`
  }
  const buttonStyleWoman = {
    backgroundColor: `#f279e4`
  }

  return (
    <div>
    <Link to={`/result/${male}${selectedItemsString}`}>
      <button id="mainButton" onClick={() => setShowResult(null)}  style={male==="woman," ? buttonStyleWoman : buttonStyleMan}  >
        <h3>Get Result</h3>
      </button>
    </Link>
  </div>
);
}

export default MainButton;
