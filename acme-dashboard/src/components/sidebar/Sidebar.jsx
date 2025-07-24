
import { RxDashboard } from "react-icons/rx";
import { FaTasks } from "react-icons/fa";
import { IoCalendarClearOutline } from "react-icons/io5";
import { GiThreeBurningBalls } from "react-icons/gi";
import { MdOutlineAccountCircle } from "react-icons/md";
import { MdOutlineCameraRoll } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { TiFlowMerge } from "react-icons/ti";
import { PiRadio } from "react-icons/pi";
import { MdOutlineLightbulb } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { BsPersonCircle } from "react-icons/bs";

import "./sidebar.css";

const Sidebar = () => {
  return (
    
      <div className="container">
        <div className="sidebar_cont">
          <div className="acme">Acme - Crop</div>
          <div className="list1">
            <ul className="menu1">
              {/* <li>Acme - Dashboard</li> */}
              <li className="menu_item1">
                <RxDashboard className="icon" />
                <span>Dashboard</span>
              </li>
              <li className="menu_item1">
                <FaTasks className="icon" />
                <span>My Tasks</span>
              </li>
              <li className="menu_item1">
                <IoCalendarClearOutline className="icon" />
                <span>Meetings</span>
              </li>
            </ul>
          </div>

          <div className="line1"></div>
          <div className="list2">
            <p id="sales">Sales</p>
            <ul className="menu2">
              <li className="menu_item2">
                <GiThreeBurningBalls className="icon" />
                <span>Leads</span>
              </li>
              <li className="menu_item2">
                <MdOutlineAccountCircle className="icon" />
                <span>Accounts</span>
              </li>
              <li className="menu_item2">
                <MdOutlineCameraRoll className="icon" />
                <span>Deals</span>
              </li>
              <li className="menu_item2">
                <MdOutlineAccountCircle className="icon" />
                <span>Contant</span>
              </li>
              <li className="menu_item2">
                <FaPhoneVolume className="icon" />
                <span>Calls</span>
              </li>
              <li className="menu_item2">
                <TiFlowMerge className="icon" />
                <span>Workflow</span>
              </li>
            </ul>
          </div>

          <div className="line1"></div>

          <div className="list3">
            <p id="mark">Marketing</p>
            <ul className="menu3">
              <li className="menu_item3">
                <PiRadio className="icon" />
                <span>Campaign</span>
              </li>
              <li className="menu_item3">
                <MdOutlineLightbulb className="icon" />
                <span>Opportunites</span>
              </li>
              <li className="menu_item3">
                <IoDocumentTextOutline className="icon" />
                <span>Documents</span>
              </li>
            </ul>
          </div>

          <div className="line3"></div>

          <div className="list4">
            <ul className="menu4">
              <li className="menu_item4">
                <CiSettings className="icon" />
                <span>Settings</span>
              </li>
              <li className="menu_item4">
                <IoMdHelpCircleOutline className="icon" />
                <span>Help & support</span>
              </li>
            </ul>
          </div>

          <div className="profile">
            <div className="profile_box">
              <div className="mod1">
                <BsPersonCircle />
              </div>
              <div className="mod2">My Profile</div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Sidebar;
