// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword(length) {
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
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

  if (!isNaN(passwordLength) && passwordLength > 8 && passwordLength < 128){
    var password = generatePassword(passwordLength);
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  } else {
    alert("Invalid input. Please enter a positive number between 8 and 128 for password length")
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);