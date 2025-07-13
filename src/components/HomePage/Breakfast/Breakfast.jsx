import React from 'react';
import './Breakfast.css';
import Searchbar from "../Searchbar/Searchbar"
const Breakfast = () => {
  const breakfast = [
    "Apple Juice",
    "New Testing Juice",
    "badam mix juice",
    "Kesar juice",
    "Test razor",  
  ];
   const breakfastprice = [
    " 150",
    "110",
    "150",
    "100",
    "1",  
  ];
  return (
    <div>
      <Searchbar/>
      <div className="deal">
        <h5 className="card-header ">JUICE</h5>
        <p className="text-muted"> 5 items</p>
        <hr />
<div className="">
 
        </div>
        </div>
    </div>
  );
}

export default Breakfast;
