import React from 'react'
import "../Styles/home.css"
import Header from './Header'
import StatCard from './Statcard'
import LeadsHeaders from './LeadsHeaders'
import Table from './Table'
const Home = () => {
  return (
    <div className='mainbarcon'>
        <Header/>
        <StatCard/>
         <LeadsHeaders/> 
         <Table/>
    </div>
  )
}

export default Home



