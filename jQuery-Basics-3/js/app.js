/*
Project Notes:
1. Create the "Reveal Spoiler button
2. Append button to the web page
3. Hide the spoiler text
4. When the button is pressed
  - Show the spoiler text
  - Hide the "Reveal Spoiler" button

NOTES:
Unobtrusive JavaScript (JS): 
  1. Since JS is the functional layer of webpages it should be kept separate from the structural and presentation layers (HTML and CSS respectively). This is handled by keeping the JS we write in a separate file. 
  2. Cross browser inconsistencies should be accounted for so users have a similar experience no matter what browser they use (which is pretty much what jQuery is meant for). 
  3. Progressive enhancement is where your websites core content and functionality is still available even when JS is blocked, disabled or not completely supported. This sort of thing happens when a user has a firewall or plugin that ends up blocking/breaking your sites scripts. Also if the users network is not functioning properly (ex. bad WiFi signal) you scripts may not completely load or you jobs network admins might have JS disabled to limit the use of some websites. An older browser might also cause the issue of JS not working along with an older machine or even living in a country that doesn't have the most recent technology.
  
     An example of this in action is when you disable JS while on the the Google search engine. When you do that (using develeper tools and disabliing it from there) some of the functionality gets removed from the page. Like location services doesn't work nor does the search by voice option. All things like that which are add-ons by Google get removed so that the user doesn't see those options, try to use them and get frustrated because they don't work for them.
     
Some other events that can be handled in jQuery besides ".click()" are ".mouseover()" (when a mouse moves over an element), ".keypress()" (when a user presses a key in an input element) and ".focus()" (when an input field gets the focus/the cursor appears inside an input field). These all work great for basic applications but are limited when you want to do more advanced events like combining a click event with a keypress event. This can be handled with the ".on()" jQuery method (ex. $(".element").on("click keypress", function() { ... }); ).

In order to allow users to add elements to the page and not mess with the event handlers you need to use a concept called "Event Delegation". This works by placing an event listener on the parent element that will activate when an event occurs on a child element. Because the listening is happening on the parent element it won't matter if the descendents were a part of the DOM at page load or added in later. The name of this concept is called "Event Propagation" which is when an event moves through the DOM from the child to parent, in this case from the button event up to the parent paragraph.

There is a commonly used method in DOM traversal call the EQ method (the equals method). This method retuns the selected child from an array of children (ex. $("li").eq(1).css({color: "green"}); ). Now if you were to pass the .eq() method a negative number (ex. $("li").eq(-2); ) the method would count from the end of the array and give us the 2nd to last element. If you want to go from the 2nd child to the first one you would us the ".prev()" method (ex. $("li").eq(1).prev().css({color: "green"}); ); and to go from the 2nd item to the 3rd item you would use the ".next()" method the same way. You can also chain these DOM traversal methods together ".next().next(), etc."
*/

/*The first argument of the ".on()" method is the event(s) that we are listening for. The second argument is a selector for the actual element that we want to listen for the click on. Finally we have the click handler, the function that we want to run when this event happens. So with everything set up this way, whenever the user clicks on the .spoiler element or any elements within the spoiler element this methods to start listening because it may have to do soemthing. Also when the user clicks inside the .spoiler, if the thing that was clicked on was an element called button then run the function. This jQuery code below is an example of Event Delegation because it now doesnt' matter when the button is created or when other elements are added to the page.

One thing to consider is when we have multiple spoilers on the page. When this happens no matter what button is clicked all of the spoilers will be revealed. This can be fixed by using the "event" object which gets passed into the handler/function whenever an event occurs. The "event" object can be used by passing it into the handler as shown below. Why this object comes in handy is because it contains information on the event(s) that occur such as the type of the event and the targeted element that was interacated with. We are using the event object inside the handler when we go to hide the button that was clicked on. SIDE NOTE: The event object does not need be passed in with the name "event"; you can also use things like "evt" or "e". Also instead of using "event.target" we can use the shorthand version of it which is simply "this". So when "this" button is clicked show the previous before "this" and hide "this" button.

The ".prev()" method used below is an example of the DOM traversal methods mentioned above.
*/
$(".spoiler").on("click", "button", function(event) {
  $(this).prev().show();
  $(this).hide();
});


const $button = $("<button>Reveal Spoiler</button>"); //Doing this so that I follow the progressive enhancement rule of Unobtrusive JS. The part after the '=' is how you can create a new HTML element in jQuery and then assign it to a variable. The "$" character on the variable name is a common practice used when creating a variable that has a jQuery element (it is required but is a great way to distinguish between the variables that have jQuery attached to them and those that don't).

$(".spoiler").append($button); //This method always adds the newly created element to the end of the parent element that has been selected. There is another method called "prepend" which will insert the new HTML element to the beginning of the selected parent element.

$(".spoiler span").hide();

/*The event method that was originally used below was the ".click()" method. It has been replaced with the ".on()" methoed so that we can listen for multiple event handlers like mouseleave, keypress or a number of others. One thing to note is that if this event handler was still ".click()"  and all the jQuery code was moved above everything else it would not work. The reason is that we have not added the button to the page yet so this would not have anything to listen to at that point. More notes on this are listed above.
$(".spoiler button").on("click mouseleave", function() {
  $(".spoiler span").show();
  $(".spoiler button").hide();
});
*/