const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
	
    buyer_email:{
        type:String,
        required:true
    },
	vendor_email:{
        type:String,
        required:true
    },
    item_id:{
        type:String,
    },
    item_name:{
        type:String
    },
    item_price:{
        type:String
    },
    item_quantity:{
        type:Number
    },
    status:{
        type:String
    },
    order_date:{
        type:String
    }
});
module.exports =  Order = mongoose.model('Orders',OrderSchema)