/*
1. Replace the button click event with a form submit event.
2. Stop the form from submitting
3. Retrieve the value the visitor typed in the input field send that value to the Flickr API (remember the tags property).

Ideas on what to add to this application:
  Remove old photos while a new search is happening
  Have place that displays what subject you are searching/searched somewhere on the page
*/

$(document).ready(function() {

 //This is for the new photo application challenge that uses the Flickr API.
 $('form').submit(function (evt) {
    evt.preventDefault(); //This keeps the code from submitting right when the button is clicked allowing us to run the jQuery code below first. 
    
    //The "$" used in front of the variable names below is a common way to denote a variable that is storing a location of a form field or other section on the HTML page.
    var $searchField = $("#search"); //To store the location of the search bar
    var $subtmitBtn = $("#submit"); //To store the location of the submit button 
    
    $searchField.prop("disabled", true); //To disable the search field while the application is doing the search
    $subtmitBtn.attr("disabled", true).val("Searching..."); //To disable the button while the application is searching and to notify the user the the search is in progress.
   
    // the AJAX part
    var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    
    //var searchTerm = $("#search").val(); **This is how I did this.
    var searchTerm = $searchField.val(); //This is how the instructor set this up.
    var flickrOptions = {
      tags: searchTerm,
      format: "json"
    };
    
    function displayPhotos(data) {
      var photoHTML = '<ul>';
      $.each(data.items,function(i,photo) {
        photoHTML += '<li class="grid-25 tablet-grid-50">';
        photoHTML += '<a href="' + photo.link + '" class="image">';
        photoHTML += '<img src="' + photo.media.m + '"></a></li>';
      }); // end each
      photoHTML += '</ul>';
      $('#photos').html(photoHTML);
      
      $searchField.prop("disabled", false); //To re-enable the search field after the search completes
      $subtmitBtn.attr("disabled", false).val("Search"); //To re-enabled the submit button and set its text to "Search" after the search completes.
    }
    $.getJSON(flickerAPI, flickrOptions, displayPhotos);

  }); // end click

}); // end ready