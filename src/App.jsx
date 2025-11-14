import React from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Signuppage from './Pages/Signuppage';
import Homepage from './Pages/Homepage';
import Login from './Pages/login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signuppage" element={<Signuppage />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
      </Routes> 
      </Router>
  )
}

export default App
