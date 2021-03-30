const express = require('express');
const router = express.Router();
const postsController = require('../controllers/posts')

router.post('/', postsController.newPost);
router.get('/:id', postsController.goToPost);

module.exports = router;