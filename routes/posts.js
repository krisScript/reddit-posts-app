const path = require('path');

const express = require('express');

const posts = require('../controllers/posts');

const router = express.Router();
router.post('/posts', posts.getPosts);
module.exports = router;
