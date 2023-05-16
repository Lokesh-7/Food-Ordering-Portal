const orderRouter = require('express').Router();
const nodemailer=require("nodemailer")
const order_model = require("../models/order");

orderRouter.post('/add',
    async (req, res) => {

        try {

            console.log("successfully added")
            let curr_order = new order_model({ ...req.body })
            console.log(curr_order)
            const save_order = await curr_order.save()
                .then(res => {
                    if (res) {
                        
                        res.status(200).json({ details: curr_order, msg: "success" })
                    }
                    else{
                        res.status(200).json({msg:"couldn't place order"})
                    }
                })
                .catch(err=>{
                    console.log(err)
                })



        }
        catch {
            console.log("came here")
            res.status(500).json({ msg: "problem at server2" })
        }
    }
)


orderRouter.post('/update',
async (req,res)=>{
    try{
        await order_model.findOne({_id:req.body._id})
        .then(async e=>{
            if(e){
                await order_model.findOneAndUpdate({_id:req.body._id},req.body)
                .then(async e=>{
                    
                    if(req.body.status=="rejected" || req.body.status=="accepted")
                    {
                        console.log("came here")
                        var transporter = nodemailer.createTransport({
                            service: 'gmail',
                            auth: {
                              user: 'paidilokesh282002@gmail.com',
                              pass: 'Paidilokesh2@'
                            }
                          });
                          
                          var mailOptions = {
                            from: 'paidilokesh282002@gmail.com',
                            to: e.buyer_email,
                            subject: 'Order Status Shopify',
                            text: 'Your order is '+req.body.status
                          };
                          transporter.sendMail(mailOptions, function(error, info){
                            if (error) {
                              console.log(error);
                            } else {
                              console.log('Email sent: ' + info.response);
                            }
                          });
                          
                    }
                    res.status(200).json({msg:"success",details:e})
                })
                .catch(err=>{
                    res.status(200).json({msg:"update not worked"})
                })
            }
            else{
                res.status(200).json({msg:"order doesn't exist"})
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



orderRouter.post('/getallbuyer',
async (req,res)=>{
    
    try{
        
        await order_model.find({buyer_email:req.body.buyer_email})
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

orderRouter.post('/stats',
async (req,res)=>{
    
    try{
        
        await order_model.find({vendor_email:req.body.vendor_email})
        .then(async e=>{
                let pending=0
                let completed=0
                let rejected=0
                let cooking=0
                let accepted=0
                let allorders=e.length
                e.forEach(o=>{
                    if(o.status=="completed")
                        completed=completed+1
                    if(o.status=="pending")
                        pending=pending+1
                    if(o.status=="rejected")
                        rejected=rejected+1
                    if(o.status=="cooking")
                        cooking=cooking+1
                    if(o.status=="accepted")
                        accepted=accepted+1
                })

                console.log(e)
                res.status(200).json({msg:'success',details:{pending:allorders-completed-rejected,completed:completed,allorders:allorders,accepted:accepted,cooking:cooking}})

            
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

orderRouter.post('/getallvendor',
async (req,res)=>{
    console.log("came to all vendor")
    try{
        
        await order_model.find({vendor_email:req.body.vendor_email})
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

module.exports = orderRouter