// Lesson 02.04 - START

// The Date Object
/*
- The Date Object is instantiated using the new keyword: new Date().
- The Date Object returns the full date-time from the user's computer.
- The return value is saved as an instance (variable) of the Date Object.
- The instance is an object with all the Date Object's methods and properties.
*/

// 1. Instantiate the Date Object, saving the returned object as dateTime:
let dateTime = new Date(); 
console.log(dateTime); 
// Wed Nov 08 2023 13:09:53 GMT-0500 (Eastern Standard Time)

// The individual time units are accessible via the Date object's "get methods".

// 2. Get the current hour, minute and second:
let hour = dateTime.getHours();
console.log('hour:', hour); // 0-23

let minute = dateTime.getMinutes();
console.log('hour:', minute); // 0-59

let second = dateTime.getSeconds();
console.log('hour:', second); // 0-59

// 3. Express the time in 00:00:00 format:
let timeIs = `${hour}:${minute}:${second}`;
console.log('The time is:', timeIs); 

//format() method takes placeholders representing time units and returs time or date

// adding leading zeroes to minute and second
// If minute and/or second are less than 10, the time says 11:8:4, not 11:08:04. To fix this, add leading zeros to minute and second, as needed. This is done with conditional logic.
if(minute < 10) minute = '0' + minute;
if(second < 10) second = '0' + second;


// 4. If minute or second are less than 10, set the variable equal to itself with a '0' concatenated in front:



// Whenever there is only one line of code inside the curly braces of an "if statement", you can delete the curly braces, and put it all onto the same line.

// 5. Comment out the above "if statements" and re-write them as one-liners:


timeIs = `${hour}:${minute}:${second}`;
console.log('The time is:', timeIs); 

// converting military time to AM/PM time

// The Date Object returns an hour from 0-23, which is in military time: 
/*
- Instead of 3:00 pm, it's 1500 hours 
- Instead of 10:00 pm it's 2200 hours

To convert to AM/PM time, we need:

- a variable to store the string "AM" or "PM". We can give it a default value of "AM".
- follow the variable declaration with two if-statements, in this exact order: 
  - if hour > 11, set the variable to "PM" ("12:01 PM" is one minute after "12 noon")
  - if hour > 12, subtract 12 from hour (1900 hours becomes "7:00 PM");
*/

// 6. Declare a variable amOrPm with an initial value of 'AM', and follow that with the if-statements:
// let amOrPm = 'AM';

// if(hour > 11) amOrPm = 'PM';
// if(hour > 12) hour -= 12;

timeIs = `${hour}:${minute}:${second}`;
console.log('The time is:', timeIs); 

// Making a "Timely Greeting"
// Let's make a "timely greeting", one which is appropriate for the time of day.
/*
- if the hour is less than 12, say "Good morning!"
- else if the hour is less than 18 (6:00pm), say "Good afternoon!"
- else, say "Good Evening!"
*/

// 7. Our original hour may be old and / or may have had 12 subtracted from it, so get a fresh instance of the Date Object, as well as a fresh time units. We'll use shortened variable names this time:
let dt;

// 8. Declare greeting in the global scope as an empty string. It's value will be set by the "if else" logic.
let greeting = 'Good ';
let timeOfDay = '';

// 9. If the current hour is less than 12 (noon), set the greeting to "Good Morning!":

console.log(greeting + timeOfDay);

// 10. If the current hour is NOT less than 12, but it IS less than 18 (6:00 PM), set the greeting to "Good Afternoon!":

// 11. If both of these conditions are false, then the the current hour must be in the 18-23 range, that is, 6:00 PM or later. So set the greeting to "Good Afternoon!":



// "Timely Greeting"

// Let's display the greeting, along with the time in AM-PM format. This requires us to recalculate the hour, since we have a new variable for that:

// 12. Declare a new var for am-pm so that we can convert military time to "regular" time:
let amPm;

// 13. If the current hour is greater than 11, set amPM to "PM":

// 14. If the current hour is greater than 12, subtract 12 from the hour:

// 15. Add a leading "0" to minute, if needed:

// 16. Concatenate a fresh time display

// easy way to get the time
let easyTime = dateTime.toLocaleTimeString('en-US');
console.log('easyTime:', easyTime);

// 17. Log the timely greeting along with the time:
let timelyGreeting = `${greeting + timeOfDay} the time is ${easyTime}`;
console.log('timelyGreeting:\n', timelyGreeting)
// Outputting the "timely greeting" to the web page

// 18. Get the html element that we have for displaying the timely greeting:


// 19. Set the textContent property of the tag object to timelyGreeting:

// Today's Date

// Let's concatenate today's date from other Date Object time units.

// 20. Get today's date, which is an integer from 0-31:
let date = dateTime.getDate(); 
console.log('date', date);

// 21. Get the month, which is a number from 0-11, where Jan is 0:
let month = dateTime.getMonth();
console.log('month:', month);

