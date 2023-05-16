const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const VendorSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
        required: true,
        unique:true
	},
	contact:{
        type:Number
    },
    
    shop_name:{
        type:String,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    opening_time:{
        type:String
    },
    closing_time:{
        type:String
    }
});
module.exports =  Vendor = mongoose.model('Vendors',VendorSchema)