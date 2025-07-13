import React from "react";
import "./Categories.css";
import { Link } from "react-router-dom";

const Categories = () => {

    

  return (
    <>
      <div className="col-3 categories rounded-4 shadow m-3 ">
        <h3 className=" m-0 ">CATEGORIES</h3>
        <hr />
        {/* options formenu  */}
        <div className="ul ">
         <a href="/mainmenu"> <li> Deals</li></a>
        <a href="/mainmenu">  <li> Hamra Burger</li></a>
          <a href="/mainmenu"><li> Burgers</li></a>
        <a href="/mainmenu">  <li> Momo Platter </li></a>
         <a href="/mainmenu"> <li> Pizza</li></a>
         <a href="/mainmenu"><li> Une Entrée </li></a>
         <a href="/mainmenu"> <li> Appetizer </li></a>
         <a href="/mainmenu"> <li> Frankie</li></a>
        <a href="/breakfast">  <li> JUICE </li></a>
          <a href="/breakfast"> <li>નાસ્તા </li></a>
        <a href="/mainmenu"> <li> Fast Food </li></a>
         <a href="/mainmenu"> <li> Sandwitches</li></a>
           <a href="/mainmenu"> <li> Sweet</li></a>
            <a href="/mainmenu">   <li>Demo</li></a>
             <a href="/mainmenu">   <li> Test Purches</li></a>
               <a href="/mainmenu">  <li> Fish</li></a>
        </div>
      </div>
    </>
  );
};

export default Categories;
