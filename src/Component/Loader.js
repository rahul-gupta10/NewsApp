import React, { Component } from 'react'
import XOsX from "./XOsX.gif"
export default class Loader extends Component {
  render() {
    return (
      <div className='d-flex align-items-center justify-content-center' style={{height:""}}>
        <img src={XOsX} alt='Loading.....' style={{width:"40px",height:"40px"}}></img>
        <p>Trust me Duck is doing his best...</p>
      </div>
    )
  }
}
