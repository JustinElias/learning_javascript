let val;

val = document; //outputs entire document from doctype type to ending html tag

//if you want html collection from entire document
val = document.all; //outputs something that looks like an array
val = document.all[0]; //outputs the html element
val = document.all.length; //shows 43 elements in the index.html file
val = document.head; //outputs just the head
val = document.body; //outputs the body
val = document.doctype; //outputs the html5 doctype...would show xhtml if we were using that
val = document.domain; //outputs loopback address
val = document.URL; 
val = document.characterSet; //UTF-8
val = document.contentType; //outputs text/HTML

//get all forms on the page
val = document.forms; //for ours, will have 1 form
val = document.forms[0];
//get the id of the form
val = document.forms[0].id;
//get method
val = document.forms[0].method;
//get action
val = document.forms[0].action;

//links
val = document.links; //outputs all the links
//access links
val = document.links[0];
//get classes
val = document.links[0].className;

//images
val = document.images; //outputs empty collection because there are no images

//scripts
val = document.scripts; //we have 3 at end of html file

//attributes
val = document.scripts[2].getAttribute('src'); //outputs the src attribute named app.js

//turn these things into arrays
let scriptsArr = Array.from(scripts);

scriptsArr.forEach(function(script){
  console.log(script.getAttribute('src'));
});

console.log(val);