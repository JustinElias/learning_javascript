//create some arrays
const number = [43, 56, 33, 23, 44, 36, 5];
const numbers2 = new Array(22, 45, 33, 76, 54);
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:1}, new Date()];

console.log(mixed);

let val;

//array length (how many values in the array)
val = numbers.length;
//output = 7

//check if it is an array
val = Array.isArray(numbers);
//output = true
val = Array.isArray('hello');
//output = false

//get a single value from an array
val = numbers[3];
//outputs 23
val = numbers[0];
//outputs 43

//insert something into an array
numbers[2] = 100;
//replaces the number in the 2 position

//find index of value
val = numbers.indexOf(36);
//outputs 5

//MUTATING ARRAYS WITH FUNCTIONS/METHODS

//add onto end of an array
numbers.push(250);
//250 at the end

//add at the front
numbers.unshift(120);
//120 is now first value in the array

//take off from end
numbers.pop();
//250 we added is now gone

//take off from front
numbers.shift();
//takes off the 120 we added

//splice values
numbers.splice(1,1);
//saying we want to start and where we want to end. This is saying we want to start at index 1 and end at index 1

//splice multiple values
numbers.splice(1,3);
//this will remove the numbers in index 1,2,3

//reverse array
numbers.reverse();
//reverses array

//concatenate array
val = numbers.concat(numbers2);
//combines the arrays

//sorting arrays
val = fruit.sort();
//puts them in alphabetical order

val = numbers.sort();
//sorts by the first number and this isn't exactly what we want to do

//Use the "compare function"
val = numbers.sort(function(x,y){
  return x-y;
});

//reverse sort
val = numbers.sort(function(x,y){
  return y-x;
});

//find
function under50(num){
  return num < 50;
}

val = numbers.find(under50);
//returns 43
//looks at array and finds first number that is under 50



console.log(numbers);
console.log(val);