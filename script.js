// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword(length, useLowercase, useUppercase, useNumeric, useSpecial) {
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()_+[]{}|;:,.<>?";

  var characters = "";

  if (useLowercase) {
    characters += lowercaseChars;
  }
  if (useUppercase) {
    characters += uppercaseChars;
  }
  if (useNumeric) {
    characters += numericChars;
  }
  if (useSpecial) {
    characters += specialChars;
  }

  if (characters === "") {
    alert("No character types selected. Please select at least one character type.");
    return "";
  }

  var randomPassword = "";

for (var i = 0; i < length; i++) {
  
  var randomIndex = Math.floor(Math.random() * characters.length);
  
  
  randomPassword += characters.charAt(randomIndex);
}

return randomPassword;
}

function writePassword() {

  var userInput = prompt("Enter the desired password length:");
  var passwordLength = parseInt(userInput);

  if (!isNaN(passwordLength) && passwordLength > 7 && passwordLength < 129){
    var useLowercase = confirm("Include lowercase characters?");
    var useUppercase = confirm("Include uppercase characters?");
    var useNumeric = confirm("Include numeric characters?");
    var useSpecial = confirm("Include special characters?");

    var password = generatePassword(passwordLength, useLowercase, useUppercase, useNumeric, useSpecial);
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  } else {
    alert("Invalid input. Please enter a positive number (must be at least 8 characters and no more than 128 characters) for password length")
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);