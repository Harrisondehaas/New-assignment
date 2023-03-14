"use strict";

const $ = (selector) => document.querySelector(selector);

const emailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const passwordRegEx = /^(?=.*?[A-Z])(?=.*?[a-z]).{8,}$/;

const resetErrors = () => {
  $("#name_error").textContent = "";
  $("#password_error").textContent = "";
  $("#email_error").textContent = "";
  $("#dob_error").textContent = "";
};

const onReset = (evt) => {
  resetErrors();
  // Reset the reset-able fields
  $("#first_name").value = "";
  $("#last_name").value = "";
  $("#email").value = "";
  $("#password").value = "";
  $("#confirm_password").value = "";
  $("#dob").value = "";
  $("#user_first_name").textContent = "";
  $("#user_last_name").textContent = "";
  $("#user_email").textContent = "";
  $("#user_dob").textContent = "";
  $("#user_password_last_changed").textContent = "";
};

const onSubmit = (evt) => {
  resetErrors();
  // Use this boolean to keep track of any errors because you need to prevent the settings
  // from updating if even one field is wrong
  let formErrors = false;

  let firstName = $("#first_name").value;
  let lastName = $("#last_name").value;
  // Make sure name fields are not empty
  if (firstName == "" || lastName == "") {
    $("#name_error").textContent = "Name fields cannot be empty.";
    formErrors = true;
  }else{
    $("#user_first_name").textContent = firstName;
  }

  // Validate email with the Regular Expression
  const email = $("#email").value;
  if (!emailRegEx.test(email)) {
    $("#email_error").textContent = "Invalid Email Format, Please try again.";
    formErrors = true;
  }

  // Validate password with the Regular Expression
  const password = $("#password").value;
  if (!passwordRegEx.test(password)) {
    $("#password_error").textContent = "Invalid Password Format, Please try again.";
    formErrors = true;
  }

  // Validate passwords to be matching
  const confirmPassword = $("#confirm_password").value;
  if (password !== confirmPassword) {
    $("#password_error").textContent = "Passwords do not match";
    formErrors = true;
  }

  // Make sure date of birth is in the past.
  let dob = new Date($("#dob").value);
  let now = new Date();
  if (dob > now) {
    $("#dob_error").textContent = "Date of birth cannot be in the future";
    formErrors = true;
  }

  // Check your formErrors boolean and update the fields if still false
  if (!formErrors) {
    $("#user_first_name").textContent = firstName;
    $("#user_last_name").textContent = lastName;
    $("#user_email").textContent = email;
    $("#user_dob").textContent = dob.toDateString();
    let today = new Date();
    $("#user_password_last_changed").textContent = today.toDateString();
    // Submit the form if all validation passes
    // Update the user settings with the new values
  }

  evt.preventDefault();
};

document.addEventListener("DOMContentLoaded", () => {
  $("#update_profile").addEventListener("click", onSubmit);

  $("#reset_form").addEventListener("click", onReset);
});