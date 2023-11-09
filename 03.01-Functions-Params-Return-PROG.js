/* Lesson 03.01 - START

Function 
A function is a block of code that runs only when it is invoked (called). 
A function usually (but not always) has a name to call it by.
The function can be called by an event on the web page, such as a button click, however a function can also be called directly in the JS code.

Defining (declaring) a function.

To declare or define a function, follow these steps:
*/

// 1. Start with the keyword: function

// 2. Give the function a name. Variable naming rules apply. A function carries out some action, so it is customary for the name to be, or at least begin, with a verb, play, swapImage or greetWorld:function greetWorld

// 3. Tack on a pair of parentheses. These are for passing data into the function:
 
// 4. Next comes a pair of curly braces, inside of which goes the code which runs when the function is called. Let's just log "Hello World":

function greetWorld() {
    console.log('Hello World!');
}
greetWorld();

// variables have to be declared BEFORE they can be used:
// console.log(x);
// let x = 5; // erroe: cannot access 'x' before initialization

// Some functions have empty parentheses. We'll start by leaving them empty.

// 5. Run this example and check the Console. 

// Nothing appears. Where's the Hello World message? Remember, a function must be called, but all we have done so far is define the function. We do not have a button to click, or other web page element for calling the function, so's just call it directly in the code:

// 6. Call the function by writing its name, followed by the parentheses:
greetWorld();
// 7. Re-run the page and check the Console. We should see Hello World.

// 8. Check the data type of the function--it's function:

console.log('greetWorld datatype:', typeof(greetWorld));
// greetWorld() data type: function

// variable scope

/* 
global variables
A var, let or const declared outside of any curly braces are global in scope. 
A global variable is available everywhere in its script.
    
block scoped (local) variables
A var, let or const declared inside the curly braces of a function is block scoped, that is, local to that function. Outisde of the function, the variables do not exist. A let or const declared inside the curly braces of an "if statement" are also block scoped, but a var so declared is global in scope.

// 9. As a review of variable scope, declare two variables inside the curly braces of an "if statement":
*/
let meal = 'dinner';

if(meal == 'dinner') {
    var food = 'burger';
    let bev = 'ginger ale';
    console.log(`Inside: I'll have a ${food} and ${bev}, please.`);
}

// 10. Try to access the food variable, which was declared inside the "if block"
console.log(`Outside: I'll have a ${food} please.`); // runs because it's a var
// console.log(`I'll have a ${food} and ${bev}, please.`); // doesn't run
// I'll have a burger, please.
// This works, because var variables declared are not confined by the curly braces.

// 11. Try to access the bev variable, which was declared inside the "if block":
// console.log(`I'll have a ${entree}, please.`); 
// This throws an error, because the let variable is confined to the curly braces.

// 12. Declare another function with variables declared inside the function:
function welcomePlayer() {
    var user = 'pika2';
    let score = 500;
    console.log(`Welcome, ${user}! Your score is ${score}!`);
}
// 13. Call the function and check the console. We get the expected output:
// Welcome, Pika2! Your score is 500.
welcomePlayer();

// 14. Log the same Welcome message OUTSIDE of the function:
// console.log(`Welcome, ${user}! Your score is ${score}!`);
// console.log(`Welcome ${user}!`); 
// This throws an error, because var, let and const declared inside a function are "function scoped", which means that they are available only inside of the function.


// function parameters and arguments

// Parameters (params for short) are inputs of a function that go in the parentheses. Inside the function, parameters are local variables. When a function is called, the params are assigned values as arguments passed into the function call parentheses.

// 15. Write a function with a parameter:

function greetPlayer(username) {
    console.log(`Greetings, ${username}`);
}


// 16. Call the function twice, with different arguments each time
greetPlayer("Brian123"); // Greetings, Brian123!
greetPlayer("zer0921"); // Greetings, zer0921!

// If a function expects an argument, but none is provided, the missing value will be 'undefined'.

// 17. Call the function again, but this time omit the argument:
// Greetings, undefined!
greetPlayer(); // Greetings, undefined

// 18. Write a function with two parameters:

function greetWithScore(username, score) {
    console.log(`Hey, ${username}! Your score is ${score}.`);
}

// 19. Call the function, passing in both expected arguments:
// Hey, Day12! Your score is 4543.

greetWithScore('Day12', 4543); // Hey, Day12! Your score is 4543.

// 20. Call the function again, but this time omit the score argument:
// Hey, Ida34! Your score is undefined.
greetWithScore("Day12"); // Hey, Day12! Your score is undefined.

// How to tell function to pair the only argument with param2 instead of param1
// default parameter values

// A parameter can be assigned a value when the function is declared. 
// That way, if no argument is supplied for it, it uses the default. 

// 21. Write a function but a default value:
function greetWScore(user="Player", highScore = 3000) {
    console.log(`Welcome ${user}! Your high score is ${highScore}!`);
}

// 22. Call the function, passing in both expected arguments:
// Hey, Xyz1! Your score is 12300.
greetWScore("xyz1", 12300);

// 23. Call the function again, but this time omit the second argument. This time, rather than resulting in undefined, the second argument will use its default value:
// Hey, Abc2! Your score is 3000.
greetWScore("Abc2");
greetWScore(); // Welcome Player! Your high score is 3000

// global variables are available everywhere, including to all functions:

// 24. Write a function called addNumbers, and give it two parameters. These are the  number that are added together by the function:
function addNumbers(num1, num2) {
    let sum = num1 + num2;
    console.log('sum num1 + num2:', sum);
}

// 25. Call the function and provide the expected numbers to add:
addNumbers(85,79); // sum num1 + num2: 164

