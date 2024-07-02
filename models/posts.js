const mongoose = require('mongoose');



const postsSchema =new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    published:{
        type:Boolean,
        default:false
    }
},{timestamps:true, collection:'posts'});


module.exports = mongoose.model('Post', postsSchema)