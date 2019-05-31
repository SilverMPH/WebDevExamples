/*
NOTE: You can utilize a variable like "input" and take its attributes and use them in JavaScript (JS). For example you can get a set the type attribute like this "input.type". You can also get and set the elements class name by using "input.className". In this section the teacher talks about both nodes and elements. He mentions that nodes belong to the DOM and elements to the HTML.

These method calls for "addEventListener" are what is used to set up a handler on the event target. This works by making the target (in this case toggleList) listen for the event "click" and whenever that happens it fires up the call-back function or event handler goes through the function's steps.
*/

const toggleList = document.getElementById("toggleList");
const listDiv = document.querySelector(".list");

const descriptionInput = document.querySelector("input.description");
const descriptionP = document.querySelector("p.description");
const descriptionButton = document.querySelector("button.description"); //The '.description' was added to differentiate the two buttons on the page. Otherwise both click events will fire when either button is clicked.
const listUl = listDiv.querySelector("ul");

const addItemInput = document.querySelector("input.addItemInput");
const addItemButton = document.querySelector("button.addItemButton");
//const removeItemButton = document.querySelector("button.removeItemButton"); **Commenting this out because we added similar functionality later with placing the Remove buttons next to the list items

const lis = listUl.children; //This returns all the children inside the targeted element.
const firstListItem = listUl.firstElementChild; //This is returns the first element within the parent node. There is also an older "firstChild" property however that one doest always return an HTML element.
const lastListItem = listUl.lastElementChild; //This is returns the last element within the parent node. There is also an older "firstChild" property however that one doest always return an HTML element.

firstListItem.style.backgroundColor = "green";
lastListItem.style.backgroundColor = "blue";

//Below is a function used through this JS file to create buttons that go along with the "li" elements on the page.
function attachListItemButtons(li) {
  let up = document.createElement("button");
  up.className = "up";
  up.textContent = "Up";
  li.appendChild(up);  
  
  let down = document.createElement("button");
  down.className = "down";
  down.textContent = "Down";
  li.appendChild(down);
  
  let remove = document.createElement("button");
  remove.className = "remove";
  remove.textContent = "Remove";
  li.appendChild(remove);
}

//This loop is used to call the function above and add the buttons to the existing "li" elements on the page.
for (let i = 0; i < lis.length; i += 1) {
  attachListItemButtons(lis[i]);
}

/*
const listItems = document.getElementsByTagName("li"); //This selection was originally used on the mouseover/mouseout events below however when a new list item was added that element would not inherit the event listener.

//Below is one way we used to make the functionality happen but as mentioned above it did not extend to new list items.
for (let i = 0; i < listItems.length; i += 1) {
  //Below is an example of a mouseover event listener.
  listItems[i].addEventListener("mouseover", () => {
    listItems[i].textContent = listItems[i].textContent.toUpperCase();        
  });
  
  //Below is an example of a mouseout event listener.
  listItems[i].addEventListener("mouseout", () => {
    listItems[i].textContent = listItems[i].textContent.toLowerCase();       
  });
}
*/


/*
//The use of listDiv is part of what we are using to fix the issue mentioned in the commented out text above. This is using a technique called "bubbling" that means that any event that happens on a child element also bubbles up and happens to the parent element as well. So by applying the eventlistener to the div that is around the list items we are looking at any time a new list item is added it will inherit the event listener from its parent div.
listDiv.addEventListener("mouseover", (event) => {
  //The ".tagName" property returns the element type of the node where the event was activated and it is returned in all-caps.
  if (event.target.tagName == "LI") {
    event.target.textContent = event.target.textContent.toUpperCase(); //This is used to make the selected item(s) all uppercase when the event occurs.
  }
});

listDiv.addEventListener("mouseout", (event) => {
  if (event.target.tagName == "LI") {
    event.target.textContent = event.target.textContent.toLowerCase(); //This is used to make the selected item(s) all lowercase when the event occurs.
  }
});
*/

/*
//Below is an example of using the event object that is created and sent to the listener whenever the specified event happens.
document.addEventListener("click", (event) => {
  console.log(event.target); //The ".target" is a property that returns the element that first had the event happen to it.
});
*/

