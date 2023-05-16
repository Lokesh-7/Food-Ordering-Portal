import axios from 'axios';
import React, { Component, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link,useHistory } from "react-router-dom";
import VendorNavbar from './vendornavbar';

const Vendorstats=()=>{
    let history=useHistory()
    const[pending,set_pending]=useState(0)
    const[completed,set_completed]=useState(0)
    const[allorders,set_allorders]=useState(0)
    
    useEffect(()=>{
        axios.post("http://localhost:4000/order/stats",{vendor_email:localStorage.getItem("email")})
        .then(res=>{
            console.log(res.data)
            set_pending(res.data.details.pending)
            set_completed(res.data.details.completed)
            set_allorders(res.data.details.allorders)
        })
    },[])
    
    
    return(
        <div>
            <VendorNavbar></VendorNavbar>
            <p>Total orders {allorders}</p>
            <p>Pending orders {pending}</p>
            <p>completed orders {completed}</p>
        </div>
    )
}

export default Vendorstats