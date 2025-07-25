import React from "react";
import "./Footer.css";
import footerimg from "../../assets/media/foodchow-logo.png";
import { Link } from "react-router-dom";
import Homecart from "../HomePage/Cart/Homecart";

const Footer = () => {
  return (
    <>
      <div className="footer fixed-bottom ">
        <span>Food Ordering System</span>
        <Link to="https://www.foodchow.com/free-demo">
          <img src={footerimg} />
        </Link>
      </div>

      <div className="mobile-footer  fixed-bottom">
        <h3 className="">Rs.0.00</h3>
       <Link to='/homecart'> <button className="footer-cart">  View Cart</button></Link>
      </div>
    </>
  );
};

export default Footer;
