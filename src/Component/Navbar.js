import React, { Component } from 'react'
import  { Link }  from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">NewApp</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/sport">Sport</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/business">business</Link>
                </li>
            </ul>
            </div>
            {/* <div className="d-flex" style={{marginTop:"-20px"}}>
            <li className="nav-item dropdown">
              <p className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Country
              </p>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><Link className="dropdown-item"   to="/in">Bharat</Link></li>
                <li><Link className="dropdown-item" to="/us">America</Link></li>
                <li><Link className="dropdown-item" to="/il">Israel</Link></li>
                <li><Link className="dropdown-item" to="/ru">Russia</Link></li>
              </ul>
              </li>
            </div> */}
        </div>
        </nav>
      </>
    )
  }
}
