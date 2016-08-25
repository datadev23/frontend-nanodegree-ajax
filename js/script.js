
    
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
 


   return false;

};

$('#form-container').submit(loadData);



