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
        <a href="#category-36070"><li>Hamra Burger</li></a>
<a href="#category-24741"><li>Burgers</li></a>
<a href="#category-25123"><li>Momo Platter</li></a>
<a href="#category-22999"><li>Pizza</li></a>
<a href="#category-26610"><li>Une Entrée</li></a>
<a href="#category-23481"><li>Appetizer</li></a>
<a href="#category-26294"><li>Frankie</li></a>
<a href="#category-22156"><li>JUICE</li></a>
<a href="#category-26377"><li>નાસ્તા</li></a>
<a href="#category-24849"><li>Fast Food</li></a>
<a href="#category-22555"><li>Sandwiches</li></a>
<a href="#category-24743"><li>Sweet</li></a>
<a href="#category-34539"><li>Demo</li></a>
<a href="#category-35305"><li>Test Purchase</li></a>
<a href="#category-37305"><li>Fish</li></a>

        </div>
      </div>
    </>
  );
};

export default Categories;
