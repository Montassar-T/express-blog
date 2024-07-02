const mongoose = require('mongoose');




const userSchema = mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        requried:true
    },
    password:{
        type:String,
        required: true
    }
},{timestamps:true, collection:'users'})


module.exports = mongoose.model('User', userSchema);