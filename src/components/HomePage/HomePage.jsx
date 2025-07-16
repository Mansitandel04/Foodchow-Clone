import React from 'react';
import MainMenu from './MainMenu/MainMenu';
import './HomePage.css';

import { Route, Routes } from 'react-router-dom';


const HomePage = () => {
  return (
   <div className='col-7  homepage rounded-4 shadow  '>
    
  <Routes>
    
    <Route path="/" element={<MainMenu />} />
    
  </Routes>

</div>

 
  );
}

export default HomePage;
