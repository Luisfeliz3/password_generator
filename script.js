// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function start() {
   console.log("Password Generated");
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
    var isUserReady = confirm("Hello Are you ready for the password process ?");
    

    if (isUserReady) {
      var length = prompt("How many chratcers do you want your password to have ?");
      var passwordLength = parseInt(length);
      userOptionalChars.push(passwordLength);
   
      var upperCase = confirm("Does your password to include Upper Case Characters ?");
      userOptionalChars.push(upperCase);

     
      var lowerCase = confirm("Does your password to include Lower Case Characters ?");
      userOptionalChars.push(lowerCase);


      var specialCase = confirm("Does your password to include Special Case Characters ?");
      userOptionalChars.push(specialCase);

      var numeric = confirm("Does your password to include Numeric Characters ?");
      userOptionalChars.push(numeric);

    }
    if (!isUserReady) {
      alert("Come back when you are ready for a new pass word");
    }
    else if (upperCase === false || specialCase === false || numeric === false || lowerCase === false) {
      alert("Password needs at least one requirement");
    }

  
    return generatePassword(userOptionalChars);
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
    console.log(password.join(' ')); 
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
