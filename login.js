

const form = document.getElementById("loginForm");

const email = document.getElementById("email");
const password = document.getElementById("password");

const emailError =
document.getElementById("emailError");

const passwordError =
document.getElementById("passwordError");

form.addEventListener("submit", function(e){

e.preventDefault();

emailError.textContent = "";
passwordError.textContent = "";

let valid = true;

/* EMAIL */

if(
!email.value.includes("@") ||
!email.value.includes(".")
){
emailError.textContent =
"Enter valid email";
valid = false;
}

/* PASSWORD */

if(password.value.length < 8){
passwordError.textContent =
"Password must contain 8 characters";
valid = false;
}

/* SUCCESS */

if(valid){
alert("Login Successful");
}

});


