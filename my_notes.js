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