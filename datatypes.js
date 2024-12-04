"use strict"; //treat all js code as newer version
// code readability should be high
//alert ("hello") we are using node js not a browser.
/*console.log("sunil");
console.log(3 + 3);
let age = 24;
let city = "pune"
let isloggedIn = false
console.log(typeof age);
console.log(typeof city);
console.log(typeof null);// null is object in javascript -standalone value
console.log(typeof undefined)*/
/*
primitive data types
string
number
boolean
null
undefined
symbol
BigInt

reference type / non primitive data types
array
objects
functions



const score = 100
const scoreValue = 100.3
const islodgedIn = false
const outsideTemp = null
let userEmail;*/
const id = Symbol('124')
const anotherId = Symbol('123')
console.log(id == anotherId);
const bigNumber = 4677654356786n
console.log(bigNumber);
const heroes = ["shakti","nag","doga"];
let myobj = {
     name:"sh",
     age :22
}
const myfunction = function(){
    console.log("hello");
}
console.log(typeof myfunction);