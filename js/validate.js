// Retrieve element from index using unique HTML ID
const emailField = document.getElementById("emailField");
const button = document.getElementById("button");
const response = document.getElementById("response");
const inputname = document.getElementById("inputname");

button.addEventListener("click", function () {
  //Turns input into readable values
  const email = emailField.value; 
  const name = inputname.value;
  
  // if/else statement returns string based on REGEX validation, modifies HTML with string
  if (validateEmail(email)) {
    response.innerHTML = "Hi " + name + ", this email looks great! Thanks, Shortcake! 🍰";
  } else {
    response.innerHTML = name + ", are you sure that's a valid email address? Let's try again!";
  }
});

// Checks email input against simple a REGEX pattern.
// Documentation: https://stackoverflow.com/questions/50330109/simple-regex-pattern-for-email
function validateEmail(email) {
  const re = /^[^@]+@[^@]+\.[^@]+$/;
  return re.test(String(email).toLowerCase());
}