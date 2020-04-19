//this is a comment
/* this is 
a multi-line 
comment
*/
console.log((10+4)*8);

/* 
An interesting thing about javascript is it automatically 
change an integer to a string when we decide to concatenating.
An example is:
*/
console.log("Hello" + 5*10)
/* 
This will print Hello50
Different than python that would give us a TypeError
*/

// Creating an variable:

var name = "Zoe";
var age = 4

// Different than other languages JavaScript way of named a variable is using camelCase

thisIsAName
thisToo
firstLowerSecondTitle
usefulNames

//Let's start little by little to code
//Fahrenheit Equation

var celsius = 12;
var fahrenheit = celsius * 1.8 + 32

console.log(fahrenheit);

/*
Use \ to skipt some character, same for \n (new line).
JavaScript has \t for addictional tab in your line.
To avoid an \ in your code like C:\\Desktop\ you need \\ before the character you want skipt.
It will be like C:\\\\Desktop\\.
*/

/*
Each character in JS has a different numeric value.
'Y' != 'y'
If you want to know some character value you can use the code:
*/

var my_string = "a";

var ASCII_value = my_string.charCodeAt(0);

console.log(ASCII_value);

//For bigger string use a for loop:

var my_string = "AnaLuiza"

for (var i = 0; i < my_string.length; i++) {
    console.log(my_string.charCodeAt(i));
}


/*
Index in JavaScript works like Python, you can use the variable or the element + [4].
However, to access some character in a string, you can also use 
*/

/* 
NULL (Value of nothing/ Totally empty)
Used when you want to purposely give something the value of nothing.
var x = null;
return null

Undefined (Does not have a value, not even nothing)
var x;
return undefined

NaN - Not a Number
Often returned indicationg an error, like when you try to divide some string by an integer:
"hello"/5 - Will return an error NaN.
*/

/*IMPLICIT TYPE COERCION
Means that JS will interprete your code automatically to convert types to an "appropriate" one.
As we say early we can add an string to an integer: Hello + 5 = Hello5
However Hello % 10 = NaN
To avoid the type convertion before the comparison: Use one more =
1 === '1':
return False
*/

//Creating Variables and String Concatenation

var firstName = 'Ana';
var interest = 'dogs';
var hobby = 'programming';
var awesomeMessage = "Hi, my name is " + firstName + ". I love " + interest + ". In my spare time, I like to " + hobby + ".";
console.log(awesomeMessage);


// IF/ELSE STATEMENT IN JS:
var price = 10.00; //price to buy some easter egg
var money = 15.00; //money that you have
if (money >= price) {
    console.log('You can buy the Easter Egg.');
} else {
    console.log('Out of money')
}


// ELIF = else if

var mood = 'happy';

if (mood === 'sad') {
    console.log('Don\'t be sad, everything is going to be ok!');
} else if (mood === 'party'){
    console.log('UHU! It is party time!');
} else {
    console.log('I am feeling !')
}

// Check the number = Even or Odd

var number = 205;

if (number % 2 === 0) {
    console.log('even')
} else {
    console.log('odd')
}

/* 
&& = and
|| = or
! = not
 */

// Locations: 'kitchen', 'library', 'billiards room', 'dining room'
// Suspects: 'Mr. Smith', 'Mrs. Richards', 'Mr. Parker', 'Mrs. Olives'


var room = "kitchen";
var suspect = "Mr. Smith"; 
var weapon = "";
var solved = false;

if (room === 'dining room') {
    weapon = 'knife';
    if (suspect === 'Mrs. Olives')
        solved = true;
} 
else if (room === 'library') {
    weapon = 'trophy';
    if (suspect === 'Mrs. Richards')
        solved = true;
} 
else if (room === 'billiards room') {
    weapon = 'pool stick';
    if (suspect === 'Mr. Parker')
        solved = true;
} 
else if (room === 'kitchen') {
    weapon = 'poison';
    if (suspect === 'Mr. Smith')
        solved = true;
}

if (solved) {
	console.log(suspect + " did it in the "+ room +" with the "+weapon+"!");
}


//ATM exercise

var balance = 325.00;
var checkBalance = true;
var isActive = false;

if (checkBalance === true){
    if (isActive === true && balance > 0)
        console.log('Your balance is $' + balance.toFixed(2) + '.');
    else if (isActive === true && balance === 0)
        console.log('Your account is empty.');
    else if (isActive === true && balance < 0)
        console.log('Your balance is negative. \nPlease contact bank.');
    else if (isActive === false)
        console.log('Your account is no longer active.');
} else {
    console.log('Thank you. Have a nice day!')
}

//Ice-cream exercise

var flavor = '';
var vessel = '';
var toppings = '';
var message = 'I\'d like two scoops of ' + flavor +' ice cream in a ' + vessel + ' with ' + toppings + '.'

if ((flavor === 'vanilla' || flavor === 'chocolate') && (vessel === 'cone' || vessel === 'bowl') && (toppings === 'sprinkles' || toppings === 'peanuts')) {
    console.log(message);
} 

//Sizes of T-Shirt
var shirtWidth = 18;
var shirtLength = 28;
var shirtSleeve = 8.13;

var size = '';

