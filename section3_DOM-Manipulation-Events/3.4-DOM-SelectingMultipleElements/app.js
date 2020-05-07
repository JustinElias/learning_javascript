//return an html selection or node list when using a Selector for Multiple Elements
//these are similar to arrays, but there are certain things you can't do with them.
//can be converted to arrays easily

//document.getElementsByClassName
//this will get the elements on a global scale. Any item with the class "collection-items" will be added to the array
const items = document.getElementsByClassName('collection-item');

console.log(items); //outputs HTML collection and each list item is in an index, similar to an array
//can access items in this "array" (not actually an array)
console.log(items[0]); //this outputs the first list item

items[0].style.color = 'red'; //changes first item to font of red
items[3].textContent = 'Hello'; //changes the text from List Item to Hello


//this will only get the items with the class "collection-items" in a ul, so if you were to add a div with a class of "collection-items", it wouldn't show up.
const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

console.log(listItems); //outputs same as above


//document.getElementsByTagName
let lis = document.getElementsByTagName('li');
console.log(lis); //outputs an HTML collection with all of the lis

console.log(lis[0]); //outputs the first item of the collection
lis[0].style.color = 'red';
lis[3].textContent = 'Hello';


//HTML collection is not an array
//convert the HTML collection into an array

lis = Array.from(lis); //converts it into an array and can now perform array methods on it

lis.reverse();

lis.forEach(function(li){
  console.log(li.className); //logs all of the class names
  li.textContent = 'Hello'; //changes all of the text content to Hello
  li.textContent = `${index}: Hello`;
});

console.log(lis);


//Query Selector all -- returns a node list
//similar to above, but there are some differences
//node list counts elements, text nodes and allows you to use for each/other array methods without having to convert it

//document.querySelectorAll
const items = document.querySelectorAll('ul.collection li.collection-item'); //has the same affect if we just used li

//we are able to do this without have to convert it to an array
items.forEach(function(item, index){
  item.textContent = `${index}: Hello`;
});

const liOdd = document.querySelectorAll('li:nth-child(odd)'); //we want to select all the li and we also want the nth-child odd
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(li){
  li.textContent = 'This is an odd li';
});

for(let i = 0; i < liEven.length; i++){
  liEven[i].style.background = '#f4f4f4';
}

console.log(items);


