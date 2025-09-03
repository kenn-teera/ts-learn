let service: number = 1;
console.log(`number = ${service}`)
let result: string;
switch (service) {
  case 1:
    result = "How much money is your bank?"
    break;
  case 2:
    result = "Deposit"
    break;
  case 3:
    result = "Withdraw"
    break;
  default:
    result = "Out of scope"
    break;
}
console.log(`result = ${result}`)
