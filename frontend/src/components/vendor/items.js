import axios from 'axios';
import React, { Component, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Item = ({ props }) => {

    const [name, set_name] = useState(props.name)
    const [price, set_price] = useState(props.price)
    const [type, set_type] = useState(props.type)
    const [ispresent, set_ispresent] = useState("true")
    const useEffect = (async () => {
        set_name(props.name)
        set_price(props.price)
        set_type(props.type)

    }, [])

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

    const upd = async () => {
        let cur_item = {
            "_id": props._id,
            "name": name,
            "price": price,
            "type": type
        }
        await axios.post("http://localhost:4000/item/update", cur_item)
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
                            <input type="text" class="form-control" placeholder="Name" value={name} onChange={e => set_name(e.target.value)} aria-label="Name" aria-describedby="basic-addon1" />
                        </div>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon1">Price</span>
                            </div>
                            <input type="text" class="form-control" placeholder="Price" value={price} onChange={e => set_price(e.target.value)} aria-label="Price" aria-describedby="basic-addon1" />
                        </div>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon1">Type</span>
                            </div>
                            <select value={type} onChange={e => set_type(e.target.value)}>
                                <option value="veg">veg</option>
                                <option value="non-veg">non-veg</option>
                    
                            </select>
                        </div>

                        <div>
                            <button onClick={e => del()}>Delete</button>
                            <button onClick={e => upd()}>Update</button>
                        </div>

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