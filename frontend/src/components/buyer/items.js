import axios from 'axios';
import React, { Component, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Item = ({ props }) => {

    const [name, set_name] = useState(props.name)
    const [price, set_price] = useState(props.price)
    const [type, set_type] = useState(props.type)
    const [ispresent, set_ispresent] = useState("true")
    const [quantity,set_quantity]=useState(0)
    const useEffect = (async () => {
        set_name(props.name)
        set_price(props.price)
        set_type(props.type)

    }, [])

    const decreasequant=()=>{
        if(quantity!=0)
            set_quantity(quantity-1)
    }
    const del = async () => {
        await axios.post("http://localhost:4000/item/delete", { _id: props._id })
            .then(res => {
                if (res.data.msg == "success") {
                    set_ispresent("false")
                }
            })
            .catch(err => {
                console.log(err)
            })

    }

    

    const buy = async () => {
        let cur_order = {
            "item_id": props._id,
            "item_name": name,
            "item_price":props.price,
            "vendor_email":props.email,
            "status":"pending",
            "order_date": (new Date()).toString(),
            "buyer_email":localStorage.getItem("email"),
            "item_quantity":quantity,
            
        }
        await axios.post("http://localhost:4000/order/add", cur_order)
            .then(res => {
                if (res.data.msg == "success")
                    console.log("success")
            })
            .catch(err => {
                console.log(err)
            })
    }
    if (ispresent == "true") {
        return (
            <div>
                <div className="card">
                    <div className="card-body">
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon1">Name</span>
                            </div>
                            <input disabled type="text" class="form-control" placeholder="Name" value={name} aria-label="Name" aria-describedby="basic-addon1" />
                        </div>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon1">Price</span>
                            </div>
                            <input disabled type="text" class="form-control" placeholder="Price" value={price} aria-label="Price" aria-describedby="basic-addon1" />
                        </div>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon1">Type</span>
                            </div>
                            <input disabled type="text" class="form-control" placeholder="Type" value={type}  aria-label="Price" aria-describedby="basic-addon1" />
                        </div>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon1">Quantity</span>
                            </div>
                            <div style={{display:"flex",flexDirection:"row"}}>
                            <button onClick={e => decreasequant()}>-</button>
                            <p>{quantity}</p>
                            <button onClick={e => set_quantity(quantity+1)}>+</button>
                        </div>
                        </div>
                        
                        {
                            quantity>0?<button onClick={e => buy()}>Buy</button>:null
                        }   

                    </div>
                </div>

            </div>
        )
    }
    else {
        return (
            <div></div>
        )
    }

}

export default Item