$.ajax({url:"https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/artists", 
        method:"GET"}).then(function(response){console.log(response)
            for (let i = 0; i < 4; i++) {
                $("#artist-picture-"+i).attr('src', response.data[i].picture_medium);
                $("#artist-name-"+i).text(response.data[i].name);
                $("#concertButton-"+i).val(response.data[i].name);
                $("#artistPageLink-"+i).on("click", function (event) {
                    var search = response.data[i].name;
                    localStorage.setItem("search", search)
                    location.href = "searchPage.html";
                });
                $("#concertButton-"+i).on("click", function (event) {
                    event.preventDefault();
                    var concertSearch = $("#concertButton-"+i).val();
                    console.log("concertSearch");
                    localStorage.setItem("concertSearch", concertSearch);
                    location.href = "concertResults.html";
                });
                }
        });
$("#submitButton").on("click", function (event) {
    event.preventDefault();
    var search = $("#search-bar").val();
    localStorage.setItem("search", search)
    location.href = "searchPage.html";

var images = $(".carousel-item img")

$(images[0]).attr("src", "images\post_malone.jpeg");
for (let i = 0; i < images.length; i++) {

   var currentItem =  $(".carousel-item img")[i];
    var ratio = currentItem.clientWidth/currentItem.clientHeight;
    var height = 500;
    var width = height * ratio;
    $(currentItem).attr("style", `height:${height}px ; width${width}px ;` )
}
});



