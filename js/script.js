//EXERCISE 1: The Fortune Teller
//Why pay a fortune teller when you can just program your fortune yourself? Store the following into variables: job title, geographic location, annual salary, company name. Output your fortune to the console like so: "You will be a X in Y, making $N for Z."
let jobTitle = `Food-truck-owner`
let myFutureCity = `Toronto`
let annualSalary = 150000
let monthlySalary = annualSalary / 12
let companyName = `Benny-bbq`


var first =`You will be a ${jobTitle} in ${myFutureCity}, making $${annualSalary} ($${monthlySalary} per month) for ${companyName}.`
var output = document.getElementById("first");
output.innerHTML = first
//EXERCISE 2: The Age Calculator
//Forgot how old someone is? Calculate it! Store the current year in a variable. Store their birth year in a variable. Calculate their age based on the stored values. Output them to the console like so: "They are NN years old.", substituting the values.
let currentYear = 2020
let birthYear = 2000

var second =`They are ${currentYear - birthYear} years old`
var output = document.getElementById("second");
output.innerHTML = second

//EXERCISE 3: The Lifetime Supply Calculator
//Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more! Store your current age into a variable. Store a maximum age into a variable. Store an estimated amount per day (as a number). Calculate how many you would eat total for the rest of your life. Output the result to the console like so: "You will need NN to last you until the ripe old age of X".
let maxAge = 100
let currentAge = 20
let perDay = 4

var third = (`You will need ${80 * 4} to last you until the ripe old age of ${maxAge}.`)
var output = document.getElementById("third");
output.innerHTML = third

//EXERCISE 4: The Geometrizer
//Calculate properties of a circle, using the definitions here. Store a radius into a variable. Calculate the circumference based on the radius, and output "The circumference is NN". Calculate the area based on the radius, and output "The area is NN".
let circleRadius = 10
let circumference = 62.8
let circlePie = 3.14

var fourth = (`The circumference is ${10 * 2 * 3.14} and the area is ${10 * 10 * 3.14}`)
var output = document.getElementById("fourth");
output.innerHTML = fourth

//EXERCISE 5: The Temperature Converter
//It's hot out! Let's make a converter based on the steps here. Store a celsius temperature into a variable. Convert it to fahrenheit and output "NN°C is NN°F".  Now store a fahrenheit temperature into a variable. Convert it to celsius and output "NN°F is NN°C."
let Celsius = 35
let Fahrenheit = 86

var fifth = (`Fahrenheit of 86 is ${(5/9) * (86-32)} celsius and 35 celsius is ${35 * 1.8 + 35} Fahrenheit`)
var output = document.getElementById("fifth");
output.innerHTML = fifth

// EXERCISE 1
// Write a function named squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
let currentnumber = 3

var sixth = (`The result of squaring the number 3 is ${Math.pow(3, 2)}`)
var output = document.getElementById("sixth");
output.innerHTML = sixth

// EXERCISE 2
// Write a function named halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
let aNumber = 10
let halfNumber = 2

var seventh = (`Half of 10 is ${aNumber / halfNumber}`)
var output = document.getElementById("seventh");
output.innerHTML = seventh


// EXERCISE 3
// Write a function named percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
let firstNumber = 3
let totalNumber = 6

var eighth = (`${firstNumber} is 50% of ${totalNumber} `)
var output = document.getElementById("eighth");
output.innerHTML = eighth

// EXERCISE 4
// Write a function named areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
//      Bonus: Round the result so there are only two digits after the decimal.
let areaOfCircle = 5

var ninth = (`The area for a circle with radius 5 is ${Math.pow(areaOfCircle,2)*3.14}`)
var output = document.getElementById("ninth");
output.innerHTML = ninth

// EXERCISE 5
// Write a function named runAll that will take one argument (a number) and perform the following operations, using the functions you wrote earlier
//      1. Take half of the number and store the result.
//      2. Square the result of #1 and store that result. 
//      3. Calculate the area of a circle with the result of #2 as the radius.   
//      4. Calculate what percentage that area (#3) is of the squared result (#2).
let totalTotal = 8
let halfTotal = 2
let halfDigit = 4
let radiusCircle = 4
let totalArea = 50.24


var tenth = (`Half of 8 is ${totalTotal / halfTotal}. The result of squaring 4 is ${halfDigit * halfDigit}. Area of a circle with a radius of 4 is ${Math.pow(radiusCircle,2)*3.14}. ${totalTotal} is 6.28% of ${totalArea} `)
var output = document.getElementById("tenth");
output.innerHTML = tenth














    
    
    
   