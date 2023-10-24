///////////////////////////////////////
// VARIABLE DATATYPES
//////////////////////////////////////

// A. Q + A
// 1. How do we assign a value to a variable?
// The assignment ( = ) operator is used to assign a value to a variable or property.
// 2. How do we change the value of a variable?
// by using the name of variable as a parameter and the parameter value is set to the new variable.
// 3. How do we assign an existing variable to a new variable?
// you can assign the value of that variable to another variable using the assignment operator.
// 4. Remind me, what are declare, assign, and define?
// You declare a JavaScript variable with the let keyword:
// To assign a value to the variable, use the equal sign:
// to define a variable use const or let keyword
// 5. What is pseudocoding and why should you do it?
 // A way of programming that does not require any strict programming language syntax or underlying technology considerations. It is used for creating an outline or a rough draft of a program.
// 6. What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
    // maybe about 85%

//////////////////////////////
// STRINGS
/////////////////////////////

// 1. Create a variable called firstVariable
// 2. Assign it the value of the string "Hello World"
// 3. Change the value of this variable to some number
// 4. Store the value of firstVariable in a new variable called secondVariable
// 5. Change the value of secondVariableto any string.
// 6. What is the value of firstVariable?
// 7. Create a variable called yourName and set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourNameso that it returns a new string with them concatenated.

let firstVariable = ("hello World")
let variable = 10
let secondVariable = ("mynameis")
let yourName = ("Dre")
let finalwords = (firstVariable +  secondVariable +  yourName)
// console.log(firstVariable)
// console.log(variable)
// console.log(yourName)
// console.log(secondVariable)
// console.log(finalwords)

//////////////////////
// Booleans
/////////////////////
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

// console.log(a < b);
// console.log(c > d);
// console.log('Kevin' >= 'Kevin');
// // FOR THE NEXT TWO, USE ONLY && OR ||
// console.log(true || false);
// console.log(false && false && false && false && false || true);
// console.log(false <= false)
// console.log(e >= 'Kevin');
// console.log(a <= b <= c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
// console.log(a >= a <= d); // note: the answer is a simple arithmetic equation, not something "weird"
// console.log(48 >='48');

////////////////////////////
// THE FARM
// Declare a variable animal. Set it to be either "cow" or something else
// Write code that will print out "mooooo" if the it is equal to cow
// Change your code so that if the variable animalis anything other than a cow, it will print "Hey! You're not a cow."
// Commit

// let animal = "";
// if (animal = "cow"){
// 	console.log("mooooo");
// } else {
// 	console.log("Hey! You're not a cow."); /// NEED WORK STILL
// }
// animal = "cow";
// animal = "dog";            
// console.log("cow")

///////////////////////
// DRIVERS ED
//////////////////////
// 1. Make a variable that holds a person's age; be semantic
// 2. Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."

// let age = 11; 
// //check if over 16
// if(age >= 16) {
// //you are of age
// console.log("Here are the keys")
// } else {
//     console.log("Sorry you're too young!");
// }

//////////////////
// LOOPS
/////////////////
// 1. Write a loop that will print out all the numbers from 0 to 10, inclusive
// 2. Write a loop that will print out all the numbers from 10 up to and including 400
// 3. Write a loop that will print out every third number starting with 12 and going no higher than 4000

// for (let i = 0; i <= 10; i++){
//         console.log(i)
// }

// for(let i = 10; i <= 400; i++){
//     console.log(i)
// }

// for(let i = 12; i <= 4000; i++){
//     if( i % 3 == 0) {
//         console.log(i)
//     }
// }

////////////////////
// GET EVEN
///////////////////
// 1. Print out the numbers that are within the range of 1 - 100
// 2. Adjust your code to add a message next to even numbers only that says: "<-- is an even number"

// for (let i = 0; i <= 100; i++){
//     if (i % 2 === 0) {
//      console.log(i + ' is even');
//     }
//     }

// for (let i = 0; i <= 100; i++) {
//     console.log(i)
//     if (i % 2 == 0) {
//         console.log('is even');
// }
// }

///////////////////
// GIVE ME FIVE
//////////////////
//For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five
// for (let i = 1; i <= 100; i++){
//     if (i % 5 == 0)
        // console.log("i found a " + i + " High Five !");
//    else if (i % 3 == 0) console.log("three is a crowd"); ///// NEEDS WORK
//    else console.log(i); 
//}

////////////////////////
// SAVINGS ACCOUNT
///////////////////////
// 1. Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
// 2. Check your work! Your bank_account should have $55 in it.
// You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
// Check your work! Your bank_account should have $10,100 in it.

/////////////////////////
// SAVINGS ACCOUNT
////////////////////////
// 1.Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
// 2. Check your work! Your bank_account should have $55 in it.
// You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
// Check your work! Your bank_account should have $10,100 in it.

// let bank_account = 
//     let total = 0;
//       for(let i = 0; i <= 10; i++){  ////// NEEDS WORK
//         total += i;
//       }
//       console.log(total)

////////////////////
// ARRAYS & CONTROL FLOW
///////////////////
// 1. What are the things in an array called?
// elements
// 2. Do Arrays guarantee those things will be in order?
// no specific order (arrange how you want)
// 3. What real-life thing could you model with an array?
//    a carton of eggs

//// Easy Does It /////
// Create an array that contains three quotes and store it in a variable called quotes
//  let quotes = ["Sia Collection", "Humble", "Nike"]
//  console.log(quotes)

////// Accessing elements //////
// Given the following array 
const randomThings = [1, 10, "Hello", true]
// How do you access the 1st element in the array?
// console.log(randomThings[0])
// Change the value of "Hello"to "World"
randomThings.splice(2,2, "world")
// Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
// console.log(randomThings)

///// Change values
// Given the following array 
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
// What would you write to access the 3rd element of the array?
// console.log(ourClass[2])
// Change the value of "Github" to "Octocat"
ourClass.splice(4,4, "octocat") 
// console.log(ourClass)
// Add a new element, "Cloud City" to the array
ourClass.unshift("cloud city")
// console.log(ourClass)

///////MIX IT UP
// Given the following
 const myArray = [5, 10, 500, 20]
// Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.
myArray.push("Aegon", "Pizza")
// console.log(myArray)
// Remove the 5from the beginning of the array.
myArray.shift([0])
// console.log(myArray)
// Add the string "Bob Marley"to the beginning of the array.
myArray.unshift("Bob Marley")
// console.log(myArray)
// Remove the string of your choice from the end of the array.
myArray.splice(4,1)
// console.log(myArray)
// Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse()method return anything?
myArray.reverse()
// console.log(myArray)
