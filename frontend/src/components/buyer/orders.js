import axios from 'axios';
import React, { Component, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const Orders = ({ props }) => {
    return (
        <div>
            <div className="card">
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
                        <input disabled type="text" class="form-control" placeholder="Price" value={props.item_quantity*props.item_price} aria-label="Price" aria-describedby="basic-addon1" />
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
                        <input disabled type="text" class="form-control" placeholder="Type" value={props.status} aria-label="Quantity" aria-describedby="basic-addon1" />
                    </div>
                    


                </div>
            </div>

        </div>
    )
}

export default Orders