import React from "react";
import logo from "../Navbar/logo.jpg";
import "./Navbar.css";

const Navbar=() =>{
 
  return (
    <>
      

      <nav className="navbar bg-body-tertiary fixed-top">
        
        <div className="container-fluid border-bottom shadow main row-md  ">
          {/* Logo and Name of restarant */}
         
          <div className="leftpart ">
          
            <a className="logo" href="/">
              <img src={logo} alt="logo" />
            </a>
            <div className="name">
              <h3>FoodChow Demo India</h3>
              <span>
                <i className="fa-solid fa-location-dot"></i> Surat,Gujarat,
                India
              </span>
            </div>
          </div>


    {/* Middle part of navbar */}
          <div className="about ">
            <span className="">Restaurat is Open</span>
            <p className="text-muted ">
              Timing 10:00 am - 04:00 pm <i className="fa fa-info-circle" />
            </p>
          </div>


   {/* Last part of navbar / buttons */}
          <div className="right-part ">
            <button>Choose Services</button>

            <button>Book Now</button>

            <button className="rounded-5">
              <i className="fa fa-phone " /> &nbsp;
              675198515
            </button>

            <button className="rounded-5">
              <i className="fa fa-globe me-2 " />
              en
            </button>
          </div>
        </div>
       

{/* second row / menu links */}
        <div className="menu"><a href='/'className="menu-link ">Main Menu</a>
        <a href='/breakfast' className="menu-link">Breakfast </a>
        <a href='/dinnermenu' className="menu-link">DinnerMenu</a></div>
      </nav>
    </>
  );
}

export default Navbar;
