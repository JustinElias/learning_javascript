//create element and insert into dom

//adding extra list item at the bottom of list + link icon

//create the element
const li = document.createElement('li');

//add a class
li.className = 'collection-item'; //match rest of lis

//add an id
li.id = 'new-item'; //just gives the li an id

//add attribute
li.setAttribute('title', 'New Item'); //gives the li a title = New Item

//create text node and append
li.appendChild(document.createTextNode('Hello World')); //gives the li text, but it doesn't display yet! Can also create a variable for document.createTextNode('Hello World') and replace it here

//create new link element (x)
const link = document.createElement('a'); 
//add classes
link.className = 'delete-item secondary-content';
//add icon html
link.innerHTML = '<i class="fa fa-remove"></i>';
//append this link (x) into li
li.appendChild(link);

//Append the li element we have created the the ul with the class collection
document.querySelector('ul.collection').appendChild(li);


//this will show exactly what the li looks like
console.log(li);