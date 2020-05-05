//blocks of code that can be called and used later

//Function declerations
function greet(){
  //console.log('Hello');
  return 'Hello';
}

console.log(greet());



//Adding parameters
function greetings(firstName, lastName){
  //console.log('Hello');
  return 'Hello' + firstName + ' ' + lastName;
}

console.log(greetings('John', 'Doe'));



//Adding Default Values
function greetings(firstName = 'John', lastName = 'Doe'){
  //console.log('Hello');
  return 'Hello' + firstName + ' ' + lastName;
}

//if we add paramters in here, it will overwrite the default values
console.log(greetings());




//FUNCTION EXPRESSIONS
//putting a function as a variable assignment

//named variable with anonymous function
const square = function(x = 3){
  return x * x;
};

console.log(square(8));


//IMMEDIATELY INVOKABLE FUNCTION EXPRESSION - IIFEs
//function you declare and run at the same time
//mostly useful when using module design patterns

(function(name){
  console.log('Hello' + name);
})('Brad');



//PROPERTY METHODS
//Functions inside of Objects
//function inside object = method

const todo = {
  add: function(){
    console.log('Add todo..');
  },
  edit: function(id){
    console.log(`Edit todo ${id}`);
  }
}

//define object for this function outside of it
todo.delete = function(){
  console.log('Delete todo...');
}

todo.add();
todo.edit(22);
