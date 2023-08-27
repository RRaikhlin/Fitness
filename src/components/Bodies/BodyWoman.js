import React from 'react';
import './BodyWoman.css'
import {useState, useEffect} from 'react'
import { MAN_FRONT_16, IMAGE_PATH, EXT } from './utils/BodyManConstants';



function BodyWoman({getSelectedBodyItems}) {

  const bodyMap =
  {"woman-front-11": "Forearms",
    "woman-front-7": "Biceps",
    "woman-front-3" : "Chest",
    "man-front-12" : "Abdominals", 
    "woman-front-14" : "Quads",
    "man-back-7" : "Lats",
    "woman-back-12" : "Glutes",
    "woman-back-14" : "Hamstrings",
    "woman-back-18" : "Brain",
    "woman-front-13" : "Abdominals",
    "woman-front-9" : "Obliques"
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
      
            <img id="image" src={ require('./images/woman/woman-default-nofon.png')} />
            
            <img className={setClassName("woman-front-3")} id={"woman-front-3"} src={require('./images/woman/woman-front-3.png')}
              onClick={() =>handleClick(["woman-front-3", "woman-front-4"])} />
            <img className={setClassName("woman-front-4")} id={"woman-front-4"} src={require('./images/woman/woman-front-4.png')}
              onClick={() =>handleClick(["woman-front-3", "woman-front-4"])} />
            <img className={setClassName("woman-front-7")} id={"woman-front-7"} src={require('./images/woman/woman-front-7.png')}
              onClick={() =>handleClick(["woman-front-7", "woman-front-8"])} />
            <img className={setClassName("woman-front-8")} id={"woman-front-8"} src={require('./images/woman/woman-front-8.png')}
              onClick={() =>handleClick(["woman-front-7", "woman-front-8"])} />
            <img className={setClassName("woman-front-11")} id={"woman-front-11"} src={require('./images/woman/woman-front-11.png')}
              onClick={() =>handleClick(["woman-front-11","woman-front-12"])} />
            <img className={setClassName("woman-front-12")} id={"woman-front-12"} src={require('./images/woman/woman-front-12.png')}
              onClick={() =>handleClick(["woman-front-11","woman-front-12"])} />
           <img className={setClassName("woman-front-13")} id={"woman-front-13"} src={require('./images/woman/woman-front-13.png')}
              onClick={() =>handleClick(["woman-front-13"])} />
           <img className={setClassName("woman-front-9")} id={"woman-front-9"} src={require('./images/woman/woman-front-9.png')}
              onClick={() =>handleClick(["woman-front-9","woman-front-10"])} />
           <img className={setClassName("woman-front-10")} id={"woman-front-10"} src={require('./images/woman/woman-front-10.png')}
              onClick={() =>handleClick(["woman-front-9","woman-front-10"])} />
           <img className={setClassName("woman-front-14")} id={"woman-front-14"} src={require('./images/woman/woman-front-14.png')}
              onClick={() =>handleClick(["woman-front-14","woman-front-15"])} /> 
           <img className={setClassName("woman-front-15")} id={"woman-front-15"} src={require('./images/woman/woman-front-15.png')}
              onClick={() =>handleClick(["woman-front-14","woman-front-15"])} />   

            <img className={setClassName("woman-back-5")} id={"woman-back-5"} src={require('./images/woman/woman-back-5.png')}
              onClick={() =>handleClick(["woman-back-5", "woman-back-6"])} />      
            <img className={setClassName("woman-back-6")} id={"woman-back-6"} src={require('./images/woman/woman-back-6.png')}
              onClick={() =>handleClick(["woman-back-5", "woman-back-6"])} />    
            <img className={setClassName("woman-back-12")} id={"woman-back-12"} src={require('./images/woman/woman-back-12.png')}
              onClick={() =>handleClick(["woman-back-12", "woman-back-13"])} />   
            <img className={setClassName("woman-back-13")} id={"woman-back-13"} src={require('./images/woman/woman-back-13.png')}
              onClick={() =>handleClick(["woman-back-12", "woman-back-13"])} />                 
            <img className={setClassName("woman-back-18")} id={"woman-back-18"} src={require('./images/woman/woman-back-18.png')}
              onClick={() =>handleClick(["woman-back-18"])} />      
            <img className={setClassName("woman-back-14")} id={"woman-back-14"} src={require('./images/woman/woman-back-14.png')}
              onClick={() =>handleClick(["woman-back-14", "woman-back-15"])} />  
            <img className={setClassName("woman-back-15")} id={"woman-back-15"} src={require('./images/woman/woman-back-15.png')}
              onClick={() =>handleClick(["woman-back-14", "woman-back-15"])} />                                
        </div>
      <div className='selectedBodyItems'>
        {selectedBodyTypes.map((item, id) => <div key={id} ><h2>{item}</h2></div>)}
      </div>
    </div>
  );
}

export default BodyWoman;
