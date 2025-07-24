import React from "react";
import { FaArrowRight } from "react-icons/fa";
import "../Styles/insights.css";
const Insights = () => {
  const revenudata = [
    {
      revenu_title: "Deals Risk Alret",
      revenu_value:
        "4 deals are at risk. Check them to save deals worth $12.5k"
    },
    {
      revenu_title: "Likely Win",
      revenu_value: "2 deals are most likely to be closed with 85% chances"
    },
    {
      revenu_title: "Cold Deal",
      revenu_value: "4 deals are at risk. Check them to save deals worth $12.5k"
    }
  ];

  return (
    <div className="cont">
      {revenudata.map((each) => (
        <div className="con">
          <div className="con_con">
            <p className="conpara">{each.revenu_title}</p>
            <span className="con_icon">
              <FaArrowRight />
            </span>
          </div>
          <p className="con_para">{each.revenu_value}</p>
        </div>
      ))}

      
    </div>
  );
};

export default Insights;