if ((shirtWidth >= 18 && shirtWidth < 20) && (shirtLength >= 28 && shirtLength < 29) && (shirtSleeve >= 8.13 && shirtSleeve < 8.38)) {
    size = 'S';
} else if ((shirtWidth >= 20 && shirtWidth < 22) && (shirtLength >= 29 && shirtLength < 30) && (shirtSleeve >= 8.38 && shirtSleeve < 8.63)) {
    size = 'M';
} else if ((shirtWidth >= 22 && shirtWidth < 24) && (shirtLength >= 30 && shirtLength < 31) && (shirtSleeve >= 8.63 && shirtSleeve < 8.88)) {
    size = 'L';
} else if ((shirtWidth >= 24 && shirtWidth < 26) && (shirtLength >= 31 && shirtLength < 33) && (shirtSleeve >= 8.88 && shirtSleeve < 9.63)) {
    size = 'XL';
} else if ((shirtWidth >= 26 && shirtWidth < 28) && (shirtLength >= 33 && shirtLength < 34) && (shirtSleeve >= 9.63 && shirtSleeve < 10.13)) {
    size = '2XL';
} else if ((shirtWidth === 28) && (shirtLength === 34) && (shirtSleeve === 10.13)) {
    size = '3XL';
} else {
    size = 'NA';
}

console.log(size)

/* Falsy values - elements that evaluates false in a boolean context
1. boolean value false
2. null
3. 0
4. ''
5. NaN
*/

//Food chain exercise

var eatsPlants = true;
var eatsAnimals = true;

var category = eatsPlants ? (eatsAnimals ? 'omnivore' : 'herbivore') : (eatsAnimals ? 'carnivore' : 'undefined');

console.log(category);

/* Switch statement:
swith (variable) {
    case [value]:
        do;
        break(if you want to stop in this case);
    case [value]:
        do;
        break(if you want to stop in this case);
    ...
    case [value]:
        do;
        (doesn't need break, cause is the last one);
}

The "falling-through" behavior:
If you don't use break statement, your code will run not only the case that matches the condition,
but also the following ones. 

You can also create one 'do' for more then one value:
    case 1:
    case 2:
    case 3:
        do ...;
    case 4:
    case 5:
        do ...;

You can add a default case: it will be executed when none of the values match (like else)
*/

// Salary/Completed Education exercise


var education = '';
var salary = 0;

switch (education) {
    case 'no high school diploma':
        salary = 25636;
        break;
    case 'a high school diploma':
        salary = 35256;
        break;
    case 'an Associate\'s degree':
        salary = 41496;
        break;
    case 'a Bachelor\'s degree':
        salary = 59124;
        break;
    case 'a Master\'s degree':
        salary = 69732;
        break;
    case 'a Professional degree':
        salary = 89960;
        break;
    case 'a Doctoral degree':
        salary = 84396;
        break;
}

console.log('In 2015, a person with ' + education + ' earned an average of $' + salary.toLocaleString('en-US') + '/year.');

/*
LOOPS
*/

var i = 1

while (x <= 10000) {
    console.log(i)
    i += 1
}

//JuliaJames exercise

var x = 1;

while (x <= 20) {
    if (x % 3 === 0)
        if (x % 5 === 0)
            console.log('JuliaJames')
        else
            console.log('Julia')
    else if (x % 5 === 0)
        console.log('James')
    else 
        console.log(x)
    x += 1
}


// Counting down the bottles

var num = 99;

while (num > 0) {
    if (num === 2) 
        console.log(num + ' bottles of juice on the wall! ' + num + ' bottles of juice! Take one down, pass it around... ' + (num - 1) + ' bottle of juice on the wall!');
    else if (num === 1) 
        console.log(num + ' bottle of juice on the wall! ' + num + ' bottle of juice! Take one down, pass it around... ' + (num - 1) + ' bottles of juice on the wall!');
    else
        console.log(num + ' bottles of juice on the wall! ' + num + ' bottles of juice! Take one down, pass it around... ' + (num - 1) + ' bottles of juice on the wall!');
    num -= 1
}


// NASA counting down

var seconds = 60

while (seconds >= 0) {
    if (seconds === 50)
        console.log('Orbiter transfers from ground to internal power')
    else if (seconds === 31)
        console.log('Ground launch sequencer is go for auto sequence start')
    else if (seconds === 16)
        console.log('Activate launch pad sound suppression system')
    else if (seconds === 10)
        console.log('Activate main engine hydrogen burnoff system')
    else if (seconds === 6)
        console.log('Main engine start')
    else if (seconds === 0)
        console.log('Solid rocket booster ignition and liftoff!')
    else 
        console.log('T-' + seconds + ' seconds')
    seconds -= 1
} 

/* 
FOR LOOP
for (start; stop; step){
    do
}
*/

// Factorial 12
var solution = 12

for (var i = 11; i > 0; i--) {
    solution =  solution * i; 
}

console.log(solution)

/*
Declaring variables
let - New way to declare the variable - CAN CHANGE - any scope (Global, Local, Block)
var - Old way to declare the variable - CAN CHANGE - just for Global or Local
const - New way to declare the variable - IT WILL NOT CHANGE - any scope (Global, Local, Block)



