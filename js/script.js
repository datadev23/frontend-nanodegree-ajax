
    
function loadData() {
    

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview

//var street = $('#street').val();
 var street= $("input:text[id$='street']").val();;
  var city= $("input:text[id$='city']").val();
  var address = street + ', ' + city;

$greeting.text('So, you want to live at ' + address + '?');



 var streetviewUrl = ('http://maps.googleapis.com/maps/api/streetview?size=600x300&location=' 
    + address + '');

$body.append('<img class="bgimg" src="' + streetviewUrl + '">');

 
$.getJSON( "https://api.nytimes.com/svc/search/v2/articlesearch.json", function( data ) {

  var i =0;
   $.each(data.response.docs,function(i, item) {

 $nytElem.append('<li class = "article">'+ '<a href="' + item.web_url + '">' +item.lead_paragraph + '</a>'+ '</li>');

 });


});

$.ajax({
    url: "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + city + "&limit=5&namespace=0&format=jsonfm",
 
    // The name of the callback parameter, as specified by Media Wiki
    jsonp: "callback",
 
    // Tell jQuery we're expecting JSONP
    dataType: "jsonp",
 
    // Data From Media Wiki
    data: {
        q: "action=opensearch&search=" + city + "&limit=10&namespace=0&format=jsonfm",
        format: "json"
    },
 
    // Work with the response
    success: function( response ) {
    alert("successful query");



     $wikiElem.append('<li class="article">'+ response[1] + '</li>');

       console.log( response[1]); // server response
       
    }
});
 


   return false;

};

$('#form-container').submit(loadData);



