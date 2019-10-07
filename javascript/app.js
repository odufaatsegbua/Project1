// // https://api.songkick.com/api/3.0/events.json?apikey={your_api_key}
// // https://api.spotify.com/v1/search?q=sanctuary

// var spotifyClientId = "8f07791019f9423caf915b8b6c00c3b7";
// var spotifySecreyKey = "64e9950cd61f47b799b0002d864b61d5";


// $.ajax({
//     url: "https://accounts.spotify.com/api/token",
//     method: "POST"
// }).done(function (response) {
//     console.log("access token response: " + response);
// })


// $.ajax({
//     url: "https://api.spotify.com/v1/search?q=sanctuary",
//     method: "GET"
// }).done(function (response) {
//     console.log("search response: " + response);
// })
// var firebaseConfig = {
//     apiKey: "AIzaSyAou9EbBPi4eOU0V7oAWqJ1gEsaWgqft10",
//     authDomain: "api-keys-1f80d.firebaseapp.com",
//     databaseURL: "https://api-keys-1f80d.firebaseio.com",
//     projectId: "api-keys-1f80d",
//     storageBucket: "",
//     messagingSenderId: "803840728508",
//     appId: "1:803840728508:web:4164b4960a51dd14681fb9",
//     measurementId: "G-T5L4502HKC"
// };
// firebase.initializeApp(firebaseConfig);
// var database = firebase.database();
// database.ref().once("value", function (snapshot) {
//     var data = snapshot.child("objects").child("data").val();
//     console.log(data);
//     $("#artist-picture-1").attr('src', data[0].picture_medium);
//     $("#artist-name-1").text(data[0].name);
//     $("#artist-picture-2").attr('src', data[1].picture_medium);
//     $("#artist-name-2").text(data[1].name);
//     $("#artist-picture-3").attr('src', data[2].picture_medium);
//     $("#artist-name-3").text(data[2].name);
//     $("#artist-picture-4").attr('src', data[3].picture_medium);
//     $("#artist-name-4").text(data[3].name);




// });
$( document ).ready(function() {
$.ajax({url:"https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/artists", 
        method:"GET"}).then(function(response){console.log(response)
    $("#artist-picture-1").attr('src', response.data[0].picture_medium);
    $("#artist-name-1").text(response.data[0].name);
    $("#artist-picture-2").attr('src', response.data[1].picture_medium);
    $("#artist-name-2").text(response.data[1].name);
    $("#artist-picture-3").attr('src', response.data[2].picture_medium);
    $("#artist-name-3").text(response.data[2].name);
    $("#artist-picture-4").attr('src', response.data[3].picture_medium);
    $("#artist-name-4").text(response.data[3].name);
        });
$("#search-bar-value").on("click", function (event) {
    event.preventDefault();
    window.location.href = "concertResults.html";
    var search = $("#search-bar").val();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https:eezerdevs-deezer.p.rapidapi.com/search?q=" + search,
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
            "x-rapidapi-key": "57c25f866amsh37d2ab4fcf08c12p19d472jsn92819fcff2cb"
        }
    }
    $.ajax(settings).done(function (response) {
        console.log(response);
    });
});
});