//The JS below is being used to set up the functionality when a specified event (mouseover, click, etc.) happens to a list item, or in this case a button, the list item gets deleted. 
//NOTE: We changed the targeted element from "listDiv" to "listUl" to make sure we are only targetting the buttons that are inside the UL element.
listUl.addEventListener("click", (event) => {
  //The tag type we were originally comparing to was a LI element
  if (event.target.tagName == "BUTTON") {
    if (event.target.className == "remove") {
      let li = event.target.parentNode; //This is used to find the parent of the button that has been clicked.
      let ul = li.parentNode; //The ".parentNode" property is used to find the parent of the target element.
      ul.removeChild(li);
    }
    if (event.target.className == "up") {
      let li = event.target.parentNode;
      let prevLi = li.previousElementSibling; //This returns the previous sibling to the element that is selected. The reason why we are not just using ".previousSibling" is because that will return the previouw item in the DOM which could even be a blank space used in styling the text. In other words, .previousSibling does not always return a DOM element.
      let ul = li.parentNode;
      
      //This is to check to make sure that actually is a previous list item. If there isn't a previous element the property will return "null" as the value.
      if (prevLi) {
        ul.insertBefore(li, prevLi); //This takes the selected "li" and places it before the selected "prevLi".
      }
    }
    //This 'if' test is a part of the challenge that was given at the end of this course.
    if (event.target.className == "down") {
      let li = event.target.parentNode;
      let nextLi = li.nextElementSibling; //This returns the next sibling to the element that is selected and it does so within its parents children list
      let ul = li.parentNode;
      
      //This is to check to make sure that actually is a previous list item. If there isn't a previous element the property will return "null" as the value.
      if (nextLi) {
        ul.insertBefore(nextLi, li); //This takes the selected "nextLi" and places it before the selected "li".
      }
    }
  }
});


toggleList.addEventListener("click", () => {
  if (listDiv.style.display == "none") {
    toggleList.textContent = "Hide List";
    listDiv.style.display = "block"; //NOTE: This style object and its associated properties only affect the inline CSS of the element selected.
  }
  else {                          
    toggleList.textContent = "Show List";
    listDiv.style.display = "none"; //NOTE: This style object and its associated properties only affect the inline CSS of the element selected.
  }
});

descriptionButton.addEventListener("click", () => {
  //descriptionP.textContent = descriptionInput.value + ":"; **The "textContent" property is what is used to get and set the copy in whatever element is attached to this property.
  descriptionP.innerHTML = descriptionInput.value + ":"; //The "innerHTML" property can get and set the copy in whatever element is attached to it along with reading and altering the elements on a web page (so it can read and replace everything in between the opening and closing tags; ex. a 'p' tag, 'h1' tag, 'ul' tag, etc.).
  descriptionInput.value = "";
});

/*Below is how I solved adding in the buttons on the page when a new item is added. Up top is what the teacher suggested to be done using another property.
addItemButton.addEventListener("click", () => {
  let ul = document.getElementsByTagName("ul")[0]; //Using this to select the parent node or element (see above for more on nodes and elements).
  let li = document.createElement("li"); //This method creates a new element of the type that you specify.
  li.textContent = addItemInput.value;

  let upBtn = document.createElement("button"); //I added this to add in the functionality of placing an "Up" button next to the list item that was created above.
  upBtn.textContent = "Up";
  upBtn.className = "up";
  li.appendChild(upBtn); //This will append the "button" element to the end of the "li" node that was also created in this event listener.

  let downBtn = document.createElement("button"); //I added this to add in the functionality of placing an "Down" button next to the list item that was created above.
  downBtn.textContent = "Down";
  downBtn.className = "down";
  li.appendChild(downBtn); 

  let removeBtn = document.createElement("button"); //This creates the "Remove" button.
  removeBtn.textContent = "Remove";
  removeBtn.className = "remove";
  li.appendChild(removeBtn);
  
  ul.appendChild(li); //This will append the new "li" element to the "ul" node we selected and place it at the end.
  addItemInput.value = ""; //This is used to clear the value in the text field.
});
*/

//This is the original way the teacher taught us to set up this handler. Using this in concert with another function up top.
addItemButton.addEventListener("click", () => {
  let ul = document.getElementsByTagName("ul")[0]; //Using this to select the parent node or element (see above for more on nodes and elements).
  let li = document.createElement("li"); //This method creates a new element of the type that you specify.
  li.textContent = addItemInput.value;

  attachListItemButtons(li); //This is calling the function created above to add the needed buttons to the li element.

  ul.appendChild(li); //This will append the new "li" element to the "ul" node we selected and place it at the end.
  addItemInput.value = ""; //This is used to clear the value in the text field.
});

/*Commented out because we have similar content now with the remove buttons next to the list items.
removeItemButton.addEventListener("click", () => {
  let ul = document.getElementsByTagName("ul")[0]; 
  let li = document.querySelector("li:last-child"); //This will select the last "li" element in the list using the "last-child" psedo-selector.
  ul.removeChild(li); //This will remove the "li" element in the "ul" node we selected.

});
*/

//p.title = "List Description"; **This is an example of setting the elements attribute using the "title" property. In this case you probably wouldn't do this with JS but in the HTML instead.