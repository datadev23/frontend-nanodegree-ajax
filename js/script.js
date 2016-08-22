
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

    // YOUR CODE GOES HERE!


//var street = $('#street').val();
 var street= $("input:text[id$='street']").val();;
  var city= $("input:text[id$='city']").val();

$body.append('<img class="bgimg" src="http://example.com/someimage.png">');




    return true;
};

$('#form-container').submit(loadData);


console.log("test info");