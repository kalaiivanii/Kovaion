import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiCircleChevRight } from "react-icons/ci";
import { SiGooglemeet } from "react-icons/si";

import "../Styles/footer2.css";
const Footer2 = () => {
  const list_data = [
    { value: "01" },
    { value: "02" },
    { value: "03" },
    { value: "04" },
    { value: "05" },
    { value: "06" },
    { value: "07" },
    { value: "08" },
  ];

  const para_data = [
    {
      date: "Weekly Sync",
      time: "9:00 - 10:00 AM",
      icon: <SiGooglemeet />,
    },
    {
      date: "Sales Weekly",
      time: "12:00 - 02:00 PM",
      icon: <SiGooglemeet />,
    },
  ];
  return (
    <div className="table2_para2">
      <div className="table2_header">
        <div className="table2_con1">
          <p>Upcoming Meetings</p>
        </div>
        <div className="table2_con2">
          <span id="june">June</span>
          <p className="table_icon">
            <RiArrowDropDownLine />
          </p>
        </div>
      </div>

      {/* (`)This is backtrick symbol there is many differnece between ("") and backtrick symbol both are denote strings but in ("") we canot specifly the variable and it is consider as string but in backtrick they consider as variable */}

      {/* so {` list ${each.value  === "05" ? "list5" : " "}} */}

      {/* In this statement (==) only check the value not the type  but in (===) check the type and value (===) is safe */}

      <div className="list_box">
        {list_data.map((each) => (
          <div className={`list ${each.value === "05" ? "list5" : ""}`}>
            {each.value}
          </div>
        ))}
        <div>
          <p className="arrow_icon">
            <CiCircleChevRight />
          </p>
        </div>
      </div>

      <div>
        {para_data.map((each) => (
          <div className="table_box">
            <p className="table_box_con">{each.date}</p>
            <div className="time_icon">
              <p className="table_time">
                {each.time}
                <span className="table_icons">
                  {/* <SiGooglemeet /> */}
                  {each.icon}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer2;
