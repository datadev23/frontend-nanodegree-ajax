
    
function loadData() {
    

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
   
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
 


   return false;

};

$('#form-container').submit(loadData);


 var $nytElem = $('#nytimes-articles');
$.getJSON( "https://api.nytimes.com/svc/search/v2/articlesearch.json", function( data ) {


  var items = [];
  var i =0;
   //console.log(data.response.docs[2]);

   $.each(data.response.docs,function(i, item) {

    //console.log(data.response.docs[1]);
   //console.log(item.lead_paragraph);
    //items.push(item);

   //console.log("items array:  " + items);

 $nytElem.append('<li class = "article">'+ item.lead_paragraph + '</li>');

 });


});
