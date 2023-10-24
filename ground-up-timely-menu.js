const dateTime = new Date();
let hour = dateTime.getHours();
console.log(hour);
let linkText = "";
let linkHref = "";

//if-else if-else logic to handle
//breakfast, lunch, and dinner
// let hour = 17;

if(hour < 11) {
    linkText = 'Breakfast';
    linkHref = 'breakfast.html';
} else if(hour < 16) {
    linkText = 'Lunch';
    linkHref = 'lunch.html';
} else {
    linkText = 'Dinner';
    linkHref = 'dinner.html';
}

//target the meal-link and assign the linkText and linkHref
// dynamically generate an a-tag, assign it its properties and output it to the DOM as a child of the current-menu div.
const mealLink = document.getElementById('a');
mealLink.href = linkHref;
mealLink.textContent = linkText;
mealLink.className = "button";
const currentMenuDiv = document.getElementById('current-menu');
currentMenuDiv.appendChild(mealLink);