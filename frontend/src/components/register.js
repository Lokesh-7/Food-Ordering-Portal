import React, { Component, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navbar from './navbar';

const Register = () => {
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

        if (type == "Vendor") {
           let  cur_vendor = {
                "name": name,
                "email": email,
                "contact": contact,
                "shop_name": shop_name,
                "password": password,
                "opening_time": opening_time,
                "closing_time": closing_time
            }
            await axios.post("http://localhost:4000/vendor/add", cur_vendor)
                .then(res => {
                    console.log(res)
                })
                .catch(err => {
                    console.log(err)
                }
                )
        }
        else {
           let cur_buyer = {
                "name": name,
                "email": email,
                "password":password,
                "contact": contact,
                "age": age,
                "batch": batch

            }
            await axios.post("http://localhost:4000/buyer/add", cur_buyer)
                .then(res => {
                    console.log(res)
                })
                .catch(err => {
                    console.log(err)
                }
                )
        }
    }

    if (type == "Vendor") {
        return (
            <div>
                <Navbar></Navbar>
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
                    <div style={{ display: "flex", flexDirection: "row" }}>


                        <div className="form-group" style={{ flex: 1 }}>
                            <label>
                                <input
                                    type="radio"
                                    name="react-tips"
                                    value="Vendor"
                                    checked={type === "Buyer"}
                                    onChange={e => set_type("Buyer")}
                                    className="form-check-input"
                                />
                                Buyer
                            </label>
                        </div>
                        <div className="form-group" style={{ flex: 1 }}>
                            <label>
                                <input
                                    type="radio"
                                    name="react-tips"
                                    value="Buyer"
                                    checked={type === "Vendor"}
                                    onChange={e => set_type("Vendor")}
                                    className="form-check-input"
                                />
                                Vendor
                            </label>
                        </div>
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
    else {
        return (
            <div>
                <Navbar></Navbar>
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
                    <div style={{ display: "flex", flexDirection: "row" }}>


                        <div className="form-group" style={{ flex: 1 }}>
                            <label>
                                <input
                                    type="radio"
                                    name="react-tips"
                                    value="Vendor"
                                    checked={type === "Buyer"}
                                    onChange={e => set_type("Buyer")}
                                    className="form-check-input"
                                />
                                Buyer
                            </label>
                        </div>
                        <div className="form-group" style={{ flex: 1 }}>
                            <label>
                                <input
                                    type="radio"
                                    name="react-tips"
                                    value="Buyer"
                                    checked={type === "Vendor"}
                                    onChange={e => set_type("Vendor")}
                                    className="form-check-input"
                                />
                                Vendor
                            </label>
                        </div>
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

export default Register