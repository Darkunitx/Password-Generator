// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var passwordLength = parseInt(window.prompt("How many characters do you want in your password?"));

  if (passwordLength < 8 || passwordLength > 128) {
    alert("You must enter a number that is between 8 and 128")
    return null;
    
  }

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
