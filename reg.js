
const form =
document.getElementById("registerForm");

const email =
document.getElementById("email");

const password =
document.getElementById("password");

const confirmPassword =
document.getElementById("confirmPassword");

const emailError =
document.getElementById("emailError");

const passwordError =
document.getElementById("passwordError");

const confirmError =
document.getElementById("confirmError");

form.addEventListener("submit", function(e){

e.preventDefault();

emailError.textContent = "";
passwordError.textContent = "";
confirmError.textContent = "";

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

if(password.value.length !== 8){

   passwordError.textContent =
   "Password must be exactly 8 characters";

   valid = false;
}

/* CONFIRM PASSWORD */

if(password.value !== confirmPassword.value){
confirmError.textContent =
"Passwords do not match";
valid = false;
}

/* SUCCESS */

if(valid){
alert("Account Created Successfully");
}

});

