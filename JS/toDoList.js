/* 
    * Make references to the HTML elements that we want to interact with through 25
    * Add in the ability to add a new list item
    * Add in the ability to remove a list item
    * Add in the ability to mark a list item as done
*/

var submitButton = document.getElementById("submit");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul"); //querySelector gets the first instance of a particular element type. Since we only have one ul, this will create a reference to that ul.

function createListElement() {
    //Create a new li element
    var li = document.createElement("li");
    //Add content to it (the value)
    li.innerHTML = input.value;
    //Add it to our ul
    ul.appendChild(li);
    //Clear out the text input after we create our new list item
    input.value = "";

//Function to handle showing a list item as complete
function markDone() {
    //If the li does not have a class "done" applied to it, it will be applied. If it does, it will be taken off
    li.classList.toggle("done");
}

li.addEventListener("click", markDone);


}

//This is going to be used to create a list element when the submit button is tapped
function createListItemSubmitButton() {
    //Check to make sure our input actually has some text. An empty string will have a length of 0
    if (input.value > 0) {
    createListElement();
    }
}

//This is going to used to create a list element when the enter key is pressed 
function createListItemEnterKey() {
    console.log(event.keyCode);

    //Create a new list item if there is text in the input field and the enter key is pressed
    if (input.value.length > 0 && event.keyCode === 13) {
        createListElement(); 
    }
}

//Make it so that when the submit button is clicked, the createListItemSubmitButton function is called
submitButton.addEventListener("click", createListItemSubmitButton);

//This event listener will detect when keys are pressed while the input is active
input.addEventListener("keypress", createListItemEnterKey);
