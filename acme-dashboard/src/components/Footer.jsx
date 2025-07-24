// import React, {useState} from 'react'

import { RiArrowDropDownLine } from "react-icons/ri";

import { SiGooglemeet } from "react-icons/si";
import { AiOutlinePlus } from "react-icons/ai"
import "../Styles/footer.css"
import Table from './table/Table';
import Footer2 from './Footer2';
import Loginform from './Loginform';
const Footer = ({setloginform}) => {
// const[loginform,setloginform]=useState(false)   ()=>setloginform(true)
  return (
    <div className='large_table'>
        <div className="table1">
          <div className="table_para1">
            <p>Follow -ups due today</p>
            <div  className="add_button">
             
              <button  className='leads_button'>
                <span onClick={()=>setloginform(true)}className='plus_icon'><AiOutlinePlus/></span>
              </button>
              <p>Add Leads</p>
              
            </div>
          </div>
            <Table/>
        </div>
          <Footer2/>
    </div>
    
  )
}

export default Footer