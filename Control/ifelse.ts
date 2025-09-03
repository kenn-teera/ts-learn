//ifelse

let number: number = 50;
let result: string;
if (number % 2 == 0) {
  result = "even";
} else {
  result = "odd";
}
console.log(`result = ${result}`);

number = 11;
result = (number % 2 == 0) ? "even" : "odd";
console.log(`result = ${result}`);

