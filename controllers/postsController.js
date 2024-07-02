const Post = require('../models/posts'); 


const getAll =async (req, res)=>{
    try{
        const posts = await Post.find().exec(); 
        res.status(200).json({
            success:true,
            data:posts
        })
    }catch(err){
        console.log(err);
        res.status(500).json({
            success:false,
            message:'Server Error'

        })
    }
}
const createPost = async (req,res)=>{
    const {title, content, author, published} = req.body;
    try{
        const newPost  = new Post({
            title,
            content,
            author,
            published
        })
        await newPost.save()
        res.status(200).json({
            success:true,
            message:"Post created"
        })
    }catch(err){
        console.log(err);
        res.status(500).json({
            success:false,
            message:"Error creating post"
        })
    }
}

const getPost = async (req, res)=>{
    const {id}= req.params;
    try{
        const post = await Post.findById(id).exec();
        if(!post){
            res.status(404).json({
                success:false,
                message:"Post not found",
                data:null
            })

        }
        res.status(200).json({
            success:true,
            data:post
        })
    }catch(err){
        console.log(err)
        res.status(500).json({
            success:false,
            message:"Server Error",
        })
    }
}


const deletePost=  async(req,res)=>{
    const {id} = req.params;
    try{
        const deleted =await Post.deleteOne({
            _id : id
        })
        if(deleted){
            res.status(200).json({
                success:true,
                message:'Post deleted',
                data:null
            })
        }
        
    }catch(err){
        console.log(err);
        res.status(500).json({
            success:false,
            message:'Server Error'
        })
    }
}


module.exports = {getAll, createPost, getPost, deletePost}