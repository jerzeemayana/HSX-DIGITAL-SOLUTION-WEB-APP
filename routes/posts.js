var express = require('express');
var router = express.Router();
var Posts = require('../models/posts')

/* GET home page. */



router.get('/', function(req, res, next) {
    Posts.getPosts(function(err, posts){
      res.render('shop/index', { posts: posts });
      
    });
  
  });
   
  
router.get('/:id/detail', function(req, res, next) {
    Posts.getPostsById([req.params.id],function(err, postname){
      res.render('shop/detail', { posts: postname });
    });
  
  });
  

module.exports = router;
