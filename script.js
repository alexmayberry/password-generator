// Tasks my code needs to complete



let passLength = 0;
let lowercaseLetters = false;
let uppercaseLetters = false;
let numbers = false;
let specialCharacters = false;
let possibleLetters = "abcdefghijklmnopqrstuvwxyz";
let possibleNumbers = "0123456789";
let possibleSpecialCharacters = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

console.log(possibleSpecialCharacters);
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

  if (uppercaseLetters === false && uppercaseLetters === lowercaseLetters === numbers === specialCharacters) {
    alert("Please choose at least two types of characters to include in your password.");
    generatePassword();
  }

  // create string with all possible characters for password

  // randomly pick characters in that possibleCharacter string and add to final password string

  //write password to html element



};

generatePassword();









// Randomly select characters to construct password

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
