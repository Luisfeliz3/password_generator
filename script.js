// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function start() {
   console.log("we're here!");
   var password = generatePassword();
   var passwordText = document.querySelector("#password");
   passwordText.value = password;
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
    var isUserReaady = confirm("Hello Are you ready for the password process ?");
    

    if (isUserReaady) {
      var length = prompt("How many chratcers do you want your password to have ?");
      var passwordLength = parseInt(length);
      console.log(passwordLength);
      var upperCase = confirm("Does your password to include Upper Case Characters ?");
      var specialCase = confirm("Does your password to include Special Case Characters ?");
      var numeric = confirm("Does your password to include Numeric Characters ?");

    }
    if (!isUserReaady) {
      alert("Come back when you are ready for a new pass word");
    }
    else if (upperCase === false || specialCase === false || numeric === false) {
      alert("Sorry Your Password Does not meet the requirements, Please make sure to add all requirements!");
    }

    var userOptions = {
      "upperCase": upperCase,
      "specialCase": specialCase,
      "numeric": numeric
    }
    return generatePassword(userOptions);

  }

      // get user options and store in vars
      // check for length (it should be longer than 8 and shorter than 128)
      // check if lower
      // check if upper
      // check if special
      // check if numeric
      // check that at least one is true
        // else - alert user
    
    function generatePassword(userOptions) {

      console.log(userOptions)
      var password = [];
      // if lower
        // push a random lower char to password
        // add lowerCharsArray to userOptionalChars
      // if upper
        // push a random upper char to password
        // add upperCharsArray to userOptionalChars
      // if special
        // push a random special char to password
        // add specialCharsArray to userOptionalChars
      // if numeric
        // push a random numeric char to password
        // add numericCharsArray to userOptionalChars
      // for loop between start number of elemnts in password to the requested number of charactars
      // mutate the array to a string
      // return password string
    }
   // ======= functions calls (start) ======
    getUserOptions();
  
   // generatePassword(userOption)
}
// Add event listener to generate button
generateBtn.addEventListener("click", start);
// var expectSpecialChars = false;
// var expectNumericChars = false;
// var expectUppercaseChars = false;
// var expectLowercaseChars = false;
// var userOptions = {
//   expectSpecialChars: false,
//   expectNumericChars: false,
//   expectUppercaseChars: false,
//   expectLowercaseChars: false,
// }
