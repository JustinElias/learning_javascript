// //var, let, const

// //declare variable
// var name = 'Justin E.';
// console.log(name); //outputs Justin E.

// name = 'Steve Smith';
// console.log(name); //outputs Steve Smith

// //Init var
// var greeting;
// console.log(greeting); //undefined
// greeting = 'Hello';
// console.log(greeting); //prints hello

// //rules + conventions

// //letters, number, _, $
// //cannot start with a number

// //multi word
// var firstName = 'John'; //Camel case
// var first_name = 'Justin'; //underscore
// var FirstName = 'Jay'; //pascal case
// var firstname = 'Leah'; //undercase - not recommended

//let and const
// let name;
// name = 'Justin E.';
// console.log(name);
// name = 'Baxter';
// console.log(name);

//const = constant
//cannot be changed/reassigned
// const name = 'Justin E.';
// console.log(name);
//cannot reassign
//name = 'Sara';

//have to assign a value
//const greeting; //cannot do this

const person = {
  name: 'John',
  age: 30
}

//we can change the stuff that is inside, but we cannot reassign person
person.name = 'Sara';
person.age = 32;

console.log(person);
console.log(age);

const numbers = [1,2,3,4,5,6];
//we can also change const arrays
numbers.push(6);

//what we can't do is this:
//numbers = 4 
//person = 6

console.log(numbers);

