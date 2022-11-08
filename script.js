// Assignment Code
var generateBtn = document.querySelector("#generate");

function userInfo() {
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

  var numberList = ["0","1","2","3","4","5","6","7","8","9"]
  var upperCaseList = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",]
  var loserCaseList = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",]
  var specialCharList = ["~","`","!","@","#","$","%","^","&","*","(",")","<",">","/"]

  
  if (isNumbers === false && isUpperCase === false && isLowerCase === false && IsSpecialChar === false) {
    window.alert("You must choose at least one character type!")
    return null;
  }

}

  
function generatePassword() {
  var passwordInfo = userInfo();
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
