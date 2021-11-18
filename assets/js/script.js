// Prompt welcome message "on click"

// Prompt Select your password criteria (3 options)


// Inclusion of at least one special character, e.g., ! @ # ? ]?? window.confirm 

// A mixture of letters and numbers?? window.confirm  

// window.prompt How many `characters` do you want your password to be? 

// Condition to enter valid digit between 8 and 128 characters // check 

// If invalid, message to repeat how many characters do you want your password to be

// Validate that session storage that at least one password criteria chosen. If not, go through the criteria prompt again

// code to check at least one option (character type) was chosen 

// if true, then generate password

// for loop ASCII codes to create the characters of the password 

// AskBCS 
// It can be written in one function 
// And then if you want separate it later
// Use arrays for criteria, and use conditions (if statement) for selection

// create array for each criteria

// Generate random lowercase letter
function getRandomLower() {
return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
// generate random uppercase latter 
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }
// generate random number
function getRandomNum() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  }
// generate random char
function getRandomChar() {
  var randomCharList ="!@#$%^&*()"
  return randomCharList [Math.floor(Math.random() * randomCharList.length)];
}

console.log(getRandomChar());   


var generatePassword = function (){
  window.alert("Welcome to Password Generator! Where you'll get a new secure password with a click of a button!");

  window.alert("Please select whether you would like the following three criteria included to your password");

  // A mixture of both uppercase and lowercase letters? window.confirm 

  var promptCase = window.confirm("Would you like to include upper and lower case letters?")


  
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
