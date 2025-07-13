// 1 https://www.foodchow.com/DealImage/2024-11-14_16-18-30.png // 2 https://www.foodchow.com/DealImage/2025-05-10_13-52-00.jpg
// 3 https://www.foodchow.com/DealImage/2025-05-19_11-18-52.jpeg

import React from "react";

import './MainMenu.css';
import Deal from "../Deals/Deal";

import deal_1 from "../../../assets/media/deal-1.png";
import deal_2 from "../../../assets/media/deal-2.jpg";
import deal_3 from "../../../assets/media/deal-3.jpeg";
import Searchbar from "../Searchbar/Searchbar";

const MainMenu = () => {
  return (
    <div className="main-menu ">
      
    <Searchbar/>
      <div className="deal">
        <h5 className="card-header ">Deals</h5>
        <p className="text-muted"> 3 items</p>
<div className="alldeals">
        <Deal imgurl={deal_1} alt="burgimg" title="My spcl deal" subtitle="save upto 20%" price="150"/>
      <Deal imgurl={deal_2} alt="carimg" title="Second Deal" subtitle="second" price="500.00"/>
         <Deal imgurl={deal_3} alt="thali" title="Third deal" subtitle="save upto 20%" price="400.00"/>
            
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
