// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Function to prompt user for password criteria
function getPasswordCriteria(){
  // prompt for password length
  var passwordLength = parseInt(prompt("Enter character length of password (must be a number between 8 and 128 characters):"));
  // validate password length
  while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128){
    passwordLength = parseInt(prompt("Invalid input. Please enter password length between 8 and 128 characters:"));
  }
  
// prompt for character types
var includeLowerCase = confirm("Include lowercase characters?");
var includeUpperCase = confirm("Include uppercase characters?");
var includeNumeric = confirm("Include numeric characters?");
var includeSpecialChars = confirm("Include special characters?");

// Validate at least one character type is selected
while (!(includeLowerCase || includeUpperCase || includeNumeric || includeSpecialChars)) {
  alert("At least one character type must be selected.");
  includeLowerCase = confirm("Include lowercase characters?");
  includeUpperCase = confirm("Include uppercase characters?");
  includeNumeric = confirm("Include numeric characters?");
  includeSpecialChars = confirm("Include special characters?");
}

// Return selected criteria

return {
  length: passwordLength,
  lowerCase: includeLowerCase,
  upperCase: includeUpperCase,
  numeric: includeNumeric,
  specialChars: includeSpecialChars
};
}

//Function to generate password based on criteria
 function generatePassword(){
  var criteria = getPasswordCriteria();
  var chars = '';
  var password = '';

  if (criteria.lowerCase){
    chars += 'abcdefghijklmnopqrstuvwxyz';
  }
  if (criteria.upperCase){
    chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  if (criteria.numeric){
    chars += '0123456789';
  }
  if (criteria.specialChars){
    chars += '!@#$%^&*()_+[]{}|;:,.<>?';
  }

  for (var i = 0; i< criteria.length; i++){
    var randomIndex = Math.floor(Math.random()*chars.length);
    password += chars[randomIndex];
  }

  return password;
 }
// Write password to the #password input or display in an alert
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  // Alternatively, display the password in an alert
  // alert("Generated Password: " + password);

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
