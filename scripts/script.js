// Assignment code here
// Array of selections to be included in password
var upperCaseCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'
];

var lowerCaseCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'
];

var numberCharacters = ['0','1','2','3','4','5','6','7','8','9'
];

var symbolCharacters = ['!','#','$','%','&','(',',',')','*','+',',','-','.','/',',:',';','<','=','>','?','@','[',']','^','_','{','|','}','~'

];

var lengthChoice = ''
var upperCaseChoice = ''
var lowerCaseChoice = ''
var numberChoice = ''
var symbolChoice = ''
var joinedChoices = ''

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

function getChoices() {
  lengthChoice = parseInt(window.prompt('Please enter your password length between 8 and 128 characters'))
  console.log(lengthChoice);
  if (lengthChoice < 8 || lengthChoice > 128 || !lengthChoice){
    window.alert('Password must be between 8 and 128 characters');
    generatePassword();
  }
  if (upperCaseChoice = window.confirm('Would you like to use upper case letters in your password?')){
    console.log(upperCaseChoice);
  }

  if (lowerCaseChoice = window.confirm('Would you like to use lower case letters in your password?')){
  console.log(lowerCaseChoice);
  }

  if (numberChoice = window.confirm('Would you like to use Numbers in your password?')){
  console.log(numberChoice);
  }

  if (symbolChoice = window.confirm('Would you like to use Symbols in your password?')){
  console.log(symbolChoice);
  }

  if (!upperCaseChoice && !lowerCaseChoice && !numberChoice && !symbolChoice){
    window.alert('You must choose at least one character type');
    generatePassword();
  }
  //to clear out joinedChoices
  joinedChoices = '';

  if (upperCaseChoice == true){
    (joinedChoices = joinedChoices.concat(upperCaseCharacters))
    }
    console.log(joinedChoices);
    
  if (lowerCaseChoice == true){
    (joinedChoices = joinedChoices.concat(lowerCaseCharacters))
     }
     console.log(joinedChoices);
    
  if (numberChoice == true){
    (joinedChoices = joinedChoices.concat(numberCharacters))
     }
     console.log(joinedChoices);
        
  if (symbolChoice == true){
    (joinedChoices = joinedChoices.concat(symbolCharacters))
     }
     console.log(joinedChoices);
     return joinedChoices;
}

function generatePassword () {
  console.log('Button clicked');
  getChoices();
  console.log(lowerCaseChoice, upperCaseChoice, numberChoice, symbolChoice);
  console.log(joinedChoices);
  
  password = ''
  for ( let i = 0; i < lengthChoice; i++) {
    password = joinedChoices[Math.floor(Math.random() * joinedChoices.length)];
    console.log(password);
    return password;
  
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
