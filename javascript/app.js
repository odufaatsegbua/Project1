// https://api.songkick.com/api/3.0/events.json?apikey={your_api_key}
// https://api.spotify.com/v1/search?q=sanctuary

var spotifyClientId = "8f07791019f9423caf915b8b6c00c3b7";
var spotifySecreyKey = "64e9950cd61f47b799b0002d864b61d5";


$.ajax({
    url: "https://accounts.spotify.com/api/token",
    method: "POST"   
}).done(function(response) {
    console.log("access token response: " +response);
})


$.ajax({
    url: "https://api.spotify.com/v1/search?q=sanctuary",
    method: "GET"   
}).done(function(response) {
    console.log("search response: " +response);
})