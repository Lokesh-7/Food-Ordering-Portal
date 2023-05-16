const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
	name: {
		type: String,
		required: true
	},
    email:{
        type:String,
        required:true
    },
	price:{
        type:Number,
        required:true
    },
    rating:{
        type:Number,
        default:0
    },
    type:{
        type:String
    }
});
module.exports =  Item = mongoose.model('Items',ItemSchema)