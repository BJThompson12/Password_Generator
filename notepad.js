


// // Get references to the #generate element
// let generateBtn = document.querySelector("#generate");

var charCount=8
const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!\"#$%&'()*+,-./:;<=>?@[]\\^_`{|}~"

for ( i = 0; i < charCount; i++) {
  var passwordNew = chars[Math.floor(Math.random() * chars.length)];
  console.log(passwordNew);
}
getRandomUpperCase()
console.log(upperCaseChoice.toString)

// // Write password to the #password input
// function writePassword() {
//   let generatedPassword =();
 
  // for (var i = 0; i < charCount; i++){
  // var passwordNew = chars[Math.floor(Math.random())]
  // console.log(passwordNew);
  // // }
  // let passwordText = document.querySelector("#password");

  // passwordText.value = password;

// }

// //Password Choices functions
// function getRandonSymbol() {
//   const symbol = "!\"#$%&'()*+,-./:;<=>?@[]\\^_`{|}~"
//   return symbol[Math.floor(Math.random() * symbol.length)]
// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// console.log(getRandonSymbol())
// // console.log(writePassword()); 
/*have conditional that they must select a character

seperate function for cferating an array another variable for index 
plug in an argumaent called array so you can pass it in and pull it through 

seperate arrays and then cancatinate and push into a different array to generateBtn
push the characters into the array

if statements if truee then generate function
to get character string its inn arrays, will have to combine the arrays into one, then join in a string ans use as the characters list (join method on array type)

declare variable at start fo function and set to empty string
run if chaining 
if true add to the declared variable  empty variable = empty vairable + 
returbn the variable after as valid string

// Functions to generate choices

function getRandomUpperCase () {
  upperCaseChoice = window.confirm('Would you like to use upper case letters in your password?')
  console.log(upperCaseChoice);
  getRandomLowerCase();
  }

function getRandomLowerCase () {
  lowerCaseChoice = window.confirm('Would you like to use lower case letters in your password?')
  console.log(lowerCaseChoice);
  getRandomNumber();
}

function getRandomNumber () {
  numberChoice = window.confirm('Would you like to use Numbers in your password?')
  console.log(numberChoice);
  getRandomSymbol();
}

function getRandomSymbol () {
  symbolChoice = window.confirm('Would you like to use Symbols in your password?')
  console.log(symbolChoice);
    if (!upperCaseChoice && !lowerCaseChoice && !numberChoice && !symbolChoice){
    window.alert("You must choose at least one character type");
    generatePassword();
  }
    else{
    joinChoices ();
  }
}

  lengthChoice = parseInt(window.prompt('Please enter your password length between 8 and 128 characters'))
  console.log(lengthChoice);
  if (lengthChoice < 8 || lengthChoice > 128 || !lengthChoice){
    window.alert('Password must be between 8 and 128 characters');
    generatePassword();
  }

  if (upperCaseChoice = window.confirm('Would you like to use upper case letters in your password?'))
    console.log(upperCaseChoice);

  if (lowerCaseChoice = window.confirm('Would you like to use lower case letters in your password?'))
  console.log(lowerCaseChoice);

  if (numberChoice = window.confirm('Would you like to use Numbers in your password?'))
  console.log(numberChoice);

  if (symbolChoice = window.confirm('Would you like to use Symbols in your password?'))
  console.log(symbolChoice);

  if (!upperCaseChoice && !lowerCaseChoice && !numberChoice && !symbolChoice)
    window.alert("You must choose at least one character type");
    // generatePassword();

  if (upperCaseChoice === true){
    (joinedChoices = (joinedChoices + upperCaseCharacters))
    }
    console.log(joinedChoices);
    
  if (lowerCaseChoice === true){
    (joinedChoices = (joinedChoices + lowerCaseCharacters))
     }
     console.log(joinedChoices);
    
  if (numberChoice === true){
    (joinedChoices = (joinedChoices + numberCharacters))
     }
     console.log(joinedChoices);
        
  if (symbolChoice === true){
    (joinedChoices = (joinedChoices + symbolCharacters))
     }
     console.log(joinedChoices);
function joinChoices () {
  if (upperCaseChoice === true){
  (joinedChoices = (joinedChoices + upperCaseCharacters))
  }
  console.log(joinedChoices);

  if (lowerCaseChoice === true){
  (joinedChoices = (joinedChoices + lowerCaseCharacters))
  }
  console.log(joinedChoices);

  if (numberChoice === true){
  (joinedChoices = (joinedChoices + numberCharacters))
  }
  console.log(joinedChoices);
    
  if (symbolChoice === true){
  (joinedChoices = (joinedChoices + symbolCharacters))
  }
  console.log(joinedChoices);
  
  for ( let i = 0; i < lengthChoice; i++) {
    randomPassword = joinedChoices[Math.floor(Math.random() * joinedChoices.length)];
    console.log(randomPassword);
  }
 }
