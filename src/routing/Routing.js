import React, { Component } from 'react'

import { BrowserRouter as Router,Route, Routes } from "react-router-dom";

import Navbar from '../components/navbar/Navbar';
import Home from '../pages/landingPage/Home';
import Projects from '../pages/projects/Projects'
import Staking from '../pages/staking/Staking';
import Claimers from '../pages/claimers/Claimers';


class Routing extends Component {
  render() {
    return (
      <Router>
          <Navbar />
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/projects" element={<Projects/>} />
              <Route path="/staking" element={<Staking/>} />
              <Route path="/claimers" element={<Claimers/>} />
          </Routes>
      </Router>
    )
  }
}

export default Routing