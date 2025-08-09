/* 
  Part 1: Variables, Data Types, Operators, and Conditionals 
*/
const part1Output = document.getElementById('part1-output');

// Declare some variables
let userAge = 18;
let userName = "Alex";
let hasLicense = false;

// Use conditionals to build message
if (userAge >= 18 && hasLicense) {
  part1Output.textContent = `${userName} is allowed to drive.`;
} else if (userAge >= 18 && !hasLicense) {
  part1Output.textContent = `${userName} is old enough but does not have a license.`;
} else {
  part1Output.textContent = `${userName} is not old enough to drive.`;
}

/* 
  Part 2: Custom Functions — reusable blocks of logic
*/

// Function to greet user by name
function greet(name) {
  return `Hello, ${name}! Welcome back.`;
}

// Function to calculate area of a rectangle
function calculateArea(width, height) {
  return width * height;
}

// DOM elements for Part 2
const btnGreet = document.getElementById('btn-greet');
const greetOutput = document.getElementById('greet-output');

// Event listener to greet user
btnGreet.addEventListener('click', () => {
  greetOutput.textContent = greet(userName);
});


/* 
  Part 3: Loops — repetition control 
*/

// DOM elements for Part 3
const btnForLoop = document.getElementById('btn-for-loop');
const btnWhileLoop = document.getElementById('btn-while-loop');
const loopOutput = document.getElementById('loop-output');

// Loop example 1: for loop to list numbers 1 to 5
btnForLoop.addEventListener('click', () => {
  let output = "Numbers: ";
  for (let i = 1; i <= 5; i++) {
    output += i + " ";
  }
  loopOutput.textContent = output.trim();
});

// Loop example 2: while loop countdown from 5 to 1
btnWhileLoop.addEventListener('click', () => {
  let output = "Countdown: ";
  let count = 5;
  while (count > 0) {
    output += count + " ";
    count--;
  }
  loopOutput.textContent = output.trim();
});

/* 
  Part 4: DOM Manipulation and Interaction
*/

// DOM elements for Part 4
const btnToggle = document.getElementById('btn-toggle');
const btnAddItem = document.getElementById('btn-add-item');
const dynamicList = document.getElementById('dynamic-list');

let highlightOn = false;
let listItemCount = 0;

// 1. Toggle highlight on Part 4 section
btnToggle.addEventListener('click', () => {
  const part4Section = document.getElementById('part4');
  highlightOn = !highlightOn;
  if (highlightOn) {
    part4Section.classList.add('highlight');
  } else {
    part4Section.classList.remove('highlight');
  }
});

// 2. Add new list items dynamically
btnAddItem.addEventListener('click', () => {
  listItemCount++;
  const li = document.createElement('li');
  li.textContent = `Dynamic Item ${listItemCount}`;
  dynamicList.appendChild(li);
});

// 3. Update a DOM element (reuse greet function output)
greetOutput.textContent = greet(userName);

