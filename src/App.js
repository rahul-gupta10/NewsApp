import './App.css';
import React, { Component } from 'react'
import Navbar from './Component/Navbar';
import Newscontainer from './Component/Newscontainer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {

  render() {
    // console.log(process.env.REACT_DEMO_ENV)
    return (
      <Router>
        <Navbar cntry={this.countryHandler}/>
        <Routes>
            <Route exact path="/" element={<Newscontainer  key='general'category= "general" />}/>
            <Route exact path="/home" element={<Newscontainer  key='home'category= "general" />}/>
            <Route exact path="/sport" element={<Newscontainer key='sports' category= "sports" />}/>
            <Route exact path="/business" element={<Newscontainer key='business' category= "business" />}/>
        </Routes>
      </Router>
    )
  }
}
