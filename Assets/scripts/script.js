
// GLOBAL VARIABLES
const currentTime = dayjs().format("H");
const timeEl = dayjs().format("h:mm A");
const currentDate = dayjs().format("MMMM D, YYYY");
const displayDateEl = $("#currentDay");
const displayTimeEl = $("#currentTime");

// console.log(currentTime);

// TODO: Add code to display the current date in the header of the page.

displayDateEl.append("Date: " + currentDate);
displayTimeEl.append("Time: " + timeEl);

// Add a listener for click events on the save button. This function saves the value of the textBlock into local storage.
$(".saveBtn").on("click", function () {

  // saving the value of the text area element to a variable
  let textBlock = $(this).siblings(".description").val();

  console.log(textBlock); // testing to make sure the text in the textarea element is saved in the textBlock variable

  // need to use the id in the containing time block as a key to save the user input
  let timeBlock = $(this).parent().attr('id');

  // console.log(timeBlock.attr('id')); // testing to make sure the corresponding ID is returned and saved to the variable, timeBlock.

  // SET local storage using timeBlock variable that always returns the correct corresponding id = "hour-i" as the key, and the saved value in the text block as the value.
  localStorage.setItem(timeBlock, textBlock);

});

// GET local storage using a for loop and display in the textarea by targeting #hour-i .description using concatenated strings.

for(let i = 9; i < 18; i++){
  // variable for target time block textarea element
  let storedText = $("#hour-" + i + " " + ".description");

  console.log(storedText.val());

  // get storage item and display it as the value of the block depending on its ID
  storedText.val(localStorage.getItem("hour-" + i)); 
}
  

// Code to apply the past, present, or future class to each time block by comparing the id to the current hour
for(let i = 9; i < 18; i++){

// target individual textareas one at a time
let blockArea = $("#hour-" + i + " " + ".description");

  if(i < currentTime){

    blockArea.removeClass("present");
    blockArea.removeClass("future");
    blockArea.addClass("past");

  } else if (i == currentTime){

    blockArea.removeClass("future");
    blockArea.removeClass("past");
    blockArea.addClass("present");

  } else {

    blockArea.removeClass("past");
    blockArea.removeClass("present");
    blockArea.addClass("future");

  }
}
