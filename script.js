// Button!
var generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
  if (!max) {
    max = min
    min = 0
  }
  var rand = Math.random()
  return Math.floor(min*(1 - rand) + rand*max)
}

function getRandomItem(list) {
  return list[randomInt(list.length)]    
}

function generatePassword() {

  var numberList = ["0","1","2","3","4","5","6","7","8","9"]
  var upperCaseList = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",]
  var lowerCaseList = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",]
  var specialCharList = ["~","`","!","@","#","$","%","^","&","*","(",")","<",">","/"]
  var passwordLength = parseInt(window.prompt("How many characters do you want in your password?"))

  var optionsCart = []

  if (isNaN(passwordLength)) {
    window.alert("Please enter a Valid Number.")
    return null;
  }

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("You must enter a number that is between 8 and 128")
    return null;
  }

  var isNumbers = window.confirm("Would you like Numbers in your password?")
  var isUpperCase = window.confirm("Would you like Upper case letters in your password?")
  var isLowerCase = window.confirm("Would you like Lower case letters in your password?")
  var isSpecialChar= window.confirm("Would you like Special Characters in your password?")

  if (isNumbers === true) {
    optionsCart.push(numberList)
  }

  if (isUpperCase === true) {
    optionsCart.push(upperCaseList)
  }

  if (isLowerCase === true) {
    optionsCart.push(lowerCaseList)
  }

  if (isSpecialChar === true) {
    optionsCart.push(specialCharList)
  }

  if (isNumbers === false && isUpperCase === false && isLowerCase === false && isSpecialChar === false) {
    window.alert("You must choose at least one character type!")
    return null;
  }

  var generatedPassword = ""

  for (var i = 0; i < passwordLength; i++) {
    var randomList = getRandomItem(optionsCart)
    var randomChar = getRandomItem(randomList)
    generatedPassword += randomChar
  }

  return generatedPassword
}

// writepassword function
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Added click event
generateBtn.addEventListener("click", writePassword);
