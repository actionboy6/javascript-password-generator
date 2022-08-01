var generateBtn = document.querySelector("#generate");
var characterAmountRange = document.querySelector("characterAmountRange")
var characterAmountNumber = document.querySelector("characterAmountNumber")
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var symbols = ["!", "@", "#", "$", "%", "&", "^", "*",]
var possibleCharacters = []
var passwordLengths

function helloKeith() {}
  


function generatePassword() {
  var userSelectedCharacters = getUserSelectedCharacters()
  if (userSelectedCharacters.length === 0) return
  document.getElementById("password").innerText = "" 
  var password = "" 
  for (var i = 0; i < passwordLengths; i++) {
     var randomNum = Math.floor(Math.random() * userSelectedCharacters.length)
    password += userSelectedCharacters[randomNum]
  }
  document.getElementById("password").innerText = password 
}


function getUserSelectedCharacters() {
  var userSelectedCharacters = []
  passwordLengths = parseInt(prompt("How long of a password do you want? Mr Anderson"))
  if (isNaN(passwordLengths) || passwordLengths < 8 || passwordLengths > 128) {
    alert("Password must be between 7-129 characters")
    return []
  }
  var lowerCaseConfirm = confirm("Do you want lowercase letters?")

  if (lowerCaseConfirm) {
    userSelectedCharacters.push(...lowerCase)
  }

  var upperCaseConfirm = confirm("Do you want UPPERCASE letters?")
  if (upperCaseConfirm) {
    userSelectedCharacters.push(...upperCase)
  }
  console.log("confirmPass")

  var numbersConfirm = confirm("Do you want numb3r5?")
  if (numbersConfirm) {
    userSelectedCharacters.push(...numbers)
  }
  var symbolsConfirm = confirm("Do you want symb*!s?")
  if (symbolsConfirm) {
    userSelectedCharacters.push(...symbols)
  }
  return userSelectedCharacters
}




generateBtn.addEventListener("click", generatePassword);


