import React, { useEffect, useState } from "react";

import "../src/App.css"

const items = [
  {
    id: 1,
    image:"https://img.freepik.com/free-psd/action-video-game-3d-text-style-effect_1389-1572.jpg?t=st=1715590126~exp=1715593726~hmac=3e0425e23369665d38bbd0826f036f4acb7a61e5b2993d6b4912064dfb8c91f1&w=2000",
    title:"Item: 1"
  },
  {
    id: 2,
    image:"https://img.freepik.com/free-psd/music-banner-design-template_23-2149081199.jpg?t=st=1715590152~exp=1715593752~hmac=07e5e95ccf9a6ae398e1f22fe53569503b35dc42f916a1c360460f953c3f7aab&w=2000",
    title:"Item: 2"
  },
  {
    id: 3,
    image:"https://img.freepik.com/free-psd/halloween-make-up-woman-triangle_23-2148313632.jpg?t=st=1715590179~exp=1715593779~hmac=83a6c1ee8d0bd87a54da48b73e74c0331016c3f381cb56c5ebe1e8c83e8116d2&w=2000",
    title:"Item: 3"
  },
  {
    id: 4,
    image:"https://img.freepik.com/free-psd/horror-video-game-3d-text-style-effect_1389-1574.jpg?t=st=1715593031~exp=1715596631~hmac=2d4010394192a143b0954f4880a3bc4aed0fe01370302b95d16c9c8688fbf792&w=1480",
    title:"Item: 4"
  }
]

function App() {
  const [activeItem, setActiveItem] = useState(0);

  const handleNext= () =>{
    if (activeItem === items.length -1){
      setActiveItem(0);
    }else{
      setActiveItem((activeItem)=> activeItem + 1);
    }
  };

  const handlePrev = () =>{
    if(activeItem === 0){
      setActiveItem(items.length - 1);
    }else{
      setActiveItem((activeItem)=>activeItem - 1);
    }
  };

  useEffect(()=>{
    let timer = setTimeout(()=>{
      handleNext();
    },10000);
    return() => clearTimeout(timer);
  },[activeItem]); 

  return (
    <>
    <div className="container">
        <button className="pre" onClick={handlePrev}>{`<`}</button>
        <div>
          <img src={items[activeItem].image} 
          alt={items[activeItem].title} 
          width={500} 
          height={300} 
          />
          <h1>{items[activeItem].title}</h1>
        </div>
        <button className="rig" onClick={handleNext}>{`>`}</button>
    </div>
    </>
  )
}

export default App
