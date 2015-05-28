// tracks
// $.getJSON('http://ws.spotify.com/search/1/track.json?q=in da club',

// https://api.spotify.com/v1/search?q=SOMETHINGHERE&type=SOMETHINGHERE
// REAL GET /v1/search?q=eminem&type=artist

// ON typing text on $('#search-keywork') -> nothing yet, just store the content
// ON click on search-type, nthign yet, store the type
// ON click submit, get info form spotify and put on results
$(document).ready(function() {
  $(":submit").on('click', getResults)
});

var type;
var content;

function getResults(e) {
  type = $('#search-type').val();
  content = $('#search-keyword').val();
  // $.ajax({
  //   type: 'GET',
  //   url: "http://ws.spotify.com/search/1/track.json?q="+content
  // }).done(function(response) {
  //   console.log(response);
  $.ajax({
   type: "GET",
   url: 'https://api.spotify.com/v1/search?q=coldplay&type=track'
 }).done(function(data, response){
   console.log(response);
  })

}





























