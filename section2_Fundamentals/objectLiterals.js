const person = {
  firstName: 'Steve',
  lastName: 'Smith',
  age: 30,
  email: 'steve@aol.com',
  hobbies: ['music', 'sports'],
  address: {
    city: 'Miami',
    state: 'Florida'
  },
  getBirthYear: function(){
    return 2020 - this.age;
  }
}

let val;

val = person;

//get a specific value
val = person.firstName; 
//outputs Steve

val = person['firstName'];
//also outputs steve

val = person.age
val = person.hobbies;
//prints out whole array

val = person.hobbies[1];
//outputs sports

val = person.address;
//prints out whole object

val = person.address.state;
//outputs the state (Floriday)

val = person.address['city'];
//outputs the city 

val = person.getBirthYear();

const people = [
  {name: 'John', age: 30},
  {name: 'Mike', age: 23}
]

for (let i = 0; i <people.length; i++){
  console.log(people[i].name);
}

console.log(val);