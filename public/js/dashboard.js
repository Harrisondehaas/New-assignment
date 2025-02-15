"use strict";

const $ = (selector) => document.querySelector(selector);



const onReset = (evt) => {
  //TODO:: Reset the reset-able fields
  $("#notifcations").checked = true;
  $("#off").checked = true;
  $("#location").textContent = "L7W 4T8";
  $("#tempurature").value = 21;

  evt.preventDefault();
};
const resetErrors = ()=> {
  $("#tempurature_error").textContent="";
  $("#location_error"),textContent="";
  

}
const onSubmit = (evt) => {
  //TODO::Reset any errors before submitting

  //TODO:: Set notifications since it doesn't need to be validated
let notificationsOn  = $("#notifications").checked;

$("#setting_notifications").textContent = notificationsOn ? "On" : "Off";

  //TODO:: Set lighting mode with a for loop since it doesn't need to be validated
let lightingModeOptions = document.querySelectorAll("[name='lighting_mode']");


for(let i = 0; i < lightingModeOptions.length; i++){
  if(lightingModeOptions[i].checked){
    $("#setting_lighting_mode").textContent = lightingModeOptions[i].value
  }
}



  //TODO:: Validate the postal code with the Regular Expression,
  //TODO:: Display an error if not valid
  let location = $("#location").value;


  const postalRegEx = /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i;
  
  if (postalRegEx.test(location)) {
    $("#setting_location").textContent = location;
  } else {
    alert("Invalid Postal Code Format, Please try again.");

  }


  //TODO:: Display an error if not valid
  //TODO:: Validate the temperature by checking the range and if it's a number
  const temperatureInput = $("#temperature");

  let temperatureError = $("#temperature_error");


   if (isNaN(temperatureInput.value) || temperatureInput.value == ""){

    temperatureError.textContent =
     "This is not a valid tempurature selection";

  } else if(temperatureInput.value > 30){
    temperatureError.textContent = 
    "Max tempurature is 30 degrees.";
    $("#setting_temperature").textContent = 30;

  }else if(temperatureInput.value < 5) {
    temperatureError.textContent = 
    "Min tempurature is 5 degrees";
    $("#setting_temperature").textContent = 5;

  }else{
     $("#setting_temperature").textContent = temperatureInput.value

      }

  

  evt.preventDefault();
};

document.addEventListener("DOMContentLoaded", () => {
  $("#date_display").textContent = new Date().toDateString();
  //TODO:: Add Reset Form listener
  $("#reset_form").addEventListener("click", onReset);
  //TODO:: Add Submit Form listener
  $("#update_settings").addEventListener("click", onSubmit);

});
