// Prompt the user for password criteria
// Length between 8<128
// Lowecase, uppercase, numbers, special characters
// Validate the input
// generate password based on criteria 


// 4. Display password 

var generatePassword = function (){
  var chars = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var passwordLength = 12;
  var PW = "";
  
  for (var i = 0; i <= passwordLength; i++){
    var randomNumber = Math.floor(Math.random() * chars.length);
    return PW + gitchars.substring(randomNumber, randomNumber +1);
  }
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
