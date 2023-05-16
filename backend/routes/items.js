const itemRouter = require('express').Router();

const item_model = require("../models/items");

itemRouter.post('/add',
async (req,res)=>{
    console.log(req.body)
    try{
        await item_model.findOne({email:req.body.email,name:req.body.name})
        .then(async e=>{
            if(e){
                res.status(200).json({msg:'item already exits'})
            }
            else{
                console.log("successfully added")
                let curr_item=new item_model({...req.body})
                const save_item=await curr_item.save()
                res.status(200).json({details:curr_item,msg:"success"})
            }
        })
        .catch(err=>{
            console.log(err)
            res.status(500).json({msg:"problem at server1"})
        })
    }
    catch{
        res.status(500).json({msg:"problem at server2"})
    }
}
)

itemRouter.post('/getall',
async (req,res)=>{
    
    try{
        console.log(req.body.email)
        await item_model.find({email:req.body.email})
        .then(async e=>{
                console.log(e)
                res.status(200).json({msg:'success',details:e})

            
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


itemRouter.get('/getallbuyer',
async (req,res)=>{
    
    try{
        
        await item_model.find()
        .then(async e=>{
                console.log(e)
                res.status(200).json({msg:'success',details:e})

            
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



itemRouter.post('/delete',
async (req,res)=>{
    
    try{
        
        await item_model.findOneAndDelete({_id:req.body._id})
        .then(async e=>{
                console.log(e)
                res.status(200).json({msg:'success',details:e})

            
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


itemRouter.post('/update',
async (req,res)=>{
    try{
        await item_model.findOne({_id:req.body._id})
        .then(async e=>{
            if(e){
                await item_model.findOneAndUpdate({_id:req.body._id},req.body)
                .then(e=>{
                    res.status(200).json({msg:"success",details:e})
                })
                .catch(err=>{
                    res.status(200).json({msg:"update not worked"})
                })
            }
            else{
                res.status(200).json({msg:"item doesn't exist"})
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

module.exports=itemRouter