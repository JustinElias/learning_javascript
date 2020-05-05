//date object
let val;

//if we don't pass anything into the Date, it will use today's date
const today = new Date();

val = today;
//outputs today's date...with type object

const birthday = new Date('9-10-1981');

val = birthday;
//outputs Thursday September 10th, 1981 00:00:00

const birthdayWithTime = new Date('9-10-1981 11:11:11');
 val = birthdayWithTime;
//outputs Thursday September 10th, 1981 11:11:11

const birthdaySlashes = new Date('9/10/1981');

//get the month

val = today.getMonth();
//the getMonth method starts at 0. This means that January will start at 0

val = today.getDate();

val = today.getDay();
//this outputs a number, starting at Sunday

val = today.getFullYear();
//outptus 2020

val = today.getHours();
//outputs the hour

val = today.getMinutes();
//outputs the minutes

val = today.getSeconds();
//outputs the seconds

val = today.getTime();
//gives us a time stamp...amount of seconds that have passed since January 1st, 1970

birthday.setMonth(2);
console.log(birthday);
//changes the month used in birthday to March

birthday.setDate(12);
//changes the day that was set for birthday

birthday.setFullYear(1990);
//changes the year that was set for birthday

birthday.setHours(3);
//changes the hours of the time

console.log(val);
