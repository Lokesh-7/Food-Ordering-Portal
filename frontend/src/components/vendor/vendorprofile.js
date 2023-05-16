import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link,useHistory } from "react-router-dom";

import VendorNavbar from './vendornavbar';

const Vendorprofile = () => {
    let history=useHistory()
    const [name, set_name] = useState("")
    const [email, set_email] = useState("")
    const [contact, set_contact] = useState(null)
    const [shop_name, set_shop_name] = useState("")
    const [password, set_password] = useState("")
    const [opening_time, set_opening_time] = useState("")
    const [closing_time, set_closing_time] = useState("")
    const [age, set_age] = useState(null)
    const [batch, set_batch] = useState("UG1")
    const [type, set_type] = useState("Vendor")
    const submit = async (e) => {

        e.preventDefault();
        console.log("came here")

        if (true) {
           let  cur_vendor = {
                "name": name,
                "email": email,
                "contact": contact,
                "shop_name": shop_name,
                "password": password,
                "opening_time": opening_time,
                "closing_time": closing_time
            }
            await axios.post("http://localhost:4000/vendor/update", cur_vendor)
                .then(res => {
                    if(res.data.msg=="success")
                    {
                        history.push('/vendor/profile')
                    }
                })
                .catch(err => {
                    console.log(err)
                }
                )
        }
        
    }

    useEffect(async()=>{
        let email=localStorage.getItem("email")
        await axios.post("http://localhost:4000/vendor/get",{"email":email})
        .then(res=>{
            console.log("came here 1")
            console.log(res)
            if(res.data.msg=="success")
            {
                console.log("came here 2")
                
                let details=res.data.details
                set_email(details.email)
                set_name(details.name)
                set_password(details.password)
                set_shop_name(details.shop_name)
                set_contact(details.contact)
                set_opening_time(details.opening_time)
                set_closing_time(details.closing_time)
            }
        })
        .catch(err=>{
            console.log(err)
        })
    },[])
    if (true) {
        return (
            <div>
                <VendorNavbar></VendorNavbar>
                <form onSubmit={e => submit(e)}>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input disabled type="email" className="form-control" id="exampleInputEmail1" value={email} onChange={e => set_email(e.target.value)} aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" value={password} onChange={e => set_password(e.target.value)} id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Name</label>
                        <input type="text" className="form-control" value={name} onChange={e => set_name(e.target.value)} id="exampleInputPassword1" placeholder="Name" />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">contact</label>
                        <input type="Number" className="form-control" value={contact} onChange={e => set_contact(e.target.value)} id="exampleInputPassword1" placeholder="Contact Number" />
                    </div>
                    
                    <div className="form-group">
                        <label for="exampleInputPassword1">Shop Name</label>
                        <input type="text" className="form-control" value={shop_name} onChange={e => set_shop_name(e.target.value)} id="exampleInputPassword1" placeholder="Enter your shop name" />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Opening Time</label>
                        <input type="text" className="form-control" value={opening_time} onChange={e => set_opening_time(e.target.value)} id="exampleInputPassword1" placeholder="Enter your opening time" />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Closing Time</label>
                        <input type="text" className="form-control" value={closing_time} onChange={e => set_closing_time(e.target.value)} id="exampleInputPassword1" placeholder="Enter your closing time" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
    
}

export default Vendorprofile