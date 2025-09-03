//ifelse
var number = 50;
var result;
if (number % 2 == 0) {
    result = "even";
}
else {
    result = "odd";
}
console.log("result = ".concat(result));
number = 11;
result = (number % 2 == 0) ? "even" : "odd";
console.log("result = ".concat(result));
