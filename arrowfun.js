/*const user = {
    username:"sunil",
    price:999,

    welcomeMessage: function(){
        console.log((`${this.username},welcome to website`));
        console.log(this);
    }
}
user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()
console.log(this);

function chai(){
    console.log(this)
}
chai()
const chai = () => {
    let username = "sunil"
    console.log(this);
}
chai()

const addtwo = (num1, num2) => {
    return num1 + num2
}
console.log(addtwo(4, 5));

const addtwo = (num1, num2) =>  num1 + num2

console.log(addtwo(4, 5));*/

const addtwo = (num1, num2) =>  (num1 + num2)

console.log(addtwo(4, 5));


