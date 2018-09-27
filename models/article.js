// Article model
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  author: {
    type: String,
    required: true
  },
  
  articleLink: {
    type: String,
    required: true
  },
  imgLink: {
    type: String,
    required: true
  },
  saved: {
    type: Boolean,
    required: true,
    default: false
  }


});

var Article = mongoose.model("Article", ArticleSchema);

// Export the Article model
module.exports = Article;