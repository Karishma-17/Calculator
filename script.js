// This function appends the clicked button value to the display
function appendValue(value) {
    let display = document.getElementById('display');
    display.value += value;  // Adds the value (number or operator) to the current display text
  }
  
  // This function clears the display when the "C" button is clicked
  function clearDisplay() {
    let display = document.getElementById('display');
    display.value = '';  // Resets the display to an empty string
  }
  
  // This function calculates the result when "=" button is clicked
  function calculateResult() {
    let display = document.getElementById('display');
    try {
      // Use the JavaScript eval function to evaluate the expression on the display
      display.value = eval(display.value); 
    } catch (error) {
      // In case of invalid expression, show an error message
      display.value = 'Error';
    }
  }
  