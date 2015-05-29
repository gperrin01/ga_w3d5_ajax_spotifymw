// tracks
// $.getJSON('http://ws.spotify.com/search/1/track.json?q=in da club',

// https://api.spotify.com/v1/search?q=SOMETHINGHERE&type=SOMETHINGHERE
// REAL GET /v1/search?q=eminem&type=artist

// ON typing text on $('#search-keywork') -> nothing yet, just store the content
// ON click on search-type, nthign yet, store the type
// ON click submit, get info form spotify and put on results
$(document).ready(function() {
  $("#go").on('click', getResults)
});

// var type;
// var content;

function getResults(e) {
  e.preventDefault();
  var storage = [];
  var type = $('#search-type').val();
  var content = $('#search-keyword').val();
  $.ajax({
    type: 'GET',
    url: "https://api.spotify.com/v1/search?q="+content+"&type="+type
  }).done(function(response) {
    // debugger;
    $.each(response.artists.items, function(index, artist) {
      if ($.inArray(artist.name, storage) == -1) {
        storage.push(artist.name);
        var img = artist.images.length > 0 ? artist.images[0].url : 'img/no_image.gif'
        $('#results').append("<div>  <p><a href="+artist.href +">"+ artist.name +"</a></p> <img src=" + img +">  </div>"   );
      }
    })
  })
}





























