const accountid = 1234
let accountemail = "shkl@gmai.com"
var accountnum = 12345
accountcity = "pune"
let accountstate = "mh"
console.table([ accountid,accountemail,accountnum,accountcity,accountstate])


let score ="sunil"
console.log(typeof score)
let valueInNumber = Number(score)
console.log(typeof valueInNumber);
 let someNumber = 34
 let stringNumber = String(someNumber)
 console.log(stringNumber);
 console.log(typeof someNumber);
 let value = 3
 let negValue = -value
 console.log(negValue);
 let str1 = "sj"
 let str2 = "js"
 let str3 = str1 + str2
 console.log(str3);
 
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);


console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

console.log(2 === 2);


const name = "sunil"
const repoCount = 50
//console.log(name + " " + repoCount + " value");
console.log(`hello my name is ${name} repocount is ${repoCount}`);
const gamename = new String('sunil-js-sam')
console.log(gamename[0]);
console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(2));
console.log(gamename.indexOf('j'));

const newString = gamename.substring (0,4)
console.log(newString);

const anotherString = gamename.slice(-8,4)
console.log(anotherString);
console.log(gamename);

const newStringOne = "  sunil  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://sunillsj.com/hitesh20%ch"
console.log(url.replace('20%','-'));
console.log(url.includes('sam'));
console.log(gamename.split('*'));



const score = 400
console.log(score);
 const balance = new Number(100)
 console.log(balance);
 console.log(balance.toString().length);
 console.log(balance.toFixed(1));
 const othernumber = 123.8966
 console.log(othernumber.toPrecision(5));
 const hundreds = 1000000
 console.log(hundreds.toLocaleString('en-IN'));

 console.log(Math);
 console.log(Math.abs( -4));
 console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4,5,2,8));
console.log(Math.max(3,9,5,7,2));

console.log(Math.random());
console.log(( Math.random()*10 )+ 1);
console.log(Math.floor(Math.random()*10) + 1);
const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)

let mydate = new Date()
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleString());
console.log(typeof mydate); 

let mycrearteddate = new Date(2023, 0, 23)
console.log(mycrearteddate.toLocaleString());
let mycrearteddate1 = new Date(2023, 0, 23, 5, 3)
console.log(mycrearteddate1.toLocaleString());
let mydate = new Date("05-12-2024")
console.log(mydate.toLocaleString());
let mytimestamp = Date.now()
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay() + 12);


const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp =null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);


const heros =["shakti","naga","doga"];
console.log(heros);
let myobj = {
    name:"sunil",
    age:24
}
console.log(myobj);


const myFunction = function(){
    console.log("hello world");
}

myFunction()

const myArr = [1,2,3,4,5,6,7]
const myhero = ["shakti","naga","doga"]
const myArr2 = new Array(1,2,3,4)
console.log(myArr[1]);
myArr.push(8)
console.log(myArr);
myArr.pop(8)
console.log(myArr);
myArr.unshift(11)
console.log(myArr);
myArr.shift(11)
console.log(myArr);
console.log(myArr.includes(4));
console.log(myArr.indexOf(6));
const newArr = myArr.join()
console.log(myArr);
console.log(newArr);

const myArr = [1,2,3,4,5,6,7]
console.log("A",myArr);
const myn1 = myArr.slice(1, 3)
console.log(myn1);
console.log("B",myArr);
const myn2 = myArr.splice(1, 3)
console.log(myn2);
console.log("C" , myArr);


const marvel_heros = ["thor","ironman","spiderman"]
const dc_heros =["superman","flash","batman"]
marvel_heros.push(dc_heros)
//console.log(marvel_heros);
//console.log(marvel_heros[3][1]);
const allHeros = marvel_heros.concat(dc_heros)
//console.log(allHeros);
const all_new_heros = [...allHeros,...dc_heros]
console.log(all_new_heros);


const another_array = [1,2,3, [4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);
console.log(Array.isArray("hitesh"));
console.log(Array.from("Hitesh"));
console.log(Array.from({name: "hitesh"})); //give the empty array

let score1 =100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));


const mySym = Symbol("key1")
const JsUser = {
    name: "Hitesh",
    "full name":"sunil sunil",
    [mySym]: "mykey1",
    age:18,
    location: "jaipur",
    email:"sunil@google.com",
    isLoggedIn: false,
    lastlogingdays:["monday","saturday"]

}

console.log(JsUser["full name"]);
console.log(JsUser.email);
console.log(JsUser[mySym]);
JsUser.email = "jadhav@google.com"
Object.freeze.email
JsUser.email = "sam@google.com"
console.log(JsUser);


JsUser.greeting = function(){
    console.log("hello js user");
}
JsUser.greetingtwo = function (){
    console.log(`hello js user , ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());


const tinderuser = {
    id:"123abc",
    name:"sam",
    isLoggedIn :false
    
}
console.log(tinderuser);

const regularUser = {
    email:"sam@gmail.com",
    fullname:{
        userfullname:{
            firstname:"sam",
            lastname:"danny"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);

const obj1 ={1:"a", 2: "b"}
const obj2 = {3:"a", 4: "b"}
const obj3 = {5: "a",6: "b"}
//const obj4 = {obj1, obj2,obj3}
//const obj4 = Object.assign({}, obj1, obj2, obj3)
const obj4 ={...obj1,...obj2,...obj3}
console.log(obj4);


const users = [

    {
        id:1,
        email:"hd@gmail.com"
    },
    {
        id:1,
        email: "d@gmail.com"
    },
    {
        id:1,
        email: "d@gmail.com"
    },
]
users[1].email

const tinderuser = {
    id:"123abc",
    name:"sam",
    isLoggedIn :false
    
}
console.log(tinderuser);
console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));

const course = {
    coursename:" js ",
    price:"999",
    courseinstructor: "sunil"

}
course.courseinstructor
const {courseinstructor: instructor} = course
console.log(instructor);



function sayMyName(){
    console.log("s");
    console.log("u");
    console.log("n");
    console.log("i");
    console.log("l");
}
sayMyName()

function addtwo (num1, num2)
{
    //let result = num1 + num2
    //return result
     return num1 + num2
}
const result = addtwo (5, 6)
console.log("result: ", result);



function loguser (username = "sam"){
    if(!username){
        console.log("please enter a user name");
        return
    }
    return `${username} just logged in`
}

console.log(loguser("sanil"));



function calculateCartPrice(val1,num1) {
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    username: "sunil",
    prices:199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.prices}`);
}
handleObject(user)

const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));

console.log(addone(5));

function addone(num){
    return num + 1 
}
addone(5)

const addtwo = function (num){
    return num + 2
}



const user = {
    username: "sunil",
    price:999,

    welcome: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}
user.welcome()
user.username = "dany"
user.welcome()
console.log(this);


function champ(){
    let username ="sunil"
    console.log(this);
}
champ()
const champ1 = () => {
    let username = "sandy"
    console.log(this);
}
champ1()



const addTwo = (num1, num2 ) => num1 + num2
console.log(addTwo(3, 6));



// Immediately invoked function Expressions(iife)

(function chai (){
    console.log(`db connected`);
}) ();

( (name) => {
    console.log(`db connected two ${name}`);
}) ('sunil')