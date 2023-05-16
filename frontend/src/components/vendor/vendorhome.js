import React, { Component, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link,useHistory } from "react-router-dom";
import VendorNavbar from './vendornavbar';

const Vendorhome=()=>{
    let history=useHistory()
    const [email,set_email]=useState("")
    const [type,set_type]=useState("")
    
    useEffect(()=>{
        if(localStorage.getItem("email")&& localStorage.getItem("type")=="vendor")
        {
            set_email(localStorage.getItem("email"))
            set_type(localStorage.getItem("type"))
        }
        else{
            history.push('/')
        }
    },[])
    
    
    return(
        <div>
            <VendorNavbar></VendorNavbar>
            <p>hello vendor {email}</p>
        </div>
    )
}

export default Vendorhome