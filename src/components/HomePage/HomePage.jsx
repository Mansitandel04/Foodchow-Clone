import React from 'react';
import MainMenu from './MainMenu/MainMenu';
import './HomePage.css';

import Breakfast from './Breakfast/Breakfast';
import { Route, Routes } from 'react-router-dom';
import DinnerMenu from './DinnerMenu/DinnerMenu';

const HomePage = () => {
  return (
   <div className='col-6 homepage rounded-4 shadow  '>
    
  <Routes>
    <Route path="/breakfast" element={<Breakfast />} />
    <Route path="/" element={<MainMenu />} />
    <Route path="/dinnermenu" element={<DinnerMenu />} />
  </Routes>

</div>

 
  );
}

export default HomePage;
