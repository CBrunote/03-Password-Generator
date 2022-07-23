// Assignment code here

function generatePassword() {
  // Variables for Password length and answers
  var userInput = window.prompt("How long do you want the password to be? (Must be between 8 and 128 character)");
  var passwordLength = parseInt(userInput)

  // Logic to provide error messages
  if (isNaN(passwordLength)) {
    window.alert("ERROR: Value must be a number!")
    return;
  }

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("ERROR: Password must be between 8 and 128 characters")
    return;
  }

  // Variables For Criteria questions
  var wantsLowercase = window.confirm("Do you want Lowercase Characters in your password?");
  var wantsUppercase = window.confirm("Do you want Uppercase Characters in your password?");
  var wantsNumbers = window.confirm("Do you want Numbers in your password?");
  var wantsSymbols = window.confirm("Do you want Symbols in your password?");

  if (wantsLowercase === false && wantsUppercase === false && wantsNumbers === false && wantsSymbols === false) {
    window.alert("ERROR: YOU MUST INCLUDE AT LEAST ONE TYPE OF CHARACTER!")
    return;
  }

  // Variables for Characters
  var lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var upperChar = []
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var symbols = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"]
  // For loop to convert lowercase array to uppercase
  for (var i = 0; i < lowerChar.length; i++) {
    upperChar[i] = lowerChar[i].toUpperCase()
  }

  // Array Created by window.confirm variable 
  var charBucket = []
  
  if (wantsLowercase === true) {
    charBucket.push(lowerChar)
  }

  if (wantsUppercase === true) {
    charBucket.push(upperChar)
  }

  if (wantsNumbers === true) {
    charBucket.push(numbers)
  }

  if (wantsSymbols === true) {
    charBucket.push(symbols)
  }

  console.log(charBucket);

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
