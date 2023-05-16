import axios from 'axios';
import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Route, Link, useHistory } from "react-router-dom";
import Navbar from './navbar';
const Login = () => {
    let history = useHistory();
    const [email, set_email] = useState("")
    const [password, set_password] = useState("")

    const submit = async (e) => {

        e.preventDefault();
        console.log("came here")
        await axios.post("http://localhost:4000/common/login", { "email": email, "password": password })
            .then(res => {
                if (res.data.msg == "success") {
                    let details = res.data.details

                    localStorage.setItem("type", res.data.type)
                    localStorage.setItem("email", details.email)
                    console.log(localStorage.getItem("type"))
                    if (res.data.type == "vendor")
                    {
                        console.log("to go to vendor home")
                        history.push('/vendor/home')
                    }
                    else
                    {
                        console.log("to go to buyer home")
                        history.push('/buyer/home')
                    }
                }
                
            })
            .catch(err => {
                console.log(err)
            }
            )
    }

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

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Login