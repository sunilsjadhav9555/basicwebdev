/*
// variables - const, let, var.

const accountId = 100;
console.log(accountId);

let accountEmail = "sunilsjadhav9555@gmail.com";
console.log(accountEmail);

var accountPassword = "123456";
console.log(accountPassword);

acountCity = "pune";
console.log(typeof (acountCity));

console.table([accountId,accountEmail,accountPassword,acountCity])

// var is not used due to the issue block scope or functional scope
*/

/*
// data types

"use strict"; // treat all code newer version automatically goes strict mode newer version

// alert is not supported in node js it used in browser 

let name = "Sunil";
let age = 25;
let isLoggedIn = true;

//number- 2 to power 53
//bigint
// string = ""
//boolean = true or false
//null - standalone value -typeof null is object
//undefined - value is not define
//symbol - for uniqness find 

// object

console.log(typeof undefined); // undefined
console.log(typeof null); // object
*/

/*

let score = 30; // number
console.log(typeof score);

let score1 = "30"; // string
console.log(typeof score1);

let valueInNumber = Number(score1);
console.log(typeof valueInNumber); //number

let score2 = "30ab";
console.log( typeof score2);

let value1 = Number(score2);
console.log(typeof value1);
console.log(value1); // it says NaN number is not converted

// "33" => 33
//"30abc" => NaN but type is number
// true => 1; false => 0

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(isLoggedIn);

// 1 => true; 0 => false
// "" => false
// "sunil" => true

let someNumber = 33
let StringNumber = String(someNumber)
console.log(StringNumber);
console.log(typeof StringNumber); // number is converted in string 


*/

/*
let value = 3
let negValue = -value
console.log(negValue);

console.log(2 + 2);

let str1 = "Hi";
let str2 = " Sunil";
let str3 = str1 + str2;
console.log(str3);
console.log(typeof str3);

console.log("1" + 2); // 12 converted to the string
console.log(2 + "2"); // 22

console.log("1" + 2 + 2); // 122

console.log(1  + 2 + "3"); //33 add the 1 + 2 Then it gives add 3 display 33

console.log(+true); //1
console.log(+"");//0

let x = 4;
const y  = x++;
console.log(`x=${x} y=${y}`);// x=5 y=4

let a = 4;
let b = ++a;
console.log(`a=${a} b=${b}`);//a=5 b=5
*/

/*
// comparison

console.log(2 > 1); //true
console.log(2 >= 1); //true

console.log("3" > 1);// true string converted to the number
console.log("03" > 1);// true 

console.log(null > 0);//false
console.log(null == 0);//false
console.log(null >= 0);//true

console.log(undefined == 0);//false
console.log(undefined > 0);//false
console.log(undefined < 0);//false

// === strict check
console.log("2" === 2); //false

*/

//primitive and non primitive data types

//primitive
//string,Number, Boolean,null,undefined,symbol,BigInt

//reference type or non primitive data typs
// Arrays, Objects,Functions

/*
const score = 100;
const scoreValue = 100.3;
const isLoggedIn = false;
const otsideTemp = null;
let userEmail;
const id = Symbol("1234");
console.log(typeof id);

const anotherId = Symbol("1234");
console.log(anotherId);
console.log(id === anotherId); // false


const heros = ["shakti", "nagraj","spider"];
console.log(heros);

let myObj = {
    name:"sunil",
    lastName:"jadhav",
    age:25,
    developer:"FrontEnd",
}

console.log(myObj);

const  myfunction = function(){

    console.log("hi");
    
}
myfunction()

console.log(typeof myfunction);// function

*/

//memory works in js
//stack memory-primitive types
//heap memory- non primitive types

// strings
/*

const name = "sunil ";
const repoCount = 50;
console.log(name + repoCount + " ssj");
console.log(`name=${name} repocont=${repoCount}`);

const gameName = new String('sunil');

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));

console.log(gameName.indexOf('n'));

const newString = gameName.substring(0,3);
console.log(newString);
const anotherString = gameName.slice(-5,2);
console.log(anotherString);
 
//slice using the negative value is allow

const newStringOne = "   sunil   ";
console.log(newStringOne.trim());

console.log(gameName.split('-'));

*/

/*
//numbers and maths

const score = 400;
console.log(score);
console.log(typeof score);


const balance = new Number(199);
console.log(balance);
console.log(typeof score);

console.log(balance.toString().length);
console.log(typeof balance);

console.log(balance.toFixed(2));

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(3));

const hundreds = 10000;
console.log(hundreds.toLocaleString('en-IN'));
*/

/*
//maths

console.log(Math); //objects

console.log(Math.abs(-4));
console.log(Math.round(4.5));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4,6,7,8));
console.log(Math.max(6,8,3,9));

console.log(Math.floor(Math.random()*10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min)

//math.random give the value in 0 and 1
*/

