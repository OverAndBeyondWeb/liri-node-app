var config = require("dotenv").config();
var keys = require('./keys');
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var request = require('request');
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);
var fs = require('fs');

var command;

if (process.argv[2] === 'do-what-it-says') {
  fs.readFile('random.txt', 'utf8', function(err, data) {
    if (err) {
      return console.log(err)
    }

    command = data;
  });
} else {
  command = process.argv[2];
}

console.log(command);

if (command === 'my-tweets') {

  console.log('these the tweets');


  // client.get('trends/available', function(error, tweets, response) {
  //   if(error) throw error;
  //   console.log(tweets);  // The favorites. 
  //   console.log(JSON.stringify(response, null, 2));  // Raw response object. 
  // });
}
if (command === 'spotify-this-song') {

  var song = process.argv[3] || 'The Sign';
  console.log(song);

  // spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  //   if (err) {
  //     return console.log('Error occurred: ' + err);
  //   }
  
  //   console.log(JSON.stringify(data, null, 2)); 
  // });
}
if (command === 'movie-this') {

  var movie = process.argv[3] || 'Mr. Nobody';
  console.log(movie);

}





