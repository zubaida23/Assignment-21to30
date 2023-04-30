21-25
//01
// Prompt the user for their first and last names
var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");

// Concatenate the first and last names into a full name
var fullName = firstName + " " + lastName;

// Display a greeting message using the full name
alert("Hello, " + fullName + "!");

//02
// Prompt the user for their favorite mobile phone model
var phoneModel = prompt("What is your favorite mobile phone model?");

// Find the length of the user's input
var inputLength = phoneModel.length;

// Display the length of the input in the browser
document.write("The length of your input is: " + inputLength);

//03
// Define the word to search for the letter "n"
var word = "Pakistani";

// Find the index of the letter "n" in the word
var index = word.indexOf("n");

// Display the index of the letter "n" in the browser
document.write("The index of the letter 'n' in the word '" + word + "' is: " + index);

//04
// Define the word to search for the letter "l"
var word = "Hello World";

// Find the last index of the letter "l" in the word
var lastIndex = word.lastIndexOf("l");

// Display the last index of the letter "l" in the browser
document.write("The last index of the letter 'l' in the word '" + word + "' is: " + lastIndex);

//05
// Define the word to search for the character at the 3rd index
var word = "Pakistani";

// Find the character at the 3rd index in the word
var char = word.charAt(3);

// Display the character at the 3rd index in the browser
document.write("The character at the 3rd index in the word '" + word + "' is: " + char);

//06
// Prompt the user for their first name
var firstName = prompt("Enter your first name:");

// Prompt the user for their last name
var lastName = prompt("Enter your last name:");

// Concatenate the first and last name into a new variable
var fullName = firstName.concat(" ", lastName);

// Greet the user using their full name
alert("Hello, " + fullName + "!");

//07
// Define the original word to be replaced
var originalWord = "Hyderabad";

// Replace "Hyder" with "Islam" in the word
var newWord = originalWord.replace("Hyder", "Islam");

// Display the new word in the browser
document.write("The original word '" + originalWord + "' after replacement is: " + newWord);

//08
// Define the original string
var message = "Ali and Sami are best friends. They play cricket and football together.";

// Replace all occurrences of "and" with "&" in the string
var newMessage = message.replace(/and/g, "&");

// Display the new string in the browser
document.write("The original message '" + message + "' after replacement is: " + newMessage);

//09
// Define the string to be converted
var stringNumber = "472";

// Convert the string to a number
var number = Number(stringNumber);

// Display the value and data type in the browser
document.write("The value of the number is: " + number + "<br>");
document.write("The data type of the number is: " + typeof(number));

//10
var userInput = prompt("Please enter some text:");
var capitalizedInput = userInput.toUpperCase();

document.write("Capitalized Input: " + capitalizedInput);

//12
var num = 35.36;
var str = num.toString().replace(".", ""); // convert num to string and remove dot
document.write(str); // display the string in the browser

var num = 12.98;
var str = num.toString().replace("", ""); // convert num to string and remove dot
document.write(str); // display the string in the browser.

//13
let username = prompt("Please enter your username:");

if (username.includes("@") || username.includes(".") || username.includes(",") || username.includes("!")) {
  alert("Invalid username! Please enter a valid username without any special symbols like @, ., , or !");
} else {
  alert("Welcome, " + username + "!");
}

// //14
// let A = ["cake", "apple pie", "cookie", "chips", "patties"];

// let userInput = prompt("What item are you searching for?").toLowerCase();

// let found = false;

// for (let i = 0; i < A.length; i++) {
//   if (A[i].toLowerCase() === userInput) {
//     found = true;
//     break;
//   }
// }

// if (found) {
//   alert(userInput + " is available in the list.");
// } else {
//   alert(userInput + " is not available in the list.");
// }


//15
let password = prompt("Please enter your password:");

if (!/^[a-zA-Z][a-zA-Z0-9]{5,}$/.test(password)) {
  alert("Invalid password! Please enter a valid password that meets the following criteria:\n- It should contain alphabets and numbers\n- It should not start with a number\n- It must be at least 6 characters long.");
} else 
  alert("Valid password!");

//16
var university = "University of Karachi";
var universityArray = university.split(" ");

for (var i = 0; i < universityArray.length; i++) {
  document.write(universityArray[i] + "<br>");
}


