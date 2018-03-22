var config = require("dotenv").config();
var keys = require('./keys');
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var request = require('request');
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);


spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(JSON.stringify(data, null, 2)); 
});

client.get('trends/available', function(error, tweets, response) {
  if(error) throw error;
  console.log(tweets);  // The favorites. 
  console.log(JSON.stringify(response, null, 2));  // Raw response object. 
});