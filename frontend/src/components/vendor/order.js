import axios from 'axios';
import React, { Component, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const Orders = ({ props }) => {
    const [status, set_status] = useState(props.status)

    const next = async () => {
        let cur_status = status
        if (status == "pending") {
            await axios.post("http://localhost:4000/order/stats",{vendor_email:localStorage.getItem("email")})
            .then(res=>{
                if(res.data.msg=="success")
                {
                    console.log(res.data.details)
                    console.log((res.data.details.accepted+res.data.details.cooking))
                    if((res.data.details.accepted+res.data.details.cooking)<10)
                        cur_status="accepted"
                    else{
                        console.log("came here ",(res.data.details.accepted+res.data.details.cooking))
                        window.alert("you can't have more than 10 working orders")
                    }
                }
            })
            .catch(err=>{
                console.log(err)
            })
            
            
            
        }
        else if (status == "accepted") {
            cur_status="cooking"
            
        }
        else if (status == "cooking") {
            cur_status="ready for pickup"
            
        }
        else if (status == "ready for pickup") {
            cur_status="completed"
            
        }

        await axios.post("http://localhost:4000/order/update", { _id: props._id, status: cur_status })
            .then(res => {
                if (res.data.msg == "success")
                    set_status(cur_status)
            })
            .catch(err => {
                console.log(err)
            })

    }

    const reject = async () => {

        await axios.post("http://localhost:4000/order/update", { _id: props._id, status: "rejected" })
            .then(res => {
                if (res.data.msg == "success")
                    set_status("rejected")
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (

        <div>
            {
                status!="rejected"?<div className="card">
                    <div className="card-body">
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon1">Name</span>
                            </div>
                            <input disabled type="text" class="form-control" placeholder="Name" value={props.item_name} aria-label="Name" aria-describedby="basic-addon1" />
                        </div>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon1">Total Price</span>
                            </div>
                            <input disabled type="text" class="form-control" placeholder="Price" value={props.item_quantity * props.item_price} aria-label="Price" aria-describedby="basic-addon1" />
                        </div>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon1">Order Date</span>
                            </div>
                            <input disabled type="text" class="form-control" placeholder="Type" value={props.order_date} aria-label="Date" aria-describedby="basic-addon1" />
                        </div>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon1">Quantity</span>
                            </div>
                            <input disabled type="text" class="form-control" placeholder="Type" value={props.item_quantity} aria-label="Quantity" aria-describedby="basic-addon1" />
                        </div>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon1">Status</span>
                            </div>
                            <input disabled type="text" class="form-control" placeholder="Type" value={status} aria-label="Quantity" aria-describedby="basic-addon1" />
                        </div>
                        <div style={{ display: 'flex', flexDirection: "row" }}>
                            {status != "completed" ? <button onClick={e => next()}>Next</button> : null}
                            {status == "pending" ? <button onClick={e => reject()}>Reject</button> : null}
                        </div>



                    </div>
                </div>:null
            }

        </div>
    )
}

export default Orders