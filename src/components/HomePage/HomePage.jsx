import React from 'react';
import MainMenu from './MainMenu/MainMenu';
import './HomePage.css';

import Breakfast from './Breakfast/Breakfast';
import { BrowserRouter ,Route, Routes } from 'react-router-dom';
import DinnerMenu from './DinnerMenu/DinnerMenu';

const HomePage = () => {
  return (
    <BrowserRouter> <div className='col-6  homepage rounded-4 shadow m '> 
    
      <Routes>
         <Route path="/breakfast" element={<Breakfast/>}/>  <Route path="/" element={<MainMenu/>}/><Route path="/dinnermenu" element={<DinnerMenu/>}/>
      </Routes>
     
    </div></BrowserRouter>
 
  );
}

export default HomePage;
