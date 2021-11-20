
// Create object for functions created below for random criteria

var randomFunction ={
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSumbol
}

// Functions to generate random based on criteria

function getRandomLower(){
  return String.fromCharCode(Math.floor(Math.random() *26) + 97);
}
function getRandomUpper(){
  return String.fromCharCode(Math.floor(Math.random() *26) + 65);
}
function getRandomNumber(){
  return String.fromCharCode(Math.floor(Math.random() *10) + 48);
}
function getRandomSumbol(){
    const symbols = "!@#$%^&*(){}[]=<>,.";
    return symbols[Math.floor(Math.random() * symbols.length)];
}



var generatePassword = function (){
  // Prompt welcome message
  window.alert("Welcome to Password Generator. You're on your way to a new shiny password!");


  // Pormpt to choose Length between 8<128
  var passwordLength = window.prompt("Please choose a password length between 8 and 128 characters");
// convert password lenght input to integer
  passwordLength = parseInt(passwordLength);
// validate if the password is between 8 * 128 characters
  if (passwordLength < 8 || passwordLength > 128){
    window.alert("You need to provide a valid answer! Please try again.");
  }

  console.log(passwordLength);


// Prompt the user for password criteria


}
// Lowecase, uppercase, numbers, special characters
// Validate the input
// generate password based on criteria 


// 4. Display password 




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