// write a function called findArea and give it two parameters.
function findArea(len, wdth) {
    // let area = len * wdth;
    // console.log('area of room:', area);
    return len * wdth; // export the answer == get it out of the func
}
// return values are being stored in the following variables.
let livingRoomArea = findArea(22, 17); // area of room: 374
console.log('livingRoomArea:', livingRoomArea); // livingRoomArea: 374

let bedroom1Area = findArea(18, 14); // area of room: 252
console.log('bedroom1Area:', bedroom1Area); // bedroom1Area: 252

let bedroom2Area = findArea(12, 43); 
console.log('bedroom2Area:', bedroom2Area); // bedroom2Area: 516

let kitchenArea = findArea(34, 25); 
console.log('kitchenArea:', kitchenArea); // kitchenArea: 850

let houseArea = livingRoomArea + bedroom1Area + bedroom2Area + kitchenArea;
console.log('houseArea:', houseArea); // houseArea: 1992
// function return values

// So far, our functions have produced only console output. This is useful for tesing and debugging, but the result not been saved to any variable. In the addNumbers example, our "164" made it to the console, but otherwise went poof. To "preserve the  result" of a persist, don't just log it--return it. This "exports the result" out of the function, where you may "capture it" by setting the function call itself equal to a variable. To return a "result", put the keyword 'return' in front of the value. The return also terminates the function, so make return the last thing the function does.

// 26. Define another function, but with a big difference: this one has a return statement:

// 27. Call the function, setting the function call itself equal to a variable. This "captures" the product -- the return value:
// prod: 180

// 28. Save a step by directly returning the math expression, as opposed to first saving the product to a variable and then returning the variable:

// 75

// 29. Refactor the greeting-style function by having it return a value, rather than just log a message to the console. 
function greetWithScore(user="Buddy", score=0) {
    // let greeting = `Greeting, ${user}! Your score is ${score}`;
    return `Greeting, ${user}! Your score is ${score}`;
}
let greeting1 = greetWithScore('Viper', 7340);
console.log('greeting1:', greeting1); // greeting1: Greeting, Viper! Your score is 7340.

let greeting2 = greetWithScore();
console.log('greeting1:', greeting2); // greeting1: Greeting, Buddy! Your score is 0


// 30. Try logging the function call itself, rather than saving it to a variable:
// Welcome, Kit26! Your score is 890!

// calculate cafe bill function

// 31. Declare a calcCafeBill function with four parameters: food, bev, taxPct and tipPct, the last two with default values of 8.875 and 18, respectively.
function calcCafeBill(food, bev, taxPct=8.875, tipPct=18) {

}

/* 
The function adds the food and bev together to obtain the sub-total
The tax equals the sub-total times the tax percent.
The tip equals the sub-total times the tip percent.
The final total equals the sub-total plus the tax plus the tip.
*/

    // 32. Add food and bev food and bev together to obtain the subTot
    
    function calcCafeBill(food, bev, taxPct=8.875, tipPct=18) {
        let subTot = food + bev;
    }

    // 33. Calculate the tip and tax. Since these are percents, divide by 100:
    function calcCafeBill(food, bev, taxPct=8.875, tipPct=18) {
        let subTot = food + bev;
        let tip = (subTot * tipPct) / 100;
        let tax = (subTot * taxPct) / 100;
    }


    // 34. Add everything together to get the final total:
    function calcCafeBill(food, bev, taxPct=8.875, tipPct=18) {
        let subTot = food + bev;
        let tip = (subTot * tipPct) / 100;
        let tax = (subTot * taxPct) / 100;
        let tot = tip + tax + subTot;
    }

    // 35. Concatenate and return the itemized guest check. Round the monetary values to 2 digits (cents) with toFixed(2):
    function calcCafeBill(food, bev, taxPct=8.875, tipPct=18) {
        let subTot = food + bev;
        let tip = (subTot * tipPct) / 100;
        let tax = (subTot * taxPct) / 100;
        let tot = tip + tax + subTot;
        const dt = new Date();
        const options = {weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
        let date = dt.toLocaleDateString('en-US', options);
        let time = dt.toLocaleTimeString('en-US');
        return `
                *** JavaSlurp Cafe ***
                *** Guest Check ***
                Date: ${date}
                Time: ${time}
                Food: $${food}
                Bev: $${bev}
                Sub-total: $${subTot.toFixed(2)} 
                Tax pct: ${taxPct}%
                Tax: $${tax.toFixed(2)}
                Tip pct: ${tipPct}
                Tip: $${tip.toFixed(2)} 
                Total: $${tot.toFixed(2)}`;
    }


// function calcCafeBill

// 36. Call the function, passing in the four expected arguments, and save the resulting string to a variable:
let bill = calcCafeBill(food=45, bev=21, taxPct=8.875, tipPct=18);
console.log('bill:', bill);

// 37. Call the function again, but this time, omit the last two arguments. The default tip (18) and tax (8.875) will be used. log the func directly w/o saving to a var cuz the return value IS the func call itself;
bill = calcCafeBill(food=78, bev=41);
console.log('bill2:', bill);


// CHALLENGE: 
// A.
// Most restaurant bills show the date and time, so add these to the bill.
// See Lesson 02.04 Date Object to refresh your memory on how to do this
// Do this as a new function by the name of calcCafeBillDateTime.
// To keep the date time reasonably simple: no seconds needed
// - use military time (no conversion to AM-PM), 
// - output date as day/month/year (no day of the week)

    // the new stuff for the date time
    let dt;
    let hour;
    
// function calcCafeBillDateTime

bill;
console.log(bill);