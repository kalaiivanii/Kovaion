import React from 'react'
import { LuSquareMenu } from "react-icons/lu";
import { RxDashboard } from "react-icons/rx";
import { IoMdPersonAdd } from "react-icons/io";
import { IoMdContacts } from "react-icons/io";
import { LuFileSliders } from "react-icons/lu";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { IoCallOutline } from "react-icons/io5";
import { IoBulbOutline } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { IoDocumentsOutline } from "react-icons/io5";
import { GoProjectSymlink } from "react-icons/go";

import "../Styles/sidebar.css"
const Sidebar = ({items}) => {
  return (
    <div className='sidecontainer'>
        <div className="menu">
            <p><LuSquareMenu /></p>
        </div>

        {items.map((item) =>(
            <div className="maincon">
                <button className='icons'>
                    {item.menu}
                </button>
                <button className='label'  onClick={() => console.log("hii")}>{item.label}</button>
                
            </div>
        ))}
    </div>
  )
}

export default Sidebar     