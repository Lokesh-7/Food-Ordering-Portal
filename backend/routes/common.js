const common_router = require('express').Router();
const buyer_model = require("../models/buyer");
const vendor_model = require("../models/vendor")

common_router.post('/login',
    async (req, res) => {
        console.log("came here 1")
        try {
            await buyer_model.findOne({ email: req.body.email })
                .then(async e => {
                    if (e) {
                        console.log("came here 2")
                        if (e.password == req.body.password) {
                            res.status(200).json({ details: e, type: "buyer",msg:"success" })
                        }
                        else {
                            console.log("came here 3")
                            res.status(200).json({ msg: "incorrect password" })
                        }

                    }
                    else {
                        await vendor_model.findOne({ email: req.body.email })
                            .then(async e => {
                                if (e) {
                                    console.log("came here 4")
                                    if (e.password == req.body.password) {
                                        res.status(200).json({ details: e, type: "vendor",msg:"success" })
                                    }
                                    else {
                                        res.status(200).json({ msg: "incorrect password" })
                                    }
                                }
                                else{
                                    console.log("came here 6")
                                    res.status(200).json({msg:"user doesn't exist"})
                                }

                            })
                            .catch(e => {
                                console.lgo("came here 7")
                                res.status(500).json({ msg: "server error" })
                            })

                        
                    }
                })
                .catch(err => {
                    console.log(err)
                    res.status(500).json({ msg: "problem at server" })
                })
        }
        catch {
            res.status(500).json({ msg: "problem at server" })
        }
    }
)

module.exports = common_router