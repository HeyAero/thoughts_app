const express = require('express');
const router = express.Router();

const Post = require('../models/Post')

// "show a particular post" route
router.get('/:id', async (req, res) => {
    try {
        const dog = await Post.findById(parseInt(req.params.id))
        res.json(post)
    } catch(err) {
        res.status(404).json({err})
    }
})

// "add a post" route
router.post('/', async (req, res) => {
    try {
        const post = await Post.create(req.body.title, req.body.date, req.body.name, req.body.body)
        res.json(post)
    } catch(err) {
        res.status(404).json({err})
    }
})