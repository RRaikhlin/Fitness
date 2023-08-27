import React from 'react';
import './BodyMan.css'
import {useState, useEffect} from 'react'
import { MAN_FRONT_16, IMAGE_PATH, EXT } from './utils/BodyManConstants';



function BodyMan({getSelectedBodyItems}) {

    const bodyMap =
      {"man-front-16": "Forearms",
        "man-front-10": "Biceps",
        "man-front-7" : "Chest",
        "man-front-12" : "Abdominals", 
        "man-front-17" : "Quads",
        "man-back-7" : "Lats",
        "man-back-9" : "Glutes",
        "man-back-11" : "Hamstrings"
      }
    

    const [selectedBodyItems, setSelectedBodyItems] = useState([])
    const [selectedBodyTypes, setSelectedBodyTypes] = useState([])


   

    const updateSelectedBodyTypesMethod = (bodyFiles) => {
      const updateSelectedBodyTypes = []
      bodyFiles.forEach((fileName) =>{
      if (bodyMap[fileName]){
        updateSelectedBodyTypes.push(bodyMap[fileName])
      }
    })  
    setSelectedBodyTypes(updateSelectedBodyTypes)
    const cc = getSelectedBodyItems(updateSelectedBodyTypes)
    console.log("selectedBodyTypes =")
    console.log(selectedBodyTypes)
  }
  


    const handleClick = (ids) =>{
      let updateSelectedBodyItems = selectedBodyItems
      if (isSelected(ids[0])) {
        ids.forEach(id =>
           updateSelectedBodyItems = updateSelectedBodyItems.filter(i => i !== id)
        )
      }
    else{
      ids.forEach(id =>
        updateSelectedBodyItems.push(id)
      )
    }
 setSelectedBodyItems(updateSelectedBodyItems)
 
 updateSelectedBodyTypesMethod(updateSelectedBodyItems)
  }

  

   const isSelected = (id) => {
    return selectedBodyItems.includes(id)
   }
   

   const setClassName = (id) => {
    return isSelected(id) ? "overlay overlaySelected" : "overlay"

   }


  return (
    <div id="container">
      <div></div>
        <div className="image-wrapper">
      
            <img id="image" src={ require('./images/man-default-nofon.png')} />
            
            <img className={setClassName("man-front-7")} id={"man-front-7"} src={require('./images/man/man-front-7.png')}
              onClick={() =>handleClick(["man-front-7", "man-front-8"])} />
            <img className={setClassName("man-front-8")} id={"man-front-8"} src={require('./images/man/man-front-8.png')}
              onClick={() =>handleClick(["man-front-7", "man-front-8"])} />

            <img className={setClassName("man-front-10")} id="man-front-10" src={require('./images/man-front-10.png')}
              onClick={() =>handleClick(["man-front-10", "man-front-14"])}   />
            <img className={setClassName("man-front-12")} id="man-front-12" src={require('./images/man/man-front-12.png')}
              onClick={() =>handleClick(["man-front-12"])}   />              
            <img className={setClassName("man-front-14")} id="man-front-14" src={require('./images/man/man-front-14.png')}
              onClick={() =>handleClick(["man-front-10", "man-front-14"])}   />
            <img className={setClassName("man-front-15")} id="man-front-15" src={require('./images/part2.png')}    
              onClick={() =>handleClick(["man-front-16", "man-front-15"])}/>
            <img className={setClassName("man-front-16")} id={"man-front-16"} src={require('./images/man-front-16.png')}
              onClick={() =>handleClick(["man-front-16", "man-front-15"])} />
            <img className={setClassName("man-front-17")} id={"man-front-17"} src={require('./images/man/man-front-17.png')}
              onClick={() =>handleClick(["man-front-17", "man-front-18"])} />
            <img className={setClassName("man-front-18")} id={"man-front-18"} src={require('./images/man/man-front-18.png')}
              onClick={() =>handleClick(["man-front-17", "man-front-18"])} />

             <img className={setClassName("man-back-7")} id={"man-back-7"} src={require('./images/man/man-back-7.png')}
              onClick={() =>handleClick(["man-back-7", "man-back-8"])} />       
            <img className={setClassName("man-back-8")} id={"man-back-8"} src={require('./images/man/man-back-8.png')}
              onClick={() =>handleClick(["man-back-7", "man-back-8"])} />
            <img className={setClassName("man-back-9")} id={"man-back-9"} src={require('./images/man/man-back-9.png')}
              onClick={() =>handleClick(["man-back-9", "man-back-10"])} />
            <img className={setClassName("man-back-10")} id={"man-back-10"} src={require('./images/man/man-back-10.png')}
              onClick={() =>handleClick(["man-back-9", "man-back-10"])} /> 
            <img className={setClassName("man-back-11")} id={"man-back-11"} src={require('./images/man/man-back-11.png')}
              onClick={() =>handleClick(["man-back-11", "man-back-12"])} />               
            <img className={setClassName("man-back-12")} id={"man-back-12"} src={require('./images/man/man-back-12.png')}
              onClick={() =>handleClick(["man-back-11", "man-back-12"])} />   
        </div>
      <div className='selectedBodyItems'>
        {selectedBodyTypes.map((bi, id) => <div key={id} ><h2>{bi}</h2></div>)}
      </div>
    </div>
  );
}

export default BodyMan;
