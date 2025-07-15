import React from "react";
import "./Categories.css";
import { Link } from "react-router-dom";

const Categories = () => {

    

  return (
    <>
      <div className="col-2 categories rounded-4 shadow  m-2">
        <h3 className=" m-0 ">CATEGORIES</h3>
        <hr />
        {/* options formenu  */}
        <div className="ul ">
         <a href="/"> <li> Deals</li></a>
        <a href="/">  <li> Hamra Burger</li></a>
          <a href="/"><li> Burgers</li></a>
        <a href="/">  <li> Momo Platter </li></a>
         <a href="/"> <li> Pizza</li></a>
         <a href="/"><li> Une Entrée </li></a>
         <a href="/"> <li> Appetizer </li></a>
         <a href="/"> <li> Frankie</li></a>
        <a href="/breakfast">  <li> JUICE </li></a>
          <a href="/breakfast"> <li>નાસ્તા </li></a>
        <a href="/"> <li> Fast Food </li></a>
         <a href="/"> <li> Sandwitches</li></a>
           <a href="/"> <li> Sweet</li></a>
            <a href="/">   <li>Demo</li></a>
             <a href="/">   <li> Test Purches</li></a>
               <a href="/">  <li> Fish</li></a>
        </div>
      </div>
    </>
  );
};

export default Categories;
