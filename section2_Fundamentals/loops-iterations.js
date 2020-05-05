//loops used to run through end of code - for, while and do while loops most popular

//General loops

//For Loop
for(let i = 0; i < 10; i++){
  console.log('Number' + i);
}

/*
i++ =
i = i+1
*/

//For Loop + skipping a number
for(let i = 0; i < 10; i++){
  if(i === 2){
    console.log('Skipping ' + i);
    //completely skips the iteration. So will skip outputting 2
    continue;
  }
  if(i === 5){
    //completely stops the loop
    break;
  }
  console.log('Number' + i);
}


//WHILE LOOP
//use for loop when you know how many times it's going to run and a while loop if you don't

let i = 0;

while(i < 10){
  console.log('Number' + i);
  i++;
}

//DO WHILE LOOP
//will always run once no matter what

let x = 0;

do{
  console.log('Number' + x);
  x++;
}

while(i < 10);


//Loops to loop through arrays
const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

for (let i = 0; i<cars.length; i++){
  //outputs name of the cars
  console.log(cars[i]);
}

//For each array loop
const cars2 = ['Ford', 'Chevy', 'Honda', 'Toyota'];

cars2.forEach(function(car){
  console.log(car);
});

cars2.forEach(function(car, index){
  console.log(`${index} : ${car}`);
});

cars2.forEach(function(car, index, array){
  console.log(`${index} : ${car}`);
  console.log(array);
});


//MAP
//used to return something different...different array
const users = [
  {id:1, name:'John'},
  {id:2, name:'Justin'},
  {id:3, name: 'Freddy'}
];

//variable to take array of objects of ids

const ids = users.map(function(user){
  return user.id;
});

console.log(ids);




//FOR IN
const user = {
  firstName: 'John',
  lastName: 'Doe',
  age: 40
}

//outputs the keys: firstName, lastName, age
for (let x in user){
  console.log(x);
}

//this will give you the actual value
for (let x in user){
  console.log(`${x}: ${user[x]}`);
}

