import React, { Component, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link,useHistory } from "react-router-dom";
import Navbar from './navbar';
const Home=()=>{
    const [email,set_email]=useState("")
    const [type,set_type]=useState("")
    let history=useHistory()
    useEffect(()=>{
        if(localStorage.getItem("email"))
        {
            set_email(localStorage.getItem("email"))
            set_type(localStorage.getItem("type"))
        }
    },[])
    
    if(email=="")
    {
        return(
            <div>
                 <Navbar></Navbar>
                <p>please login</p>
            </div>
        )
    }
    else{
        if(type=="vendor")
        {
            history.push("/vendor/home")
        }
        else{
            history.push("/buyer/home")
        }
    }
    return(
        <div>
            <Navbar></Navbar>
            <p>hello {email}</p>
        </div>
    )
}

export default Home