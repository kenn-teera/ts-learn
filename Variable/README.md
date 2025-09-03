# Variable

## Basic (like javascript {of course!})

boolean => True / False

number => 20 (int) / 20.20 (Float)

string => "This is String"

## const, let

const : can't change data  
let   : can change data  

```javascript
let fname:string = "This is String";
let age:number = 23;
let isWorking:boolean = false;
```

## Any, Unknown

Any can be any type

```javascript
let myVar:any = "String"
myVar         = 10; //number
myVar         = true; //boolean
```

```javascript
let myVar:unknown = "string"
if(typeof myVar === <string>){
// what to do ?
}
```
