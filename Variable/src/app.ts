const fname: string = "This is String oh it's big!";
//fname="a" <-This is error ; can't change 

let name: string = "This is String Same";
name = "This can change string"
//name = true <-This can't typecast too

let lname: string = "String again"
let age: number = 23
let isWorking: boolean = false
console.log(`name = ${fname.toUpperCase()}`)
console.log(`lname = ${lname}`)
console.log(`age = ${age}`)
console.log(`isWorking = ${isWorking}`)

//any & unknown
let phone: any = "0xxxxxxxxx"
phone = 1234567890
phone = true

function formatNumber(num: number) { //default of argument is type any and it's should be any
  return num.toFixed(2);
}

let amount: any = "50.1234"
amount = 50.1234
console.log(formatNumber(amount))
