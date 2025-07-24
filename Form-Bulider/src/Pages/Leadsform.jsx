import React from 'react'
import Header from '../Components/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "../Styles/leadsform.css"
import Leadsmain from '../Components/Leadsmain'
import Adddetails from '../Components/Adddetails'
import Home from '../Components/Home';

const Leadsform = () => {
return (
    <Router>
      <Routes>
        {/* Home route */}
        <Route path="/" element={<Home />} />

        <Route
          path="/leadsform"
          element={
            <div className="leadsmaincon">
              <Header />
              <Leadsmain />
              <Adddetails />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default Leadsform