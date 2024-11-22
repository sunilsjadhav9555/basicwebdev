 /* 
 function sayHello (){
    console.log("i would like to say hello");
}

setTimeout ( () => {
    sayHello ();

}, 4000);

console.log("coffee with code");

for (let i = 0; i < 10 ; i++) {
    console.log(i);
    
    
}


clouser---
function outer () {
    let counter = 4;
    return function () {
        counter++;
        return counter;
    };
}
let increment = outer ();
console.log(increment ());
console.log(increment ());
console.log(increment ());




promese----
function fetchData ()
{
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            let success = true;
            if (success) {
                resolve("data fetch successfully");

            }else{
                reject("error fetching data");
            }
        }, 3000);
    });
}

fetchData ().then((data) => {
    console.log(data);
    return data.tolowercase();
}).then((value) => {
    console.log(value);
}).catch((error) => console.log(error));



prototypalinheritance---
function person (name) {
    this.name = name;
}

person.prototype.greet = function () {
    console.log(`hello, my name is ${this.name}`);
};

let sunil = new person("sunil");
sunil.greet();


thiscontext---
const person = {
    name: "sunil",
    greet() {
        console.log(`hi i am ${this.name}`);
    },
};
person.greet();
const greetFunction = person.greet;
greetFunction();
const boundGreet = person.greet.bind({
    name:"john"
});
boundGreet();


asynawai---
function fetchuserdata (){
    return new Promise ((resolve, reject) => {
        setTimeout ( () => {
            reject({ name:"Coffeecode",url:"https://chaicode.com"});
        }, 3000);
    });
}
 async function getUserData (){
    try{
        console.log("fetching user data...");
        const userData = await fetchuserdata();
        console.log("user data fetched successfully");
        console.log("user data:",userData);
    } catch (error) {
        console.log("error fetching data",error);
    }
 }
 getUserData();

 

 function fetchPostData () {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("post data fetched");
        },2000);
    });
 }

 function fetchCommentData () {
    return new Promise((resolve) => {
        setTimeout (() => {
            resolve("coment data fetched");
        }, 3000);
    });
 }

 async function getBlogData(){
    try{
        console.log("fetching blog data");
        const [postData, commentData] = await Promise.all([
            fetchPostData(),
            fetchCommentData(),
        ]);
        console.log(postData);
        console.log(commentData);
        console.log("fetch complete");
    } catch (error){
        console.log("error fetching blog data", error);
    }
 }
 getBlogData();


 function* numberGenerator () {
    yield 1;
    yield 2;
    yield 3;
 }

 let gen = numberGenerator ();
 let genTwo = numberGenerator();

 console.log(gen.next().value);
 console.log(gen.next().value);
 console.log(gen.next().value);
 console.log(gen.next().value);
 console.log(genTwo.next().value);
 console.log(genTwo.next().value);
 
 
 export function add(a,b) {
    return a + b;
 }

export function subtract (a, b){
    return a - b;
}

export default function multiply(a, b) {
    return a * b;
}
 */
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
 function multiply(a, b) {
    return a * b;
 }
 
 module.exports = {
    add,
    subtract,
    multiply,
 };
 