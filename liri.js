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

  var params = {screen_name: 'smith_jro'};
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if(error) throw error;
    tweets.forEach(function(tweet) {
      console.log(tweet);
    });  // The favorites. 
  });
}
if (command === 'spotify-this-song') {

  var song = process.argv[3] || 'The+Sign';
  console.log(song);

  
  spotify.search({ type: 'track', query: song }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
  
    var list = data.tracks.items;
    
    list.forEach(function(item, index) {
      console.log('-------- Item ' + index + ' ---------');
      item.artists.forEach(function(artist) {
        console.log('artist: ' + artist.name);
      });
      console.log('song name: ' + item.name);
      console.log('preview link: ' + item.href);
      console.log('album name: ' + item.album.name + '\n');
    });
  });
}
if (command === 'movie-this') {

  var movie = process.argv[3] || 'Mr. Nobody';
  var formattedMovie = movie.split(' ').join('+');
  console.log(formattedMovie);
  var url = 'http://img.omdbapi.com/?apikey=trilogy&s=superman';

  request(url, function(err, resp, body) {
    console.log(JSON.stringify(body, null, 2));
    console.log(JSON.stringify(resp, null, 2));
  });

}





