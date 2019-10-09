/*Dynamically Typed Language
-Types are associated with values not variables
-The same variable can hold multiple types
-We do not need to specify types
-Most other languages are statically types (Java, C#, C++)
-There are supersets of JS and addons to allow static types (TypeScript, Flow)
*/

/*primitive data types
-stored directly in the location of the variable accesses
-stores on the stack

string, number, boolean, null, undefined, Symbols(ES6)
*/

//strings
const name = 'Justin';

console.log(typeof name); //outputs string

//Number
const age = 40;

console.log(typeof age); //outtputs number

//boolean
const hasKids = false;

console.log(typeof hasKids); //outputs boolean

//Null
const car = null;
console.log(typeof car); //outputs Object (null is nott an object)

//undefined
let test;

console.log(typeof test); //outputs undfined

//symbol
const sym = Symbol();

console.log(typeof sym); //outputs symbol


/*Reference Data Types/Objects
-Accessed by reference
-Objects that are stored on the heap
-A pointer to a location in memory

arrays, object literals, functions, dates, anything else..
*/

//array
const hobbies = ['movies', 'music'];
console.log(typeof hobbies); //outputs object

//object literal
const address = {
  city: 'Boston',
  state: 'MA'
}
console.log(typeof address); //outputts object

//dates
const today = new Date();
console.log(today); //outputs today
console.log(typeof today); //outputs object

