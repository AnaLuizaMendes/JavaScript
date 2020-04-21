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
*/

// Row and Seat in the Theater

for (var row = 0; row <= 25; row++) {
    for (var seat = 0; seat <= 99; seat++)
        console.log(row + '-' + seat)
}

// Function Definition 

function laugh(num) {
    message = ''
    for (var times = 1; times <= num; times++)
        message = message + 'ha'
    return message + '!'
}

console.log(laugh(7))

// Build a Triangle

function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
      line += "* "
    }
    return line + "\n";
  }

  function buildTriangle(width) {
    var lines = ''
    for (i = 1; i <= width; ++i) {
        lines += makeLine(i)
    }
    return lines
}

console.log(buildTriangle(10));

/* A function expression is stored inside a variable
var buildTriangle = function (width) {
    var lines = ''
    for (i = 1; i <= width; ++i) {
        lines += makeLine(i)
    }
    return lines
}

catSays();
*/

// Arrays!

var donuts = ['glazed', 'chocolate frosted', 'cinnamon', 'sprinkled'];
console.log(donuts[0]);

// If you want to change a value in an array, you can.
// You just need to assign the array index to a different value

donuts[1] = 'white chocolate'


// Examples

var crew = [captain, second, pilot, companion, mercenary, mechanic];
console.log(crew);

/* This way you will print each by each:

for (index = 0; index < crew.length; index++) {
    console.log(crew[index]);
}
*/

// Methods
// Reverse, Sort, Length, Push (add an element in the end of your array) & Pop...

// Shift() and Unshift() - Remove or add elements in the beginning of the array 

/* SPLICE METHOD 
arrayName.splice(arg1, arg2, item1, ..., itemX);
arg1: Mandatory - Start position to add or remove the element(s)
arg2: Optional - Count of elements that will be removed, if any.
item(s): Elements to be added to your array (starting from the position arg1)
*/

var rainbow = ['Red', 'Orange', 'Blackberry', 'Blue'];

rainbow.splice(2, 1, 'Yellow', 'Green')
rainbow.splice(5,0, 'Purple')
console.log(rainbow)

// ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple']

// Harry team exercise - Check if the team counts at least 7 players

var team = ["Oliver Wood",  "George Weasley", "Fred Weasley", "Harry Potter"];
console.log(hasEnoughPlayers(team));

function hasEnoughPlayers(list) {
    if (list.length >= 7)
        return true
    else 
        return false
}

/* 
.forEach(element, index, array)
Method in arrays that allows you to loop over each element
Element: Value in the array ('Oliver Wood')
Index: Position 0 (team[0])
Array: The entire array
*/

var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
    19, 300, 3775, 299, 36, 209, 148, 169, 299,
    6, 109, 20, 58, 139, 59, 3, 1, 139
];

test.forEach(function sum (num, index){
    if (num % 3 === 0)
        test[index] += 100
        
})

console.log(test)

// MAP .map(func) (Creat a new array)

// Tips exercise - Get an array and increase the numbers by 15% each

var bills = [50.23, 19.12, 34.01,
    100.11, 12.15, 9.90, 29.11, 12.99,
    10.00, 99.22, 102.20, 100.10, 6.77, 2.22
];

var totals = bills.map(function tips(num) {
    num = Number((num * 1.15).toFixed(2))
    return num
})

console.log(totals)

// Odd/Even exercise 
// Check if the number is odd or even, and replace the number for the string 'odd' or 'even'

var numbers = [
    [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
    [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
    [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
    [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
    [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
    [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
    [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
    [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
    [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
    [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
];

for (r = 0; r < numbers.length; r++) {
    for (c = 0; c < numbers[r].length; c++) {
        if (numbers[r][c] % 2 === 0)
            numbers[r][c] = 'even';
        else
            numbers[r][c] = 'odd';
    }
}

console.log(numbers);

// OBJECTS - Data structure that store a Data about a particular thing

/*
var object = {
    color: red,
    key: value,
    // Method: How to create
    open: function() {
        if...
        else...
    }
    
};
*/

var breakfast = {
    name: 'The Great Pancake',
    price: 8.95,
    ingredients: ['pancakes', 'syrup', 'strawberries', 'sugar', 'lime']
};

console.log(breakfast)

// Facebook Exercise - Properties and Methods

var facebookProfile = {
    name: 'Ana Luiza',
    friends: 100,
    messages: ['Today I am feeling very positive!'],
    postMessage: function postMessage(message) {
        facebookProfile.messages.push(message);
    }, 
    deleteMessage: function deleteMessage(index) {
        facebookProfile.messages.splice(index,1);
    },
    addFriend: function addFriend() {
        facebookProfile.friends += 1;
    },
    removeFriend: function removeFriend() {
        facebookProfile.friends -= 1;
    }
}

facebookProfile.postMessage('Hello, friend!')
console.log(facebookProfile.messages)

facebookProfile.deleteMessage(1)
console.log(facebookProfile.messages)

facebookProfile.postMessage('Hi Rob!')
console.log(facebookProfile.messages)

facebookProfile.removeFriend
console.log(facebookProfile.friends)

// Using a forEach() in an object

var myDonuts = [
    { type: "Raspberries", cost: 1.50 },
    { type: "White Chocolate", cost: 1.50 },
    { type: "Salted Caramel", cost: 1.99 },
    { type: "Chocolate", cost: 1.00 }
];

donuts.forEach(function(elem, index){
    console.log(myDonuts[index].type +' donuts cost $'+ myDonuts[index].cost +' each.');
})

// Another way

donuts.forEach(function(myDonuts){
    console.log(myDonuts.type +' donuts cost $'+ myDonuts.cost +' each.');
})