//Global scope
//not inside of anything
//let and const have a block level scope and var has a function level scope
var a = 1;
let b = 2;
const c = 3;

function test(){
  var a = 4;
  let b = 5;
  const c = 6;
  console.log('Function Scope: ', a, b, c);
}

test();

//block level scope: anything wrapped in {}...like if statements

if (true){
  //block scope
  //this will change the global outputs to be 4, 2, 3 because the a changes from 2 to 4
  //var causes security/confusion because it can be changed
  var a = 4;
  let b = 5;
  const c = 6;
  console.log('If scope: ', a, b, c);
}


//this will make the global scope value of a to equal 10
for (var a = 0; a < 10; a++){
  console.log(`Loop ${a}`);
}

console.log('Global Scope: ', a, b, c);

