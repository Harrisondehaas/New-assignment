"use strict";

const $ = (selector) => document.querySelector(selector);

const emailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const passwordRegEx = /^(?=.*?[A-Z])(?=.*?[a-z]).{8,}$/;

const onReset = (evt) => {
  //TODO:: Reset the reset-able fields
};

const onSubmit = (evt) => {
  resetErrors();

  //TODO:: Use this boolean to keep track of any errors because you need to prevent the settings
  //       from updating if even one field is wrong
  let formErrors = false;

  //TODO:: Make sure name fields are not empty

  //TODO:: Validate email with the Regular Expression
  const email = $("#email").value;
  if (!emailRegEx.test(email)) {
    $("#email_error").textContent = "Invalid Email Format, Please try again.";
    formErrors = true;
  }

  //TODO:: Validate password with the Regular Expression
  const password = $("#password").value;
  if (!passwordRegEx.test(password)) {
    $("#password_error").textContent = "Invalid Password Format, Please try again.";
    formErrors = true;
  }

  //TODO:: Validate passwords to be matching
  const confirmPassword = $("#confirm_password").value;
  if (password !== confirmPassword) {
    $("#password_error").textContent = "Passwords do not match";
    formErrors = true;
  }

  //TODO:: Make sure date of birth is in the past.
  let dob = new Date($("#dob").value);
  let now = new Date();
  if (dob > now) {
    $("#dob_error").textContent = "Date of birth cannot be in the future";
    formErrors = true;
  }

  //TODO:: check your formErrors boolean and update the fields if still false
  if (!formErrors) {
    // TODO:: Submit the form if all validation passes
    // TODO:: Update the user settings with the new values
  }

  evt.preventDefault();
};

document.addEventListener("DOMContentLoaded", () => {
  $("#update_profile").addEventListener("click", onSubmit);

  $("#reset_form").addEventListener("click", onReset);
});