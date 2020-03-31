
var mongoose = require('mongoose');

// postsSchema 

var PostsSchema = mongoose.Schema({
    titile: {
        type: String
    },
    category: {
       type: String
    },

    author: {
        type: String
    },

    body: {
        type: String
    },

    date: {
        type: Number
    }


})


var Posts = module.exports = mongoose.model('Posts', PostsSchema)

// Fetch all Posts

module.exports.getPosts = function(callback, limit){
   Posts.find(callback).limit(limit)
}

// fetch single post

module.exports.getPostsById = function(id, callback){
    Posts.findById(id, callback);
}