const vendorRouter = require('express').Router();

const vendor_model = require("../models/vendor");


vendorRouter.post('/add',
async (req,res)=>{
    try{
        await vendor_model.findOne({email:req.body.email})
        .then(async e=>{
            if(e){
                res.status(500).json({msg:'user already exists'})
            }
            else{
                let curr_vendor=new vendor_model({...req.body})
                const save_vendor=await curr_vendor.save()
                res.status(200).json(curr_vendor)
            }
        })
        .catch(err=>{
            console.log(err)
            res.status(500).json({msg:"problem at server"})
        })
    }
    catch{
        res.status(500).json({msg:"problem at server"})
    }
}
)

vendorRouter.post('/get',
async (req,res)=>{
    try{
        await vendor_model.findOne({email:req.body.email})
        .then(async e=>{
            if(e){
                console.log(e)
                res.status(200).json({msg:'success',details:e})
            }
            else{
                res.status(200).json({msg:'user doesnot exits'})
            }
        })
        .catch(err=>{
            console.log(err)
            res.status(500).json({msg:"problem at server"})
        })
    }
    catch{
        res.status(500).json({msg:"problem at server"})
    }
}
)

vendorRouter.post('/update',
async (req,res)=>{
    try{
        await vendor_model.findOne({email:req.body.email})
        .then(async e=>{
            if(e){
                await vendor_model.findOneAndUpdate({email:req.body.email},req.body)
                .then(e=>{
                    res.status(200).json({msg:"success",details:e})
                })
                .catch(err=>{
                    res.status(200).json({msg:"update not worked"})
                })
            }
            else{
                res.status(200).json({msg:"user doesn't exist"})
            }
        })
        .catch(err=>{
            console.log(err)
            res.status(500).json({msg:"problem at server"})
        })
    }
    catch{
        res.status(500).json({msg:"problem at server"})
    }
}
)

vendorRouter.post('/login',
async(req,res)=>{
    console.log("came here")
    console.log(req.body)
    try{
        await vendor_model.findOne({email:req.body.email})
        .then(async e=>{
            if(e){
                if(e.password==req.body.password)
                {
                    res.status(200).json(e)
                }
                else{
                    res.status(500).json({msg:"incorrect password"})
                }
                
            }
            else{
                
                res.status(500).json({msg:"user doesn't exist"})
            }
        })
        .catch(err=>{
            console.log(err)
            res.status(500).json({msg:"problem at server"})
        })
    }
    catch{
        res.status(500).json({msg:"problem at server"})
    }
}
)

module.exports = vendorRouter


