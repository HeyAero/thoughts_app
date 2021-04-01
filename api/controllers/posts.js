const express = require('express');
const router = express.Router();

const Post = require('../models/Post')

// "show a particular post" route
async function goToPost(req, res) {
    try {
        const post = await Post.findById(parseInt(req.params.id))
        res.status(200).json(post)
    } catch(err) {
        res.status(404).json({err})
    }
}

// "add a post" route
async function newPost(req, res) {
    try {
        const post = await Post.create(req.body.title, req.body.date, req.body.name, req.body.body)
        res.status(201).json(post)
    } catch(err) {
        res.status(422).json({err})
    }
}

module.exports = { goToPost, newPost }