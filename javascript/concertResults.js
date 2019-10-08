
$("#concert-search-button").on("click", function (event) {
    var concertSearch = document.getElementById("concert-search-bar").value;
    var spaces = concertSearch.split(" ").length - 1;
    for (i = 0; i < spaces; i++) {
        concertSearch = concertSearch.replace(" ", "%20");
    }
    console.log(concertSearch);
    var settings = {
        "url": "https://cors-anywhere.herokuapp.com/https://api.predicthq.com/v1/events/?q=" + concertSearch,
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
