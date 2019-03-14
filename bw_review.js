"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 11
   Case Problem 1

    Author: Jose Felix
    Date:   3.14.19
   
   Filename: bw_review.js
	
   Functions List:

   figure 11-32
   init()
      Initializes the contents of the web page and sets up the
      event handlers.
      
   lightStars(e)
      Function that colors the stars representing the user rating
      for the book.
      
   turnOffStars(e)
      Function that restores the stars to empty colors, removing
      the user rating for the book.

   updateCount()
      Updates the count of characters in the wordCountBox
      element.

   countCharacters(textStr)
      Returns the number of a non-whitespace characters
      within textStr

*/
//  file loaded asynchronously using async
// onload the page will run the init function
window.onload = init;

// create the init function
function init() {
      // var stars holds the stars id in the span element
      var stars = document.querySelectorAll("span#stars img");
      // loop for each image to change the cursor
      for (var i = 0; i < stars.length; i++) {
            stars[i].style.cursor = "pointer";
            // event listener to listen for mouse enter to activate lightStars
            stars[i].addEventListener("mouseenter", lightStars);
      }
      // add event listener for the comment box on the keyup event to run the function updateCount
      document.getElementById('comment').addEventListener('keyup', updateCount);
}

function lightStars(e) {

}

function turnOffStars(e) {

}

function updateCount() {

}

function countCharacters(textStr) {

}
  
  
/*=================================================================*/

function countCharacters(textStr) {
   var commentregx = /\s/g;
   var chars = textStr.replace(commentregx, "");
   return chars.length;
}   