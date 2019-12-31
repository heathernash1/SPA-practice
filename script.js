//query selector accepts ANY CSS Selector as a string.
const form = document.querySelector("form");

/**
 *  1. Listen for an Event.
 * 2. Use a CB fxn. when this event occurs.
 */
form.addEventListener("submit", function(event) {
  event.preventDefault();
  console.log("i am submitted");
});

console.log(form);
