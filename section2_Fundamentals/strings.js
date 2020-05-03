const firstName = 'Justin';
const lastName = 'Smith';
const age = 24;
const str = 'Hello there my name is Justin';
const tags = 'web design, web development, programming';

let val;

val = firstName + lastName; //outputs JustinSmith

//concatenation
val = firstName + ' ' + lastName; //outputs Justin Smith

//appending - add onto variable
val = 'Leah ';
val += 'Oneil'; //outputs Leah Oneil

val = 'Hello, my name is ' + firstName + ' and I am ' + age;

//escaping
val = "That's awesome, I can't wait"; //double quotes
val = 'That\'s awesome, I can\'t wait'; //escape key

//Length
val = firstName.length;

//concat
val = firstName.concat(' ', lastName); //outputs Justin Smith

//change case
val = firstName.toUpperCase(); //outputs JUSTIN
val = firstName.toLowerCase(); //outputs justin

val = firstName[0]; //outputs J...0 index of the value firstName

//find index of character
val = firstName.indexOf('u'); //outputs 1...finds first occurance of the letter u
val = firstName.lastIndexOf('u'); //outputs 4...finds first occurance of the letter u starting at the end

//charAt()
val = firstName.charAt('2'); //outputs s because it's in the 2nd spot

//get last character
val = firstName.charAt(firstName.length - 1); //outputs n

//substrings
val = firstName.substring(0,4); //outputs Justi

//slice
val = firstName.slice(0,4); //outputs Justi
val = firstName.slice(-3); //outputs tin - substring can't do this

//split - split string into array based on seperator
val = str.split(' '); //outputs  ["Hello", "there", "my", "name", "is", "Justin"]
val = tags.split(','); //outputs each tag into an array

//replace
val = str.replace('Justin', 'Jack'); //outputs Hello there my name is Jack

//includes (true of false value based on if something is in the string)
val = str.includes('Hello'); //outputs true
val = str.includes('foo'); //outputs false


console.log(val);