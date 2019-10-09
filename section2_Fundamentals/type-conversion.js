let val;

//number to string

val = String(555);
val = String(4+4); //outputs 8

//boolean to a string
val = String(true); //outputs 4 as length

//date to string
val = String(new Date()); //outputs 57 as string length

//array to string
val = String([1,2,3,4]); //7 as string length

//toString method
val = (5).toString();
val = (true).toString();


/***
 * Strings to Numbers
 */

 val = Number('5');
 val = Number(true); //outputs 1
 val = Number(false); //outputs 0
 val = Number(null); //outputs 0
 val = Number('hello'); //outputs NaN(not a number)
 val = Number([1,2,3]); //outputs NaN (not a number)

 //Parse Int method
 val = parseInt('100'); //outputs 100 as a number
 val.parseFloat('100.30'); //outputs 100.30 because toFixed is set to 2


//outputs
console.log(val);
console.log(typeof val);
//console.log(val.length); //length only works on strings
console.log(val.toFixed(2)); //toFixed allows us to specify decimals. 2 goes to two decimal points



/***
 * Type Coorsion
 */

 const val1 = '5';
 const val2 = 6;
 const sum = val1 + val2;

 console.log(sum); //outputs 56 because changed val2 to a string with type string
 console.log(typeof sum);

 //to fix:

 const val3 = '5';
 const val4 = 6;
 const sum2 = Number(val3+val4);

 console.log(sum2);
 console.log(typeof sum2);

