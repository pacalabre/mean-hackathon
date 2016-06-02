var mongoose = require('mongoose');

// create a schema
var linkSchema = new mongoose.Schema({
  url: String
});

var Link = mongoose.model('Link', linkSchema);

module.exports = Link;
