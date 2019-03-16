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
      document.getElementById("comment").addEventListener("keyup", updateCount);
}

function lightStars(e) {
      // this is to target the alt value in var starNumber
      var starNumber = e.target.alt;

      // 
      var stars = document.querySelectorAll("span#stars img");
      // these for loops run the image 
      for (var i = 0; i < starNumber; i++) {
            stars[i].src = "bw_star2.png";
      }
      for (var i = starNumber; i < 5; i++) {
            stars[i].src = "bw_star.png";
      }
      // event listeners to activate the functions after the listener is triggered
      document.getElementById("rating").value = starNumber + " star(s)";
      e.target.addEventListener("mouseleave", turnOffStars);
      // anonymous function run after clicked function that removes turnOffStars when the mouse leaves the area
      e.target.addEventListener("click", function () {
            e.target.removeEventListener("mouseleave", turnOffStars);
      });
}

function turnOffStars(e) {
      // you use the span#stars img per the instructions in the code
      var stars = document.querySelectorAll("span#stars img");
      for (var i = 0; i < stars.length; i++) {
            stars[i].src = "bw_star.png"; 
      }
      // this targets the rating value and it makes it 
      document.getElementById("rating").value = "";
}

function updateCount() {
      // this is to reference the comment value and i use the id of comment to do so.
      var commentText = document.getElementById("comment").value;
      var charCount = countCharacters(commentText);
      //this references the wordCount input box using the id
      var wordCountBox = document.getElementById("wordCount");
      //this is to calculate the number of integers in the code for it to be displayed via javascript
      wordCountBox.value = charCount + "/1000";
      // this is the if else statement that changes the wordcount style or color based on what is happening
      if (charCount > 1000) {
            wordCount.style.color = "white";
            wordCount.style.backgroundColor = "red";
      } else {
            wordCount.style.color = "black";
            wordCount.style.backgroundColor = "white";
      }
}

function countCharacters(textStr) {

}
  

/*=================================================================*/

function countCharacters(textStr) {
   var commentregx = /\s/g;
   var chars = textStr.replace(commentregx, "");
   return chars.length;
}   