


// // Get references to the #generate element
// let generateBtn = document.querySelector("#generate");

var charCount=8
const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!\"#$%&'()*+,-./:;<=>?@[]\\^_`{|}~"

for (var i = 0; i < charCount; i++) {
  var passwordNew = chars[Math.floor(Math.random() * chars.length)];
  console.log(passwordNew);
}

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