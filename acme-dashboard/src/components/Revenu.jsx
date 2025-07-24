import React from "react";

import { GiStarShuriken } from "react-icons/gi";
import { FaArrowRight } from "react-icons/fa";

import rating from "../assets/rating.png";
import "../Styles/revenu.css";
import Insights from "./Insights";
const Revenu = () => {
  return (
    <div className="revenu_box">
      <div className="lbox1">
        <p className="lpara1">Revenu</p>
        <img className="img1" src={rating} alt="" />
      </div>

      <div className="lbox2">
        <div className="nav1">
          <p className="lpara2">Insights</p>
          <span className="licon">
            <GiStarShuriken />
          </span>
        </div>
        <div>
          <Insights/>
        </div>
      </div>
    </div>
  );
};

export default Revenu;
