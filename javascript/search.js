var search = localStorage.search;
console.log(search + " was searched");
if(search !==undefined)
{

    
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
        for (let i = 0; i < 15; i++) {
            var newRow = $("<tr>").append(
            $("<td>").html("<img src ='"+response.data[i].album.cover+"'>"),
            $("<td>").text(response.data[i].artist.name),
            $("<td>").text(response.data[i].title),
           $("<td>").html("<audio controls><source type=audio/mp3 src ='"+response.data[i].preview+"'> </audio>"),  
           );   
           $("#search-table > tbody").append(newRow);
        }
        var loadButton = $("<tr>").append(
            $("<td>").html("<button class=btn id=loadButton btn-secondary my-2 my-sm-0 type=submit>Load More Tunes</button>")
           );
           $("#search-table > tbody").append(loadButton);
           $("#loadButton").on("click", function (event) {
            $("#loadButton").remove();
            for (let i = 15; i < 25; i++) {
                var newRow = $("<tr>").append(
                $("<td>").html("<img src ='"+response.data[i].album.cover+"'>"),
                $("<td>").text(response.data[i].artist.name),
                $("<td>").text(response.data[i].title),
               $("<td>").html("<audio controls><source type=audio/mp3 src ='"+response.data[i].preview+"'> </audio>"),  
               );   
               $("#search-table > tbody").append(newRow);
            }

        });

      
    
      
});
}
