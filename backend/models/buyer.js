const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const BuyerSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	contact:{
        type:Number
    },
    age:{
        type:Number
    },
    batch:{
        type:String
    },
    password:{
        type:String,
        required:true
    }
});
module.exports =  Buyer = mongoose.model('Buyers',BuyerSchema)