/*
//dates

let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toTimeString());

console.log(typeof myDate);

let myCreatedDate = new Date(2025, 0, 6, 5, 3);
console.log(myCreatedDate.toLocaleString());


let mydate = new Date("2025-01-06");
console.log(mydate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());


console.log(`${newDate.getDay()}`);

newDate.toLocaleString('default',{
    weekday:"long",
})

*/

/*
//Arrays
//shallow copy of an object is a copy whoose properties share the same references as those of the source object from which copy was made

const myArr = [0,1,2,3,4,5];
//console.log(myArr[4]);

myArr.push(6);
//console.log(myArr);
myArr.shift(2);
//console.log(myArr);
myArr.unshift(5);
//console.log(myArr);
myArr.pop();
//console.log(myArr);


//console.log(myArr.includes(9));
//console.log(myArr);

const newArr = myArr.join();
//console.log(myArr);
//console.log(typeof newArr);// change the arrays into the string


//slice and splice

//slice copy array and original array is not cut 
//splice copy a arrays into the original arrays and cut into that arrays

// console.log("A",myArr);
// const myn1 = myArr.slice(0,3);
// console.log(myn1);
// console.log("B",myArr);


// console.log("A", myArr);
// const myn2 = myArr.splice(0, 3);
// console.log(myn2);
// console.log("B", myArr);



const marvelHeroes = ["thor","ironman","spidrman"];
const dcHeroes = ["superman","flas","batman"];


// marvelHeroes.push(dcHeroes);
// console.log(marvelHeroes);

const newhero = marvelHeroes.concat(dcHeroes);
console.log(newhero);//merge 2 arrays properly

//spread operator copy the element or merge the arrays without using the concat 
const all_new_heroes = [...marvelHeroes,...dcHeroes]
console.log(all_new_heroes);

const anotherArr = [1,2,3,[4,5,6],7[6,7,[4,5]]];
const realanotherarr = anotherArr.flat(Infinity);
console.log(realanotherarr);

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3));

*/

/*
//objects
//singleton-made with constructor

//object literals
const JsUser = {
  name: "sunil",
  lastname: "jadhav",
  Education: "graduate",
  location:"pune",

};

console.log(JsUser.name);

JsUser.name = "sjsjs"
console.log(JsUser);


const tinder = new Object() // singleton object

const tinderUser = {} //non singleton object

tinderUser.id = "123abc";
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser  = {
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"sunil",
            lastname:"jadhav",
        }
    }
}

console.log(regularUser.fullname);

const obj1 ={1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
const obj3 = {...obj1,...obj2 }

 //const obj3 = Object.assign(obj1,obj2)
 console.log(obj3);
 

const course = {
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"sunil"
}

// const {courseInstructor} = course;

// console.log(courseInstructor);

const { courseInstructor: instructor } = course;
console.log(instructor);

*/
/*
// functions

// function sayMyName () {
//     console.log("s");
//      console.log("u");
//       console.log("n");
//        console.log("i");
//         console.log("l");
    
// }
// sayMyName()

// function addTwoNum(number1, number2){
//    console.log( number1 + number2);
   
// }
// addTwoNum(3,3)

function addTwoNum (number1, number2){
    let result = number1 + number2;
    return result
}
 const result = addTwoNum(3,3)
 //console.log("Result:",result);

 function loginUserMessage(username){

           if(username === undefined){
            console.log("please enter the username");
            return
            
           }
        return `${username} just Logged in`;
 }
//console.log(loginUserMessage("sunil"));
  console.log(loginUserMessage());
 
  


function calculateCartPrice(val1, val2, ...num1)
{
    return num1
}
console.log(calculateCartPrice(200,400,500,2000));


const user = {
    username:"sunil",
    price:199
}
function handleObject(anyobject)
{
 console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
 
}
handleObject(user)

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
*/

/*
//scope

function one (){
    const username = "sunil";
    function two(){
        const website = " youtube";
      //  console.log(username);
         //console.log(website); 
    }
   
    two()
}
one()

if(true){
    const username = "sunil"
    if(username === "sunil"){
        const website = "youtube"
        //console.log(username + website);
    
    }
    //console.log(website);
}
//console.log(username);

//console.log(addone(5));//allow before use
function addone(num){
    return num + 1
}

//console.log(addtwo(5));
// error function declare in variable not allow to hoisting
const addtwo = function(num){
    return num + 2

}

//this keyword tells current context
const user ={
    username:"sunil",
    price:999,
    welcomeMessage: function() {
        console.log(`${this.username},welcome to the website`);
        //console.log(this);
        
        
    }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);//{} give empty perthesis

function one () {

    let username = "sunil"
    //console.log(this.username);  
}
one()


const coffee = () => {
  let username = "sunil";
  console.log(this);//empty perthesis
}
coffee();

// const addtwo1 = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addtwo1(3,4));

const addtwo1 = (num1, num2) => num1 + num2;
console.log(addtwo1(3, 4)); // different method to run 

*/

//IIFE immediately invoked function expressions(iife)

(function coffee() {
  console.log(`db connected`);
})();
//()()// global scope pollution remove using IIFE

// execution context callstack
