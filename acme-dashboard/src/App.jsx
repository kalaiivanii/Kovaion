import React from 'react'
import Sidebar from './components/sidebar/Sidebar';
import Mainbar from './components/mainbar/Mainbar';

import "./App.css"
import Loginform from './components/Loginform';

const App = () => {
  return (
    <div className="main">
      <Sidebar/>
      <Mainbar/>
      {/* <Loginform/> */}
    </div>

  )
}

export default App