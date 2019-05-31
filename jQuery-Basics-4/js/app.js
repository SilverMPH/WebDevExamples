/*NOTES:
There many different ways to select elements on a page. You can use your basic CSS selectors including, IDs, basic element types and pseudo-class selectors. There are also selectors that are specific to jQuery. For example there are ":radio", ":checkbox", ":password", ":odd", ":even", ":visible" and ":hidden" (among others I am sure).

The attribute methoed ".attr()" is used for checking or adding and changing an elements attributes (ex. $("#my-img").attr("alt"); is the getter version and $("#my-img").attr("alt", "Sunset in Tokyo"); is the setter version).

You can change the styling of an element using jQuery by either changing the styling directly or adding/removing a class from the element. To add remove a class there are a couple of methods to be used. There are the ".addClass("className")" and ".removeClass("className")" methods that do what their namesake suggests. There is also the ".toggleClass("className")" toggles between adding a removing a class of an element.

We use the "event.preventDefault()" method to prevent default browser behavior from triggering. You can use this method to prevent a form from submitting or to stop the browser from automatically follwing a link once it has been clicked on.

There is a simplified way to do a for loop in jQuery called the ".each()" method (ex. $collection.each(function(index,element) { ... }); ). This function will automatically work for as long as there are items in the collection.
*/

//This is an example of using the jQuery specific selector ":odd" which selects every other element on the page starting at the  index of one (with the first index being 0).
const $odd = $("a:odd");
const $secureLinks = $('a[href^="https://"]'); //SIDE NOTE: In order to get this selector to work I needed to use the '' around the CSS selector that I was using that has "" used inside it.
const $pdfs = $('a[href$=".pdf"]');

//Below and the ".append method call at the bottom are used to make the the label/checkbox on the page Unobtrusive just in case JS is working for the page.
const $checkBox = $("<label><input type='checkbox'> Allow PDF downloads</label>");

/*This method ".hide()" provides a built in looping function that loops through the page and applies the "hide" method to the appropriate elements (the .eq() method is similar). It is important to remember that these methods don't return a collection of DOM components but rather a collection of jQuery objects so the returned objects each come with the methods that jQuery offers.

//Below are used to test out the different selectors called above.
$odd.hide();                     
$secureLinks.hide();
$pdfs.hide();
*/

/*Below is an example of setting the links "target" attribute to the given value "_blank". A reason why you would do something like this, instead of manually doing it, using jQuery is if the client wants multiple links to open on a new page. This way you can add in the needed attribute with out having to go through the full HTML page to find all the links. You could also use thie to remove the disabled attribute from a button once certain conditions are hit; also if you were to create new elements dynamically and later add attributes to them.*/
$secureLinks.attr("target", "_blank");

//NOTE: The download attribute is used to initiate the download of the file that is indicated instead of allowing the browser to open it first. This may not work in older browsers and if you are using Firefox it won't work if the link points to an external site. The reason I used the value true instead of "true" is because it needs a boolean value not a string. It is also inmportant to note that the download attribute doesn't need a value in order to work, you can simply put the word "download" on you HTML element and it will do the same thing as we did here.
$pdfs.attr("download", true);

//NOTE: You will notice that in jQuery/JS we use camel case (ex. seen below) to indicate property values whereas CSS would hypenate the property (that is called kabob case).
//$odd.css("backgroundColor", "lightgray");

$secureLinks.addClass("secure");
$pdfs.addClass("pdf");

$pdfs.on("click", function(event) {
  //check if checkbox has been check. This will return a list of all elements on the page that have the "checked" attribute
  //if 0 checkbox is not checked. This is using the length property of the returned list to see if there are any checked checkboxes
   if ($(":checked").length === 0) {
     //prevent download of document
     event.preventDefault();
     //alert the user
     alert("Please check the box to allow PDF downloads.");
   }
});

$("div#links").append($checkBox);

//This is an example of using the ".each()" method in jQuery (which can replace the for loop). So this will find all the "a" tags on the page loop through each of them and call the given function on each of them. The "element" argument represents each element in the collection as we are looping through them; for the purpose of this application we are changing the "element" argument to be called "link". SIDE NOTE: There is a simpler way to write and that is by removing the "index" and "link" arguments and just using "this" in its place. We can do this because we are not actually using both of these arguments so we don't need to call them in the function (see below). So in other words we are saying get the href for "this" element which would be the element the collection with its associated index.
$("a").each(function() {
  //console.log(index, $(element).attr("href")); **Just an example of how the .each() method works.
  const url = $(this).attr("href");
  $(this).parent().append(` (${url})`); //This is finding the links parent element, the "li", and appending the URL that we found to it. The way we are displaying the URL is using something called String interpolation (there is a link in my bookmarks that discusses this). 
});

