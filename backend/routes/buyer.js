const buyerRouter = require('express').Router();

const buyer_model = require("../models/buyer");


buyerRouter.post('/add',
async (req,res)=>{
    try{
        await buyer_model.findOne({email:req.body.email})
        .then(async e=>{
            if(e){
                res.status(500).json({msg:'user already exists'})
            }
            else{
                let curr_buyer=new buyer_model({...req.body})
                const save_buyer=await curr_buyer.save()
                res.status(200).json(curr_buyer)
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

buyerRouter.post('/get',
async (req,res)=>{
    try{
        await buyer_model.findOne({email:req.body.email})
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

buyerRouter.post('/update',
async (req,res)=>{
    try{
        await buyer_model.findOne({email:req.body.email})
        .then(async e=>{
            if(e){
                await buyer_model.findOneAndUpdate({email:req.body.email},req.body)
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

buyerRouter.post('/login',
async(req,res)=>{
    try{
        await buyer_model.findOne({email:req.body.email})
        .then(async e=>{
            if(e){
                if(e.password==req.body.password)
                {
                    res.status(200).json(e)
                }
                else{
                    res.status(200).json({msg:"incorrect password"})
                }
                
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

module.exports = buyerRouter


