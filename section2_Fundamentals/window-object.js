//browser is global environment
//look in window section in chrome

//WINDOW METHODS / OBJECTS / PROPERTIES

window.console.log(123);

//Alert
window.alert('Hello World');
//can also do:
alert('Hello Worlds');

//Prompt
const input = prompt();
alert(input);

//confirm
//used when deleting something and it could be an accident
if(confirm('Are you sure?')){
  console.log('Yes');
} else{
  console.log('Cancelled');
}

//properties
//height and width of window
let val;

//outter height and width
//outputs size of the window
//shrink and reload and it'll give smaller number
val = window.outerHeight;

//same as outter height
val = window.outerWidth;

//inner width...inside scroll bars
val = window.innerHeight;
val = window.innerWidth;

//scroll points
//figure out where you are in terms of scrolling
val = window.scrollY;
val = window.scrollX;

//location object
val = window.location;
val = window.location.hostname; //outputs address
val = window.location.port; //outputs port number
val = window.location.href; //gives us everything
val = window.location.search; //show the query string

//redirect
window.location.href = 'http://google.com';

//reload page
window.location.reload(); //keeps reloading page

//history object
//gets browsing history
window.history.go(-1);

val = window.history.length;

//navigator object
val = window.navigator; 
val = window.navigator.appName; //outputs Netscape unless on IE
val = window.navigator.appVersion; //outputs version of browser
val = window.navigator.userAgent; //outputs generation/versions
val = window.navigator.platform; //outputs Win32 for windows....darwin for Mac
val = window.navigator.vendor; //outputs Google Inc.
val = windows.navigator.language; //en-us

console.log(val);