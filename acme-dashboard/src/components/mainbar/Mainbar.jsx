import React, { useState } from "react";

import "./mainbar.css";

import Table from "../table/Table";
import Header from "../Header";
import Leads from "../Leads";
import Revenu from "../Revenu";
import Footer from "../Footer";
import Sidebar from "../Sidebar2";
import Loginform from "../Loginform";
//  import Sidebar2 from '../sidebar/Sidebar';

const Mainbar = () => {
  const leadsdata = [
    {
      tile: "Leads",
      value: "24",
      percent: "5%",
      compare: "vs last month",
    },
    {
      tile: "Conversion Rate",
      value: "16%",
      percent: "2%",
      compare: "vs last month",
    },
    {
      tile: "Deals Closed",
      value: "12",
      percent: "4%",
      compare: "vs last month",
    },
  ];
  const[sidebar2,setSidebar2]=useState(false)
  const[loginform,setloginform]=useState(false)
  return (
    <div className="container1">
      <div className="main_con">
        <div>
          <Header setSidebar2={setSidebar2}/>
          {
            sidebar2 && (
              <>
              <div className="backdrop">

              </div>
              <Sidebar setSidebar2 ={setSidebar2}/>
              </>
            )
          }
        </div>
        
        <div className="main_line1">
          <hr />
        </div>

        <div className="leads_box">
          {leadsdata.map((each) => {
            return (
              <div className="leads_card">
                <Leads
                  tile={each.tile}
                  value={each.value}
                  percent={each.percent}
                  compare={each.compare}
                  // icon:"up"
                />
              </div>
            );
          })}
        </div>

        <div>
          <Revenu />
        </div>
        <div>
          <Footer setloginform={setloginform} />
          {
            loginform &&(
              <Loginform setloginform={setloginform}/>
            )
          }
        </div>
        
      </div>
    </div>
  );
};

export default Mainbar;
