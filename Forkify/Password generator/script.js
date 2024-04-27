// Get references to DOM elements
const passwordLength = document.getElementById("passwordLength");
const lengthDisplay = document.getElementById("sliderValue");
const lowercaseCheck = document.getElementById("lowercase");
const uppercaseCheck = document.getElementById("uppercase");
const numbersCheck = document.getElementById("numbers");
const symbolsCheck = document.getElementById("symbols");
const generateBtn = document.getElementById("genBtn");
const passwordDisplay = document.getElementById("passBox");
const copyIcon = document.getElementById("copyIcon");

const copiedMessage = document.getElementById("copiedMessage");

// Character sets
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

// Generate password function
function generatePassword() {
  let charSet = "";
  if (lowercaseCheck.checked) charSet += lowercaseChars;
  if (uppercaseCheck.checked) charSet += uppercaseChars;
  if (numbersCheck.checked) charSet += numbers;
  if (symbolsCheck.checked) charSet += symbols;

  let password = "";
  for (let i = 0; i < passwordLength.value; i++) {
    password += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }

  passwordDisplay.value = password;
}

// Update slider value display
passwordLength.addEventListener("input", () => {
  lengthDisplay.textContent = passwordLength.value;
});

generateBtn.addEventListener("click", generatePassword);

generatePassword();

//Copy
copyIcon.addEventListener("click", () => {
  navigator.clipboard.writeText(passwordDisplay.value);

  copiedMessage.style.display = "block";

  setTimeout(() => {
    copiedMessage.style.display = "none";
  }, 1000);
});
