// Assignment code here


// Get references to the #generate element
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!\"#$%&'()*+,-./:;<=>?@[]\\^_`{|}~"

  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Password Choices functions
function getRandonSymbol() {
  const symbol = "!\"#$%&'()*+,-./:;<=>?@[]\\^_`{|}~"
  return symbol[Math.floor(Math.random() * symbol.length)]
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

console.log(getRandonSymbol())