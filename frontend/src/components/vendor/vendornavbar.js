import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const VendorNavbar=()=>{
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light ">
  <a className="navbar-brand" href="/">Shopify</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
    
      <li className="nav-item active">
        <a className="nav-link" href="/vendor/profile">Profile</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/vendor/menu">Menu</a>
      </li>

      <li className="nav-item">
        <a className="nav-link" href="/vendor/orders">Orders</a>
      </li>

      <li className="nav-item">
        <a className="nav-link" href="/vendor/stats">Stats</a>
      </li>
      
    </ul>
    
  </div>
</nav>

        </div>
    )
}

export default VendorNavbar