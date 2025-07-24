import React from "react";
import { FaArrowUpRightDots } from "react-icons/fa6";
import { FaArrowTrendDown } from "react-icons/fa6";

import "../Styles/leads.css";
const Leads = ({ tile, percent, value, compare }) => {
  return (
 
      <div className="box">

        <div className="card1_top">
          <div className="para">{tile}</div>
          <div>
          <span className="no1">{value}</span>
          </div>
          
          
        </div>

        <div className="card1_botom">
          
           <div className="growth">
            <span className="icon_1">
              <FaArrowUpRightDots />
            </span>
            <span className="perc">{percent}</span>
          </div>
          <p className="word1">{compare}</p>
        </div>
      </div>

  );
};

export default Leads;
