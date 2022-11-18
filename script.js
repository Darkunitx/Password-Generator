var generateBtn = document.querySelector("#generate");

var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var upperCaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];
var lowerCaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
var specialCharacters = ["~","`","!","@","#","$","%","^","&","*","(",")","<",">","/"];


function writePassword() {

  var userChoice = window.prompt("Hello and welcome to Random Password Generator, This program will generate a random password based on the criteria that you have selected. You will be prompted to choose at least one of the following: Numbers, Upper Case letters, Lower Case letters or Special characters. Do you wish to continue?");

  if (userchoice === false) {
       return null;
  }

  else {
  var length = parseInt(window.prompt("How long do you want your password to be?"));
    
  }



  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


function generatePassword () {


}
generatePassword ();


generateBtn.addEventListener("click", writePassword);
