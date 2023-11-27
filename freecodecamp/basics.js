//inline comment

/* multi
line
comment
*/

//Declare
var ourName;

//Store value
myVariable = 5;
var myVar;
myVar = 5;

//Assigning the value
var myVar;
myVar = 5;
var myNum;
myNum = myVar;
// console.log(myNum)

//Initialize the variable
var myNumber = 9;

//Declare strings
var myName = 'My name is Manova'
// console.log(myName)

//concat
var a = 5
var b  = 10
var c = "I am a"

// console.log(a+1)
// console.log(b+5)
// console.log(c+" String!")

// ***** always decalre variable name in camelCase

//Difference between let and var
//the var keyword is that you can easily overwrite variable declarations:
var myFirstName = "Manova"
var myFirstName = "CM"
// console.log(myFirstName)

// let myNameBe = "Manova"
// let myNameBe = "CM"
// console.log(myNameBe)
//SyntaxError: Identifier 'myNameBe' has already been declared

//const is immutable or readonly cannot change the valus once assigned

const input = 'hai '
//input = 'hello' //Uncaught TypeError TypeError: Assignment to constant variable.

//Addition
const numA = 10
const numB = 10
// console.log('Addition = ', numA + numB) 
// console.log('Addition = ' + numA + numB) // Addition = 1010
// console.log('Subtraction = ', numA - numB) 
// console.log('multiplication = ', numA * numB)
// console.log('divide = ', numA/numB) //quotiant
// console.log('remainder = ', numA%numB)

//out put for above
/*
Addition =  20
Addition = 1010
Subtraction =  0
multiplication =  100
divide =  1 
remainder =  0
*/

/* ***************************** */
//increment
var numC = 10
numC++
// console.log('increment = ', numC) //11
//decrement
var numD = 9
numD--
// console.log('decrement = ', numD) //8


/* ***************************** */
//compond + - *
let incA = 5
incA += 1
// console.log(incA) //5
let incB = 5
incB -= 1
// console.log(incB) //4
let incC = 5
incC  *= 2
// console.log(incC) // 10
let incD = 10
incD /= 2
// console.log(incD)

/* ******************************* */
//Escaping Literal Quotes in Strings

const myStr = 'My name is \'Manova\''
// console.log(myStr)
const myStr1 = "I am a \"software QA engineer\"."
// console.log(myStr1)
console.log(myStr,myStr1)
