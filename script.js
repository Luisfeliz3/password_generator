// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function start() {
  console.log("Password Generated");
  var password = generatePassword();
  //  var passwordText = document.querySelector("#password");
  //  passwordText.value = password;
}
//return a string
function generatePassword() {
  // ======= vars definition ======
  // Array of special characters to be included in password
  var specialCharacters = [
    "@",
    "%",
    "+",
    "\\",
    "/",
    "'",
    "!",
    "#",
    "$",
    "^",
    "?",
    ":",
    ",",
    ")",
    "(",
    "}",
    "{",
    "]",
    "[",
    "~",
    "-",
    "_",
    ".",
  ];
  // Array of numeric characters to be included in password
  var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  // Array of lowercase characters to be included in password
  var lowerCasedCharacters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  // Array of uppercase characters to be included in password
  var upperCasedCharacters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  var userOptionalChars = [];


  // ======= functions definition ======
  function getUserOptions() {
    var isUserReady = confirm("Hello Are you ready for the password process ?");
    var length = prompt("How many chratcers do you want your password to have ?");
    var passwordLength = parseInt(length);
    userOptionalChars.push(passwordLength);

    if (isUserReady && passwordLength >= 8 && passwordLength <= 128) {
      var upperCase = confirm("Does your password to include Upper Case Characters ?");
      userOptionalChars.push(upperCase);
      var lowerCase = confirm("Does your password to include Lower Case Characters ?");
      userOptionalChars.push(lowerCase);
      var specialCase = confirm("Does your password to include Special Case Characters ?");
      userOptionalChars.push(specialCase);
      var numeric = confirm("Does your password to include Numeric Characters ?");
      userOptionalChars.push(numeric);
    }
    if (passwordLength < 8 || passwordLength >128) {
      alert("Password Characters can only be greater than 8 and less Than 128! TRY AGAIN!");
    }
    
    if (!isUserReady) {
      alert("Seems Your not ready for a new Password");
    }
    else if (upperCase === false && specialCase === false && numeric === false && lowerCase === false) {
      alert("Password Generator has to meet one requirement of : Upper, Lower, special or numeric TRY AGAIN!");
    }
    return generatePassword(userOptionalChars);
  }
 

  function generatePassword(userOptions) {
    var password = [];
    for (let index = 0; index < userOptions[0]; index++) {
      if (userOptions[1] === true) {
        const upperCase = Math.floor(Math.random() * upperCasedCharacters.length);
        password.push(upperCasedCharacters[upperCase]);
        userOptions[0]--;
      }

      if (userOptions[2] === true) {
        const lowerCase = Math.floor(Math.random() * lowerCasedCharacters.length);
        password.push(lowerCasedCharacters[lowerCase]);
        userOptions[0]--;
      }

      if (userOptions[3] === true) {
        const specialCase = Math.floor(Math.random() * specialCharacters.length);
        password.push(specialCharacters[specialCase]);
        userOptions[0]--;
      }

      if (userOptions[4] === true) {
        const numeric = Math.floor(Math.random() * numericCharacters.length);
        password.push(numericCharacters[numeric]);
        userOptions[0]--;
      }

    }

    var passwordText = document.querySelector("#password");
    return (passwordText.innerHTML = password.join(' '));

  }
  // ======= functions calls (start) ======
  getUserOptions();




}
// Add event listener to generate button
generateBtn.addEventListener("click", start);

var expectSpecialChars = false;
var expectNumericChars = false;
var expectUppercaseChars = false;
var expectLowercaseChars = false;
var userOptions = {
  expectSpecialChars: false,
  expectNumericChars: false,
  expectUppercaseChars: false,
  expectLowercaseChars: false,
}