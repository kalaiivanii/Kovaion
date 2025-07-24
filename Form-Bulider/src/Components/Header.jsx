import React from 'react';
import "../Styles/header.css";
import { FaChartBar, FaBell } from 'react-icons/fa';

const Header = () => {
  return (
    <div className="header">
      <div className="header-right">
        <button className="stat-button">
          Stat Mode <FaChartBar className="button-icon" />
        </button>
        <div className="icon-circle">
          <FaBell />
        </div>
        <img
          className="avatar"
          src="https://i.pravatar.cc/40"
          alt="User Avatar"
        />
      </div>
    </div>
  );
};

export default Header;
