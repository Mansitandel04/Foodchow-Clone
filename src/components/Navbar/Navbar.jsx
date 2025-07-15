// import React, { useState } from "react";
// import logo from "../Navbar/logo.jpg";
// import "./Navbar.css";

// const Navbar=() =>{

//   return (

//    <>
//       <nav className="navbar bg-body-tertiary fixed-top">
//         <div className="container-fluid border-bottom shadow main row-md  ">
//           {/* Logo and Name of restarant */}

//           <div className="leftpart ">

//             <a className="logo" href="/">
//               <img src={logo} alt="logo" />
//             </a>
//             <div className="name">
//               <h3>FoodChow Demo India</h3>
//               <span>
//                 <i className="fa-solid fa-location-dot"></i> Surat,Gujarat,
//                 India
//               </span>
//             </div>
//           </div>

// {/* <div className="nav-toggler" ><i className="fa-solid fa-bars" ></i></div> */}
//     {/* Middle part of navbar */}
//           <div className="about ">
//             <span className="">Restaurat is Open</span>
//             <p className="text-muted ">
//               Timing 10:00 am - 04:00 pm <i className="fa fa-info-circle" />
//             </p>
//           </div>

//    {/* Last part of navbar / buttons */}
//           <div className="right-part ">
//             <button>Choose Services</button>

//             <button>Book Now</button>

//             <button className="rounded-5">
//               <i className="fa fa-phone " /> &nbsp;
//               675198515
//             </button>

//             <button className="rounded-5">
//               <i className="fa fa-globe me-2 " />
//               en
//             </button>
//           </div>

//         </div>

// {/* second row / menu links */}
//         <div className="menu"><a href='/'className="menu-link ">Main Menu</a>
//         <a href='/breakfast' className="menu-link">Breakfast </a>
//         <a href='/dinnermenu' className="menu-link">DinnerMenu</a></div>
//       </nav>
//     </>
//   );
// }

// export default Navbar;
import React, { useState  ,useEffect} from "react";
import logo from "../Navbar/logo.jpg";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  // for tooglemenu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // check restaurat is open or not
  const openStatusCheck = () => {
    const hours = getHours();
    const minutes = getMinutes();
    const totalMinutes = hours * 60 + minutes;


      // Restaurant is open from 11:30 AM (11:30) to 4:00 PM (16:00)
    const openTime = 11 * 60 + 30; // 11:30 AM in minutes
    const closeTime = 16 * 60;     // 4:00 PM in minutes

    setIsOpen(totalMinutes >= openTime &&  totalMinutes < closeTime);  };

  
 
  
  return (
    <>
      <nav className="navbar bg-body-tertiary fixed-top">
        <div className="container-fluid border-bottom shadow main row-md">
          {/* Logo and Name of restaurant */}
          <div className="leftpart">
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

          {/* Hamburger menu for mobile */}
          <div className="nav-toggler" onClick={toggleMenu}>
            <i className="fa-solid fa-bars"></i>
          </div>

          {/* Middle part of navbar */}
          <div className={`about ${isMenuOpen ? "mobile-visible" : ""}`}>
            <span className={isOpen ? "open-status open" : "open-status closed"}>Restaurant is {isOpen ? "open" : "close"}</span>
            <p className="text-muted">
              Timing 10:00 am - 04:00 pm <i className="fa fa-info-circle" />
            </p>
          </div>

          {/* Last part of navbar / buttons */}
          <div className={`right-part ${isMenuOpen ? "mobile-visible" : ""}`}>
            <button>Choose Services</button>
            <button>Book Now</button>
            <button className="rounded-5">
              <i className="fa fa-phone" /> &nbsp; 675198515
            </button>
            <button className="rounded-5">
              <i className="fa fa-globe me-2" />
              en
            </button>
          </div>
        </div>

        {/* second row / menu links */}
        <div className="menu container-fluid">
          <a href="/" className="menu-link">
            Main Menu
          </a>
          <a href="/breakfast" className="menu-link">
            Breakfast
          </a>
          <a href="/dinnermenu" className="menu-link">
            DinnerMenu
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
