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

$("#upcoming-shows-button").on("click", function (event) {
    event.preventDefault();
    location.href = "concertResults.html";
})

$("#concert-search-button").on("click", function (event) {
    var search = document.getElementById("concert-search-bar").value;

    var spaces = search.split(" ").length - 1;
    for (i = 0; i < spaces; i++) {
        search = search.replace(" ", "%20");
    }

    console.log(search);

    var settings = {
        "url": "https://cors-anywhere.herokuapp.com/https://api.predicthq.com/v1/events/?q=" + search,
        "method": "GET",
        "headers": {
            "Authorization": "Bearer o8Kwb9e4NNS0POa-jUBGUkE13Lv56dce6oSRHIOS"
        }
    }

    $.ajax(settings).done(function (response) {

        document.getElementById("table-container").innerHTML = "";



        for (i = 0; i < response.results.length; i++) {
            var tr = $("<tr></tr>");
            var title = response.results[i].title;
            var date = response.results[i].start;
            var location = response.results[i].location;

            date = date.split("T")[0];
            date = date.replace("-", "/");
            date = date.replace("-", "/");
            date = moment(date, "YYYY/MM/DD").format("MM/DD/YYYY");

            var thTitle = $("<th scope='col'>" + title + "</th>");
            var thDate = $("<th>" + date + "</th>");
            var thLocation = $("<th>" + location + "</th>");

            tr.append(thTitle);
            tr.append(thLocation);
            tr.append(thDate);

            $("#table-container").append(tr);
        }
    });
})

