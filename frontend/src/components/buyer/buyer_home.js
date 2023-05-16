import React, { Component, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link,useHistory } from "react-router-dom";
import BuyerNavbar from './buyer_navbar';

const Buyerhome=()=>{
    let history=useHistory()
    const [email,set_email]=useState("")
    const [type,set_type]=useState("")
    
    useEffect(()=>{
        if(localStorage.getItem("email")&& localStorage.getItem("type")=="buyer")
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
            <BuyerNavbar></BuyerNavbar>
            <p>hello buyer {email}</p>
        </div>
    )
}

export default Buyerhome