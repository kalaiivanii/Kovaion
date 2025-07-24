import React from 'react';
import { Link } from 'react-router-dom';

import '../Styles/leadsmain.css';

const Leadsmain = () => {
  return (
    <div className="leads-header-container">
      <h2 className="leads-title">Leads</h2>
      <div className="leads-breadcrumb">
        <Link to="/" className="breadcrumb-link">Home</Link> 
        <span className="breadcrumb-separator">{'>'}</span>
        <span className="breadcrumb-link">Stage 2</span>
        <span className="breadcrumb-separator">{'>'}</span>
        <span className="breadcrumb-current">Stage 3</span>
      </div>
    </div>
  );
};

export default Leadsmain;
