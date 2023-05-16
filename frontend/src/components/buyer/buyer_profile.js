import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link,useHistory } from "react-router-dom";


import BuyerNavbar from './buyer_navbar';

const Buyerprofile = () => {
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
            let cur_buyer = {
                "name": name,
                "email": email,
                "password":password,
                "contact": contact,
                "age": age,
                "batch": batch

            }
            
        
           
            await axios.post("http://localhost:4000/buyer/update", cur_buyer)
                .then(res => {
                    if(res.data.msg=="success")
                    {
                        history.push('/buyer/profile')
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
        await axios.post("http://localhost:4000/buyer/get",{"email":email})
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
                set_age(details.age)
                set_contact(details.contact)
                set_batch(details.batch)
            }
        })
        .catch(err=>{
            console.log(err)
        })
    },[])
    if (true) {
        return (
            <div>
                <BuyerNavbar></BuyerNavbar>
                <form onSubmit={e => submit(e)}>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" value={email} onChange={e => set_email(e.target.value)} aria-describedby="emailHelp" placeholder="Enter email" />
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
                        <label for="exampleInputPassword1">Age</label>
                        <input type="Number" className="form-control" value={age} onChange={e => set_age(e.target.value)} id="exampleInputPassword1" placeholder="Enter age" />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Batch</label>
                        <select value={batch} onChange={e=>set_batch(e.target.value)}>
                            <option value="UG2">UG2</option>
                            <option value="UG3">UG3</option>
                            <option value="UG4">UG4</option>
                            <option value="UG5">UG5</option>
                        </select>
                    </div>


                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
    
}

export default Buyerprofile