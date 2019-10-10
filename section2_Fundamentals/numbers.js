const num1 = 100;
const num2 = 50;
let val;

//simple math with numbers
val = num1 + num2; //150
val = num1 * num2; //5000
val = num1 - num2; //50
val = num1 / num2; //2
val = num1 % num2; //0

//Math Object
val = Math.PI; //3.14..
val = Math.E; //2.7..
val = Math.round(2.8); //round a number...rounds to 3
val = Math.round(2.4); //rounds to 2
val = Math.ceil(2.4); //rounds to 3
val = Math.floor(2.8); //rounds to 2
val = Math.sqrt(64); //8
val = Math.abs(-3); //3
val = Math.pow(8,2); //8 to the 2nd = 64
val = Math.min(2,33,4,5,98); //returns minimum here = 2
val = Math.max(2,33,4,5,98); //returns maximum here = 98
val = Math.random(); //random decimal
val = Math.random() * 20; //random between 0 and 19
val = Math.floor(Math.random()*20+1); //random number between 1 and 20 that is a whole number

console.log(val);