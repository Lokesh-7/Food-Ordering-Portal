import axios from 'axios';
import React, { Component, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link, useHistory } from "react-router-dom";


import Orders from './order';
import VendorNavbar from './vendornavbar';

const VendorOrderpage = () => {
    console.log("came here")
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
        if (true) {
            
            await axios.post("http://localhost:4000/order/getallvendor",{vendor_email:localStorage.getItem("email")})
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

            {
                items.map((e,indx)=>{
                    return(
                        <div key={indx}>
                        
                        <Orders  props={e}></Orders>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default VendorOrderpage