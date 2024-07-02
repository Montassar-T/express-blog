const express = require('express');
const router = express.Router();
const postsController = require('../controllers/postsController')



router.route('/')
.get(postsController.getAll)
.post(postsController.createPost);

router.route('/:id')
.get(postsController.getPost)
.delete(postsController.deletePost);



module.exports = router;


