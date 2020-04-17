var express = require('express');
var router = express.Router();
var Posts = require('../models/posts')

/* GET home page. */

         // admin section
         router.get('/admin', function(req, res, next) {
            Posts.getPosts(function(err, posts){
              res.render('admin/index', { posts: posts });
              
            });
          
          });

          router.get('/admin/add', function(req,res,next){
            res.render('admin/add');
          })

          router.post('/admin', function(req, res, next) {
            
            var titile = req.body.titile && req.body.titile.trim() ;
            var category = req.body.category && req.body.category;
            var author = req.body.author && req.body.author;
            var body = req.body.body && req.body.body;
            

            var newPosts = new Posts({
              titile: titile,
              category: category,
              author:author,
              body:body,
              
            });
            newPosts.save(function(err){
              if(err){
                console.log("save err", err)
              }
              else {
                res.location('/admin');
                res.redirect('/admin')
                console.log('saved')
              }
            })
          
          });

          router.get('/admin/edit/:id', function(req, res, next) {
            Posts.getPostsById([req.params.id],function(err, postname){
              res.render('admin/edit', { posts: postname });
            });
          
          });

          router.post('/admin/edit/:id', function(req, res){
            var titile = req.body.titile && req.body.titile.trim() ;
            var category = req.body.category && req.body.category.trim();
            var author = req.body.author && req.body.author.trim();
            var body = req.body.body && req.body.body.trim();

            Posts.update({_id: req.params.id}, {
              titile: titile,
              category: category,
              author:author,
              body:body
            }, function(err) {
              if(err) {
                console.log('update error', err);
              }else {
                res.location('/admin');
                res.redirect('/admin')
                console.log('updated')
              }
            })
          })

          router.post('/admin/delete/:id', function (req, res){
            Posts.remove({_id: req.params.id}, function (err){
              if(err){
                console.log(err)
              }else {
                
                res.location('/admin');
                res.redirect('/admin')
                console.log('deleted')
              }
            })
          })
          
        
        

module.exports = router;
