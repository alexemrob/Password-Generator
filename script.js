//Assignment Code & Event Listener to begin requesting password specifications
document.querySelector("#generate")
.addEventListener("click", writePassword);

//Assign Variables & Arrays 
  var confirmLength = "";
  var confirmSpecialCharacter;
  var confirmNumericCharacter;
  var confirmUpperCase;
  var confirmLowerCase;
  var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialChar = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "<", ">", "-","+"];
  var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Confirming amount of characters in password via prompt
function generatePassword() {
  var confirmLength = (prompt("How many characters would you like for your password?"));

//Loop until valid amount of characters requested 
  while(confirmLength <= 7 || confirmLength >= 101) {
    alert("Password must contain between 8-100 characters. Please try again!");
      var confirmLength = (prompt("How many characters would you like for your password?"));
      } 

    alert(`Your password will have ${confirmLength} characters`);

//Confirming chartacter styles included in passowrd 
    var confirmSpecialCharacter = confirm("Click OK if you would like to include special characters");
    var confirmNumericCharacter = confirm("Click OK if you would like to include numeric characters");    
    var confirmUpperCase = confirm("Click OK if you would like to include uppercase characters");
    var confirmLowerCase = confirm("Click OK if you would like to include lowercase characters");

//Loop until atleast one character choice is selected 
  while(confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumericCharacter === false) {
      alert("Please choose at least one character style");
        var confirmSpecialCharacter = confirm("Click OK if you would like to include special characters");
        var confirmNumericCharacter = confirm("Click OK if you would like to include numeric characters");    
        var confirmUpperCase = confirm("Click OK if you would like to include uppercase characters");  
        var confirmLowerCase = confirm("Click OK if you would like to include lowercase characters"); 
    } 

//Provide password choices & combine with above arrays at random
      var passwordCharacters = []
      
  if (confirmSpecialCharacter) {
      passwordCharacters = passwordCharacters.concat(specialChar)
    }

  if (confirmNumericCharacter) {
      passwordCharacters = passwordCharacters.concat(number)
    }
      
  if (confirmUpperCase) {
      passwordCharacters = passwordCharacters.concat(alphaUpper)
    }

  if (confirmLowerCase) {
      passwordCharacters = passwordCharacters.concat(alphaLower)
    }

      var randomPassword = ""
      
        for (var i = 0; i < confirmLength; i++) {
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
      }
        return randomPassword;
}

//Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}