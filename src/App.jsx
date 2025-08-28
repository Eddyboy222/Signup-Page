import React from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Signuppage from './Pages/Signuppage';
import Homepage from './Pages/Homepage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signuppage />} />
        <Route path="/homepage" element={<Homepage />} />
      </Routes> 
      </Router>
  )
}

export default App
