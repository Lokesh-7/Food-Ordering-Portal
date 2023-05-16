import axios from 'axios';
import React, { Component, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link, useHistory } from "react-router-dom";
import Item from './items';
import VendorNavbar from './vendornavbar';

const Vendormenu = () => {
    let history = useHistory()
    const [email, set_email] = useState("")
    const [type, set_type] = useState("")
    const [items, set_items] = useState([])
    const [cur_name, set_cur_name] = useState("")
    const [cur_price, set_cur_price] = useState(0)
    const [cur_type, set_cur_type] = useState("veg")

    const additem = async (e) => {
        console.log("came here")

        let cur_item = {
            "email": email,
            "name": cur_name,
            "price": cur_price,
            "rating":0,
            "type": cur_type
        }
        
        await axios.post("http://localhost:4000/item/add", cur_item)
            .then(res => {
                console.log("came here 1")
                if (res.data.msg == "success") {
                    history.push("/vendor/menu")
                }
                else{
                    alert(res.data.msg)
                }
            })
            .catch(err => {
                alert(err)
                console.log("came here 2")
                console.log(err)
            })
    }
    useEffect(async () => {
        if (localStorage.getItem("email") && localStorage.getItem("type") == "vendor") {
            set_email(localStorage.getItem("email"))
            set_type(localStorage.getItem("type"))
            await axios.post("http://localhost:4000/item/getall", { email: localStorage.getItem("email") })
                .then(res => {
                    if (res.data.msg == "success") {
                        
                        set_items(res.data.details)
                        console.log("for printing items")
                        console.log(items)
                    }
                })
        }
        else {
            history.push('/')
        }
    }, [])


    return (
        <div>
            <VendorNavbar></VendorNavbar>
            <form onSubmit={e=>additem(e)}>
                <div className="form-row">
                    <div className="col">
                        <input type="text" value={cur_name} onChange={e=>set_cur_name(e.target.value)} className="form-control" placeholder="Name"/>
                    </div>
                    <div className="col">
                        <input type="text" value={cur_price} onChange={e=>set_cur_price(e.target.value)} className="form-control" placeholder="Price"/>
                    </div>
                    <div className="col">
                    <select value={cur_type} onChange={e=>set_cur_type(e.target.value)}>
                            <option value="veg">veg</option>
                            <option value="non-veg">non-veg</option>
                            
                        </select>
                    </div>
                    <div className="col">
                    <button type="submit" className="btn btn-primary">add</button>

                    </div>
                </div>
            </form>
            {
                items.map((e,indx)=>{
                    return(
                        <div key={indx}>
                        
                        <Item  props={e}></Item>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Vendormenu