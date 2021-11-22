// Establish character types in objects 


  var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var number = ["0","1","2","3","4","5","6","7","8","9"];
  var symbol = ["!","@","#","$","%","^","&","*","(",")","-","+"];




// function to run when generate password button is clicked 
// returns password choices {object}
function generatePasswordOptions() {

  // default value for Char Set 
 var length = parseInt(prompt("Enter a number from 8 to 128 for password length."));
  if (length < 8 || length > 128){
    alert("You have entered an invalid response. Please try again")
    generatePasswordOptions();
  }  
  if (Number.isNaN(length)){
    alert("Password must be a number. Please try again")
    generatePasswordOptions();
  }
  var hasSpecialCharacters = confirm("Would you like to use special characters?")
  var hasLowerCase = confirm("Would you like to use lowercase letters?")
  var hasUpperCase =confirm("Would you like to use uppercase letters?")
  var hasNumbers = confirm("Would you like to use numbers?")

  if (!hasLowerCase && !hasUpperCase && !hasNumbers && !hasSpecialCharacters) {
    alert("You must select at least one character type!");
    return null
  }  
  // Create object for properties establish Keys and Values for later use
  var passwordChoices ={
    length: length,
    hasLowerCase: hasLowerCase,
    hasNumbers: hasNumbers,
    hasUpperCase: hasUpperCase,
    hasSpecialCharacters: hasSpecialCharacters,    
  }
  console.log(passwordChoices)
  return passwordChoices
} 

// make helper functions 
function random (choices){
    var randomIdx = Math.floor(Math.random() * choices.length); 
    var randomEl = choices[randomIdx];
    return randomEl;
}
function generatePassword(){
    var passwordOptions = generatePasswordOptions();
    var endResult = []
    var potentialCharacters = []
    var confirmedCharacters = []
    if (!passwordOptions) return null;

    if (passwordOptions.hasLowerCase) {
      potentialCharacters = potentialCharacters.concat(lowercase)
      confirmedCharacters.push(random(lowercase))
    }
    if (passwordOptions.hasNumbers) {
      potentialCharacters = potentialCharacters.concat(number)
      confirmedCharacters.push(random(number))
    }
    if (passwordOptions.hasSpecialCharacters) {
      potentialCharacters = potentialCharacters.concat(symbol)
      confirmedCharacters.push(random(symbol))
    }
    if (passwordOptions.hasUpperCase) {
      potentialCharacters = potentialCharacters.concat(uppercase)
      confirmedCharacters.push(random(uppercase))
    }

    for (let i = 0; i < passwordOptions.length; i++) {
      var potentialCharacters = random(potentialCharacters)
      endResult.push(potentialCharacters)
    }
    for (let i = 0; i<confirmedCharacters.length; i++) {
      endResult[i] = confirmedCharacters[i]   
    }
    return endResult.join("")
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
