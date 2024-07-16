/* We covered 3 browser-specific functions to interact with visitors:

alert----------shows a message.

prompt---------shows a message asking the user to input text. It returns the text or, if Cancel button or Esc is clicked, null.

confirm--------shows a message and waits for the user to press “OK” or “Cancel”. It returns true for OK and false for Cancel/Esc. */

/* //alert
alert("Hello World");

// prompt
var name = prompt("What is your name?");
alert("Hello " + name);



// confirm
var answer = confirm("Are you sure you want to delete this file?");
alert(answer);

// confirm
var answer = confirm("Are you sure you want to delete this file?");
if (answer) {
    alert("File deleted");
    } else {
        alert("File not deleted");
        }
--------------------------------------------------------------------------------------------------------------------------------------- */


