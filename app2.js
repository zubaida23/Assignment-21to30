//25-30

//03
let num = -5;
let absoluteValue = Math.abs(num);

console.log("The absolute value of " + num + " is " + absoluteValue);

//04
// Generate a random number between 1 and 6 to simulate a dice roll
let diceValue = Math.floor(Math.random() * 6) + 1;

// Display the value of the dice in the console
console.log("The value of the dice is " + diceValue);

// Display the value of the dice in the browser
document.write("The value of the dice is " + diceValue);

//05
// Generate a random number between 0 and 1 to simulate a coin toss
let coinToss = Math.floor(Math.random() * 2);

// Define the coin sides based on the coin toss result
let coinSide = coinToss === 0 ? "heads" : "tails";

// Display the value of the coin in the console
console.log("The coin landed on " + coinSide);

// Display the value of the coin in the browser
document.write("The coin landed on " + coinSide);

//06
// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Display the random number in the browser
document.write("Random number between 1 and 100: " + randomNumber);

//07
let weightInput = prompt("Please enter your weight:");

// Remove any non-numeric characters from the input
let weight = parseFloat(weightInput.replace(/[^\d.]/g, ''));

// Check if the input contains "kg" or "kilograms" and convert to kg if necessary
if (weightInput.includes("kg")) {
  weight = weight;
} else if (weightInput.includes("kilograms")) {
  weight = weight;
} else {
  // If no unit is specified, assume kg
  weight = weight / 2.20462;
}

// Display the weight in the browser
document.write("Your weight is: " + weight.toFixed(2) + " kg");

//08
// Generate a random secret number between 1 and 10
const secretNumber = Math.floor(Math.random() * 10) + 1;

// Ask the user to input a number between 1 and 10
const userInput = parseInt(prompt("Guess a number between 1 and 10"));

// Check if the user input equals the secret number
if (userInput === secretNumber) {
  console.log("Congratulations! You guessed the secret number.");
} else {
  console.log("Sorry, your guess is incorrect. The secret number was " + secretNumber);
}
