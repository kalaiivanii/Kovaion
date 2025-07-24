import React from "react";
import { FaSearch, FaFilter } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../Styles/leadsheaders.css";

const LeadsHeaders = () => {
     const navigate = useNavigate();

  const handleAddClick = () => {
    navigate("/leadsform"); 
  };
  return (
    <div className="leads-header">
      <div className="header-left">
        <h2>Total Leads</h2>
        <p>All leads in one place</p>
      </div>

      <div className="header-right">
        <select className="dropdown">
          <option>Last 7 days</option>
          <option>Last 20 days</option>
          <option>Last 30 days</option>
        </select>

        <div className="search-box">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search..." />
        </div>

        <button className="filter-btn">
          <FaFilter />
        </button>

        <button className="add-btn" onClick={handleAddClick}>+ Add Leads</button>
      </div>
    </div>
  );
};

export default LeadsHeaders;
