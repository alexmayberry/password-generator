// Tasks my code needs to complete



let passLength = 0;
let lowercaseLetters = false;
let uppercaseLetters = false;
let numbers = false;
let specialCharacters = false;
let possibleLetters = "abcdefghijklmnopqrstuvwxyz";
let possibleNumbers = "0123456789";
let possibleSpecialCharacters = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

function generatePassword() {
  // store password preferences in variables and validate preferences
  passLength = prompt("How many characters would you like your password to be? Please enter a number between 8 and 129");
  if (passLength >= 8 && passLength <= 129) { 
    console.log("passLength is: " + passLength);
  }
    else {
    alert("Please enter a valid number between 1 and 129 using numeric characters.");
    console.log("passLength is: " + passLength);
    generatePassword();   
  }

  lowercaseLetters = confirm("Select 'Okay' if you would like lowercase letters in your password. If not, select 'Cancel'.")

  console.log("lowercase Letters: " + lowercaseLetters)

  uppercaseLetters = confirm("Select 'Okay' if you would like uppercase letters in your password. If not, select 'Cancel'.")

  console.log("uppercase Letters is: " + uppercaseLetters)

  numbers = confirm("Select 'Okay' if you would like numbers in your password. If not, select 'Cancel'.")

  console.log("numbers is: " + numbers)

  specialCharacters = confirm("Select 'Okay' if you would like special characters in your password. If not, select 'Cancel'.")

  console.log("special Characters is: " + specialCharacters)

  if (uppercaseLetters === false && uppercaseLetters === false && lowercaseLetters === false && numbers === false && specialCharacters === false) {
    alert("Please choose at least one types of characters to include in your password.");
    generatePassword();
  }

  // create string with all possible characters for password
  let possibleCharacters = "";

  if (lowercaseLetters === true) {
    possibleCharacters += possibleLetters;
  }
  if (uppercaseLetters === true) {
    possibleCharacters += possibleLetters.toUpperCase();
  }
  if (numbers === true) {
    possibleCharacters += possibleNumbers;
  }
  if (specialCharacters === true) {
    possibleCharacters += possibleSpecialCharacters;
  }
  console.log("final string of possible characters is: " + possibleCharacters + " Which has " + possibleCharacters.length + " number of characters.")


  
  // randomly pick characters in that possibleCharacter string and add to final password string
  let finalPass = "";
  for (i = 0; i < passLength; i++) {
    finalPass += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length))
  }
  console.log("final pass: " + finalPass);
  
  return finalPass;

  //write password to html element



};

// generatePassword();

console.log("generatepassword is: " + generatePassword())










// Write password to html element

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
