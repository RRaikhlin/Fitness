import React from 'react';
import { useState, useRef } from 'react';
import './Landing.css'
import BodyMan from './Bodies/BodyMan';
import BodyWoman from './Bodies/BodyWoman';
import Switcher from './Bodies/switcher';
import MainButton from './Button';


function Landing() {

const [isMan, setIsMan] = useState(false);
const [reset, setReset] = useState()

const selectedBodyItems = useRef([])
  
  const switcherPosition = () => {
    setIsMan(prevMode => !prevMode);
  }

  const getSelectedBodyItems = (data) =>{
    setReset(prev => !prev)
    return selectedBodyItems.current = data
  }
 
  console.log("Landing")



    return (
      <div className="Landing">
        <h1>MyFitnessApp</h1>
        <div className="container">
            <div><h3>man&nbsp;&nbsp; </h3></div>
          <Switcher switcherPosition={switcherPosition} isMan={isMan}/>
          <div><h3>&nbsp;&nbsp;woman</h3></div>
   </div>
         {isMan ? <BodyWoman getSelectedBodyItems={getSelectedBodyItems}/> : <BodyMan getSelectedBodyItems={getSelectedBodyItems}/>}
       
       <MainButton selectedBodyItems={selectedBodyItems} male={(isMan) ? "woman," : "man,"} setReset={setReset} />
      </div>
    );
  }

export default Landing;
