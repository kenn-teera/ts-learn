"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fname = "This is String oh it's big!";
//fname="a" <-This is error ; can't change 
let name = "This is String Same";
name = "This can change string";
//name = true <-This can't typecast too
let lname = "String again";
let age = 23;
let isWorking = false;
console.log(`name = ${fname.toUpperCase()}`);
console.log(`lname = ${lname}`);
console.log(`age = ${age}`);
console.log(`isWorking = ${isWorking}`);
//any & unknown
let phone = "0xxxxxxxxx";
phone = 1234567890;
phone = true;
function formatNumber(num) {
    return num.toFixed(2);
}
let amount = "50.1234";
amount = 50.1234;
console.log(formatNumber(amount));
