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


import "./App.css"
import Sidebar from './Components/Sidebar'
import Home from './Components/Home';
import Leadsform from './Pages/Leadsform';
import LeadsHeaders from './Components/LeadsHeaders';
const App = () => {
  
  const  menuitems=[
    {
      menu:<RxDashboard/>,
      label:"Dashboard"
    },
    {
      menu:<IoMdPersonAdd/>,
      label:"Lead"
    },
    {
      menu:<IoMdContacts/>,
      label:"Contacts"
    },
    {
      menu:<LuFileSliders/>,
      label:"Accounts"
    },
    {
      menu:<AiOutlineThunderbolt/>,
      label:"Deals"
    },
    {
      menu:<IoCallOutline/>,
      label:"Calls"
    },
    {
      menu:<IoBulbOutline/>,
      label:"Tasks"
    },
    {
      menu:<CiCalendar/>,
      label:"Meetings"
    },
    {
      menu:<HiOutlineSpeakerphone/>,
      label:"Campaign"
    },
    {
      menu:<IoDocumentsOutline/>,
      label:"Documents"
    },
    {
      menu:<GoProjectSymlink/>,
      label:"Projects"
    }

  ]
  return (
    <div className='container'>
       <Sidebar items={menuitems}/>
       {/* <Home/> */}
       <Leadsform/>
    
       
    </div>
  )
}

export default App