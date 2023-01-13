// Assignment code here
// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword () {
  console.log("Button clicked")

// 1. Prompt for password criteria
//  a. Password Length 8 < 128
  var lengthChoice = window.prompt("Please select enter your password length between 8 and 128 characters")
  console.log(lengthChoice);
  if (lengthChoice > 7 && lengthChoice < 129){
    window.confirm("You have selected " + lengthChoice + "Character Length")}
    else {
      window.alert()
    }
    var passwordChoices = {
      lengthChoice: lengthChoice,

    }
    // 
    return passwordChoices;
  }
//  b. lowercase, uppercase, numbers, special characters (confirm prompt) look up parse int bc it has to convert the srting into an integer [arse int before the prompt to convert to a integer has to be a number to loop through ] click ok if want speacial if yes loop through array abd randomly pick 


// 2. validate input
// 3. generate password based on criteria
// 4. display on page


  return "generated password will go here!"

}







// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);