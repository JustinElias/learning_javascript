/*
if(something is true){
  do something
} else{
  do something else
}
*/

const id = 100;
const idString = '100';

//equal comparison

if(id == 101){
  console.log('CORRECT');
} else{
  console.log('INCORRECT');
}

//not equal to
if(id != 101){
  console.log('CORRECT');
} else{
  console.log('INCORRECT');
}

//checking number, but not type
/*this will output CORRECT because it's checking the value and not the data type*/
if(idString == 100){
  console.log('CORRECT');
} else{
  console.log('INCORRECT');
}

//check value and the type - stops issues from popping up. Do this by using ===
//so now, this will output INCORRECT because it's a string and we are checking for a value
if(idString === 100){
  console.log('CORRECT');
} else{
  console.log('INCORRECT');
}

//not equal to a type
if(idString !== 100){
  console.log('CORRECT');
} else{
  console.log('INCORRECT');
}

//check if something is defined
if(typeof id !== 'undefined'){
  console.log(`The ID is ${id}`);
}else {
  console.log('No ID');
}

//Greater than or less than
if(id > 200){
  console.log('CORRECT');
} else{
  console.log('INCORRECT');
}

//if else

const color = 'red';

if(color === 'red'){
  console.log('Color is red');
} else if(color === 'blue'){
  console.log('Color is blue');
}else{
  console.log('Color is not red or blue');
}


//logical operators
const name = 'Steve';
const age = 32;

if(age > 0 && age < 12 ){
  console.log(`${name} is a child`);
} else if(age >= 13 && age <= 19){
  console.log(`${name} is a teenager`);
}else{
  console.log(`${name} is an adult!`);
}

//using or
if (age < 16 || age >65){
  console.log(`${name} cannot run in race`);
} else{
  console.log(`${name} is registered for the race`);
}

// Ternary operator (?)
//short hand way of doing conditionals
//what this says: id === 100 and if (?) it's true, output CORRECT. If it isn't (:), output INCORRECT
console.log(id === 100 ? 'CORRECT' : 'INCORRECT');

//Without braces
if (id === 100)
  console.log('CORRECT');
else
  console.log('INCORRECT');
