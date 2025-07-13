import React from 'react';

import './Searchbar.css';
const Searchbar = () => {
  return (
   <> <div className="search-bar ">
        <input placeholder="Search for dishes" name="search" />
        <i className="fa fa-search "></i>
      </div><hr /></>
  );
}

export default Searchbar;
