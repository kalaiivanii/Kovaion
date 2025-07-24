import React from "react";
import { FaRegBell } from "react-icons/fa";
import { GiStarShuriken } from "react-icons/gi";
import { IoSearchOutline } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";
import "../Styles/header.css";
const Header = ({setSidebar2}) => {
 
  return (
    <div className="headers">
      <div className="headleft">
      <button 
      className="menu_icon">
       <span  onClick={()=>setSidebar2(true)}><TiThMenu/></span> 
      </button>

      <p id="word">Welcome Mark,</p>
      </div>
      <div className="head1">
      <div className="searchbar">
       
          <input type="text" placeholder="Search" />
          <span className="search_icon"><IoSearchOutline/></span>
      </div>
      <p className="bell">
        <FaRegBell />
      </p>
      <p className="star">
        <GiStarShuriken />
      </p>
      </div>
    </div>
  );
};

export default Header;
