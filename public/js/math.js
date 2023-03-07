"use strict";

const $ = (selector) => document.querySelector(selector);
const division = ()=>{
    let division_1 = $("#division_1").value;
    let division_2 = $("#division_2").value;
    let result = division_1 / division_2
console.log(division_1);
console.log(division_2);

$("#division_result").value = result;
$("#int_division_result").value = parseInt(result);
$("#floor_division_result").value = Math.floor(result);
$("#ceiling_division_result").value = Math.ceil(result);
$("#rounded_division_result").value = Math.round(result);

}
const modulo = ()=>{
    let  modulo1 = $("#modulo_1").value;
    let  modulo2 = $("#modulo_2").value;

    let result = modulo1 % modulo2;
    $("#modulo_result").value = result;

}


const forLoopIteration = ()=>{
    let for_limit = $("#for_limit").value;
    let for_counter = parseFloat($("#for_counter").value);
    let for_increment = parseFloat($("#for_increment").value);
    let for_increment_direction = $("#for_increment_direction").value;

    console.log(for_limit, for_counter, for_increment, for_increment_direction);
   
    if(for_increment_direction ==="negtive"){
        for_increment = for_increment * -1;
    }

    for(let iterator = 0; iterator < for_limit; iterator++){
   
        for_counter = for_counter + for_increment;
    }  



    $("#for_result").value = for_counter;

}
//Add all calculation functions
document.addEventListener("DOMContentLoaded", () => {
    $("#division_btn").addEventListener("click",division);
    $("#modulo_btn").addEventListener("click",modulo);
    $("#for_loop_btn").addEventListener("click",forLoopIteration);

});
