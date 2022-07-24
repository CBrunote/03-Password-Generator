// Assignment code here

function generatePassword() {
  // Logic to provide error messages
  while (true) {
    // Variables for Password length and answers
    var userInput = window.prompt("How long do you want the password to be? (Must be between 8 and 128 character)");
    var passwordLength = parseInt(userInput)

    if (userInput === null) {
      return
    }

    if (isNaN(passwordLength)) {
      window.alert("ERROR: Value must be a number!") 
    } else if (passwordLength < 8 || passwordLength > 128) {
      window.alert("ERROR: Password must be between 8 and 128 characters")
    } else {
      break
    }
  }

  while (true) {
    // Variables For Criteria questions
    var wantsLowercase = window.confirm("Do you want Lowercase Characters in your password?");
    var wantsUppercase = window.confirm("Do you want Uppercase Characters in your password?");
    var wantsNumbers = window.confirm("Do you want Numbers in your password?");
    var wantsSymbols = window.confirm("Do you want Symbols in your password?");

    if (wantsLowercase === false && wantsUppercase === false && wantsNumbers === false && wantsSymbols === false) {
    window.alert("ERROR: YOU MUST INCLUDE AT LEAST ONE TYPE OF CHARACTER!")
    } else {
      break
    }
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

  // Array Created by window.confirm variables 
  var charBucket = []
  
  // Array of random character that was pulled out of each character variable array to guarentee one character of each selected type is used.
  var finalBucket = []

  // Variable for array of randomly slected characters to be joined later as the finieal password
  var finalPassword = []

  // Conditional statements to add the appropriate array to charBucket if the user confirmed they wanted the character type.
  //Once they are selected, a random index from the array is selected and added to the final bucket array to guarantee one character of each selected type is used.

  if (wantsLowercase === true) {
    charBucket = charBucket.concat(lowerChar)
    finalBucket.push(lowerChar[Math.floor(Math.random() * lowerChar.length)]);
  }

  if (wantsUppercase === true) {
    charBucket = charBucket.concat(upperChar)
    finalBucket.push(upperChar[Math.floor(Math.random() * upperChar.length)]);
  }

  if (wantsNumbers === true) {
    charBucket = charBucket.concat(numbers)
    finalBucket.push(numbers[Math.floor(Math.random() * numbers.length)]);
  }

  if (wantsSymbols === true) {
    charBucket = charBucket.concat(symbols)
    finalBucket.push(symbols[Math.floor(Math.random() * symbols.length)]);
  }

  // For loop to choose random index's from charBucket and add the value of each index to the finalPassword array.
  for (var i = 0; i < (passwordLength); i++){
    var randomIndex = Math.floor(Math.random() * charBucket.length)
    var randomChar = charBucket[randomIndex]
    finalPassword.push(randomChar)
  }
  // For loop to iterate over the items placed into the finalBucket array and assigns them to their places in the finalPassword Array
  for (var i = 0; i < (finalBucket.length); i++){
    finalPassword[i] = finalBucket[i]
  }
  // Returns finalPassword as string by using the join method.
  return finalPassword.join(""); 
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

//added logic to keep password from reading as undefined if the function is cancelled.  
  if (password === undefined) {
    return
  } else {
  passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
