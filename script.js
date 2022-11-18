var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

var arrayStorage = [];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var upperCaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];
var lowerCaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
var specialCharacters = ["~","`","!","@","#","$","%","^","&","*","(",")","<",">","/"];


function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


function generatePassword () {

  var userChoice = window.alert("Hello and welcome to Random Password Generator, This program will generate a random password based on the criteria that you have selected. You will be prompted to choose at least one of the following: Numbers, Upper Case letters, Lower Case letters or Special characters. Do you wish to continue?");

  var passLength = parseInt(window.prompt("How long do you want your password to be?"));

  if (isNaN(passLength)) {
    window.alert("You need to enter a number")
    return;
  }

  if (passLength < 8 || passLength > 128) {
    window.alert("You must choose a number between 8 and 128")
    return;
  }

  var includingNumbers = window.prompt("Do you want Numbers in your password?");
  var includingUpper = window.prompt("Do you want Uppercase Letters in your password?");
  var includingLower = window.prompt("Do you want Lowercase Letters in your password?");
  var includingSpecial = window.prompt("Do you want Special Characters in your password?");


}
generatePassword();

