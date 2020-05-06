//single element selector can only grab one element
//if you use a single element selector on a class and there are multiple classes, it will grab the first one

//document.getElementById()
//selects things by id

//h5 has an id of task-title, so let's select it
/*
This outputs the exact h5, like this:
<h5 id="task-title">Tasks</h5>
*/
console.log(document.getElementById('task-title')); 

//Get things from the element
//get the id
console.log(document.getElementById('task-title').id); //outputs task-title
console.log(document.getElementById('task-title').className); //outputs the class

//Change styling
//do this when using events..hovering on things...dynamic functionality
/*
Syntax:
document.getElementById('task-title').style.attribute you want to change = ;
*/
document.getElementById('task-title').style.background = '#333';
document.getElementById('task-title').style.color = '#fff';
document.getElementById('task-title').style.padding = '5px';

//change content
document.getElementById('task-title').textContent = 'task List'; //changed the content
document.getElementById('task-title').innerText = 'My Tasks'; //also changes the content

document.getElementById('task-title').innerHTML = '<span style="color:red">Task List</span>';


//REFACTORING
const taskTitle = document.getElementById('task-title');

//Change styling
//do this when using events..hovering on things...dynamic functionality
/*
Syntax:
document.getElementById('task-title').style.attribute you want to change = ;
*/
taskTitle.style.background = '#333';
taskTitle.style.color = '#fff';
taskTitle.style.padding = '5px';

//change content
taskTitle.textContent = 'task List'; //changed the content
taskTitle.innerText = 'My Tasks'; //also changes the content

taskTitle.innerHTML = '<span style="color:red">Task List</span>';

//document.querySelector()
//don't need to select an element by ID, but you can select with anything

console.log(document.querySelector('#task-title')); //outputs the id
console.log(document.querySelector('.card-title')); //outputs the class
console.log(document.querySelector('h5')); //if more than one, it will get the first one

//list items on page
document.querySelector('li').style.color = 'red'; //makes top li red
//select last item
document.querySelector('li:last-child').style.color = 'blue';
//select specific item
document.querySelector('li:nth-child(3)').style.color = 'yellow';
