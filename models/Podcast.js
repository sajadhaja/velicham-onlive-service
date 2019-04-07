var mongoose = require('mongoose');

var PodcastSchema = new mongoose.Schema({  
  title: String,
  desc: String,
  audioUrl: String,
  audioType: String,
  pubDate: String,
  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Podcast', PodcastSchema);
