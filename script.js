// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var passwordLength = parseInt(window.prompt("How many characters do you want in your password?"));

  if (isNaN(passwordLength)) {
    window.alert("You must enter a Valid Number.")
    return null;

  }

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("You must enter a number that is between 8 and 128")
    
    return null;
    
  }

  var isNumbers = confirm("Would you like Numbers in your password?");
  var isUpperCase = confirm("Would you like Upper case letters in your password?");
  var isLowerCase = confirm("Would you like Lower case letters in your password?");
  var IsSpecialChar= confirm("Would you like Special Characters in your password?");

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
