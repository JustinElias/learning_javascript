//move up and down
//parents and children of specific nodes or whatever it is that we select

let val;
const list = document.querySelector('ul.collection'); //selecting the ul with the class collection
const listItem = document.querySelector('li.collection-item:first-child'); //selection the li with the class collection-item. Because there are a few lis with the class collection-item, it is going to select the first one

val = listItem;

//looking at different properties of these nodes

//let's get child nodes of the uls
val = list.childNodes; //this outputs a NodeList of everything inside the ul.collection. The "text" is the </li>...which counts as a text node

val = list.childNodes[0]; //outputs text...first element
val = list.childNodes[0].nodeType; //outputs 3 (text node)
val = list.childNodes[3].nodeType; //outputs 8 (comment)

/*
What the numbers mean for the Child Nodes:
1: Element
2: Attribute (deprecated)
3: Text node
8: Comment
9: Document itself
10: Doctype
*/

//Get children element nodes
//for the most part, you will use children more than child nodes
val = list.children; //this outputs an HTML collection. There is no text, just elements

//select child
val = list.children[0]; //first one
val = list.children[1]; //second one
list.children[1].textContent = 'Hello'; //changes text of second one to Hello
//add an id
list.children[3].children[0].id = 'test-id';

//get children of children
val = list.children[3].children; //gives us the children of the 4th one down. The delete is a link and that's what it's giving us. Collection of the links


//first child
val = list.firstChild; //gives us first element. outputs 3

val = list.firstElementChild; //gives us first element, ignoring text nodes

//last child
val = list.lastChild; //last element

val = list.lastElementChild; //last list item

list.lastElementChild.textContent = 'Hello'; //changes text of the last element child

//get the count of child elements
val = list.childElementCount; //outputs 5

//Get parent node
val = listItem.parentNode; //outputs ul
val = listItem.parentElement; //outputs ul

//parents of parents
val = listItem.parentElement.parentElement; //get the div of card-action. We start as an li, parent of li is the ul and the parent of the ul is the card-action

//siblings
val = listItem.nextSibling; //outputs text node. Similar to child nodes and first child and last child, it also deals with nodes, not just elements.
val = listItem.nextElementSibling; //outputs next list item
val = listItem.nextElementSibling.nextElementSibling; //outputs next


//previous sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling; //returns null because we are at the first list item and there is no previous sibling to that



console.log(val);