// 22. Get the month as a string (January, February, etc). This gives us the flexibility to use the month as either a number or a day:
let monthStr = dateTime.toLocaleString('default', {month:'long'})
console.log('monthStr:', monthStr);
let shortMonthStr = dateTime.toLocaleString('default', {month:'short'})
console.log('monthStr:', shortMonthStr);

// 23. Get the day of the week as a number, with Sunday being 0
let dayOfWeek = dateTime.getDay()
console.log('dayOfWeek:', dayOfWeek);

// get day of week as string name, like 'Wednesday' instead of 3.
let dayOfWeekStr = dateTime.toLocaleString('en-US', {weekday: 'long'})
console.log('dayOfWeekStr:', dayOfWeekStr);

let shortDayOfWeekStr = dateTime.toLocaleString('en-US', {weekday: 'short'})
console.log('shortDayOfWeekStr:', shortDayOfWeekStr);

// 24. Make an array of the days of the week.
let daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Recall that an array is a variable which stores comma-separated values inside square brackets. Also recall that we can look up an item in an array by: array[index].  

// 25. Look up the first item in the array (Sunday) by its index (0):

// first day of week: Sunday

// 26. Get the day of the week by looking it up in the array by its index (0-6), which we have as day:

// day of week: Monday



// 27. Get the four-digit year:
let fullYear = dateTime.getFullYear();
console.log('fullYear:', fullYear); // 2023

// 28. Concatenate today's dates:
const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};


timelyGreeting = `Good ${timeOfDay} the time is ${easyTime}`;
console.log('timelyGreeting:\n', timelyGreeting)

let todaysLongDate = dateTime.toLocaleDateString('en-US', options);
console.log('todaysLongDate:', todaysLongDate);
// todaysLongDate: Wednesday, November 8, 2023



let greetingStr = '';
let linkHref = "";
let cupPic = "";




// DOM challenge:

let objArr = [
  { url: "https://newyorksimply.com/nyc-things-to-do-in-new-york-city-at-night", 
    pic: "hey-night-owl-coffee-cup.jpg" },
  { url: "https://nymag.com/guides/everything/early-morning-2014-1/", 
    pic: 'good-morning-coffee-cup.jpg' },
  { url: "https://www.theinfatuation.com/new-york/guides/best-afternoon-tea-nyc", 
    pic: 'good-afternoon-coffee-cup.jpg' },
  { url: "https://websterhall.com/shows/", 
    pic: 'good-evening-coffee-cup.jpg' }
]; 

console.log(objArr[2].pic) // good-afternoon-coffee-cup.jpg

if(hour < 4) {
  greetingStr = "Grief, what are you still doing up?";
  linkHref = objArr[0].url;
  cupPic = objArr[0].pic;
} else if(hour < 12) {
  greetingStr = 'Morning';
  linkHref = objArr[1].url;
  cupPic = objArr[1].pic;
} else if(hour < 18) {
  greetingStr = 'Afternoon';
  linkHref = objArr[2].url;
  cupPic = objArr[2].pic;
} else {
  greetingStr = 'Evening';
  linkHref = objArr[3].url;
  cupPic = objArr[3].pic;
}

// output todaysLongDate to the h2 of id="todays-date"
const todaysDateH2 = document.getElementById("todays-date");
todaysDateH2.textContent = todaysLongDate;

// output timelyGreeting to the h2 of id="greeting"
let greetingTag = document.getElementById('greeting');
greetingTag.innerHTML = `Good ${greetingStr}!<br>The time is ${easyTime}`;
// if there's a tag in the string you're trying to output, set .innerHTML instead of 
// .textcontent

// no function required.. no button
// it just happens on page load automatically.
// get the cup img from the DOM:
const cup = document.querySelector('img');
cup.src = 'images/' + cupPic;
// AND output the correct cup img to the page.
// and output the correct link to activities web page
const aTag = document.querySelector('a');
aTag.href = linkHref;
aTag.style.fontWeight = 'bold';
aTag.style.fontSize = '21px';
aTag.textContent = greetingStr + ' activities';
// do morning, afternoon, and evening as basic part
// do night own from midnight - 4:00 as bonus.


// 29. Output today's date to the web page:













// Challenge w/ leading zero:
// generate a random 4-digit pin that can include leading 0's, 0045 can be a pin number.
let randInt = Math.floor(Math.random() * 10000); // 0-9999 .. turn that into 0000-9999
let randPin = '';
// if randInt is 5 how many leading 0's do we need? 3
// else if randInt is 57 how many leading 0's do we need? 2
// else if randInt is 537 how many leading 0's do we need? 1
// else randInt is 5371 how many leading 0's do we need? 0
if(randInt < 10) {
  randPin = '000' + randInt;
} else if(randInt < 100) {
  randPin = '00' + randInt;
} else if(randInt < 1000) {
  randPin = '0' + randInt;
} else {
  randPin = '' + randInt;
}


console.log('randInt:', randInt, typeof(randInt)); // randInt: 678 number
console.log('randPin:', randPin, typeof(randPin)); // randInt: 0678 string