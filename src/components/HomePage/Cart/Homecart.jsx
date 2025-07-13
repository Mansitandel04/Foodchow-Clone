import React from 'react';
import "./Homecart.css";
import emptycart from "../../../assets/media/emptyCart.png"

const Homecart = () => {
  return (
     <>
      <div className="col-3 homecart rounded-4 shadow m-3">

         <div> <h3 className=' m-0 '>Your Cart</h3></div><hr />
  
      <img src={emptycart} alt="empty" />
      <label>Your Cart is Empty! Add Some Delicious Food Items And Satisfy Your Cravings.</label>
 
    </div>
    <hr />
     </>
  );
}

export default Homecart;
