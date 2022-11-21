const form = document.querySelector("#contact-form");
const name = document.querySelector("#name");
const nameFailed = document.querySelector("#name-Failed");
const subject = document.querySelector("#subject");
const subjectFailed = document.querySelector("#subject-Failed");
const email = document.querySelector("#email");
const emailFailed = document.querySelector("#email-Failed");
const address = document.querySelector("#address");
const addressFailed = document.querySelector("#address-Failed");
const submit = document.querySelector("#submit-button");
const successMessage = document.querySelector(".success-message");




function checkForm(event) {
  event.preventDefault();

  let hasFaileds = false;

  if (name.value.trim().length > 0) {
    nameFailed.style.display = "none";
  } else {
    nameFailed.style.display = "block";
    hasFaileds = true;
  }

  if (subject.value.trim().length >= 10) {
    subjectFailed.style.display = "none";
  } else {
    subjectFailed.style.display = "block";
    hasFaileds = true;
  }

  if (isEmail(email.value) === true) {
    emailFailed.style.display = "none";
  } else {
    emailFailed.style.display = "block";
    hasFaileds = true;
  }

  if (address.value.trim().length >= 25) {
    addressFailed.style.display = "none";
  } else {
    addressFailed.style.display = "block";
    hasFaileds = true;
  }

  if (hasFaileds) {
    successMessage.innerHTML = "";
  } else {
    successMessage.innerHTML = <h2>Thank you for submitting, ${name.value}!</h2>;
  }
}

form.addEventListener("submit", checkForm);


/// from https://stackoverflow.com/questions/2507030/email-validation-using-jquery line 59-63
function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }