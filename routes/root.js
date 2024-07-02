const express = require('express');
const router = express.Router();
const path = require('path')


router.get('/', (req,res)=>{
    res.sendFile(path(__dirname,'../views/index.html'));
})


module.exports = router;