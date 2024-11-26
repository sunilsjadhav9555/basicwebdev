/*let computer = { cpu:12};
let lenovo = {
    screen:"hd",
    __proto__:computer,
};
let tomhardware = {};
console.log(`lenovo`,lenovo.__proto__);

let genericCar = { tyres: 4 };

let tesla = {
  driver: "AI",
};

Object.setPrototypeOf(tesla, genericCar);

console.log(`tesla `, Object.getPrototypeOf(tesla));



function person(name, age){
    this.name = name;
    this.age = age;
}
function car(make, model){
    this.make =make;
    this.model = model;
}

let mycar = new car ("toyota","camrry");
console.log(mycar);
let mynewcar = new car("tata","safari");
console.log(mynewcar);


function tea(types){
    this.type = types;
    this.describe = function(){
        return `this is a cup of ${this.type}`;
    };
}
let lemontea = new tea("lemon tea");
console.log(lemontea.describe());



function animal(species){
    this.species = species;
}

animal.prototype.sound = function(){
    return `${this.species} make a sound`;
};

let dog = new animal("dog");
console.log(dog.sound());

let cat = new animal ("cat");
console.log(cat.sound());



function drink (name) {
    if (!new.target){
        throw new Error("Drink must be called with the new keyword");
    }
    this.name = name;
}
 let tea = new drink("tea");
 let coffee = new drink("coffee");
 console.log(tea,coffee);
 

 

 let car = {
    make:"toyota",
    model:"camry",
    year:"2020",
    start:function (){
        return `${this.make} car got started in ${this.year} with the ${this.model}`;
    },
 };
 console.log(car.start());
 
 
 function person(name, age){
    this.name = name;
    this.age = age;
 }

 let john = new person("john doe",20);
 console.log(john.name);
 
 

 Array.prototype.sunil = function (){
    return `custom method ${this}`;
 };

 let myarray = [1,2,3];
 console.log(myarray.sunil());
 let mynewarray = [1,2,3,4,5,6];
 console.log(mynewarray.sunil());
 
 

 class vehicle {
    constructor(make, model){
        this.make = make;
        this.model = model;
    }
    start(){
        return `${this.model} is a car from ${this.make}`;
    }
 }

 class car extends vehicle {
    drive () {
        return `${this.make} :this is an inheritance example`;
    }
 }
let mycar =new car("toyota","corolla");
console.log(mycar.start());
console.log(mycar.drive());

let vehone = new vehicle("toyota","corolla");
console.log(vehone.make);

encapsulation
class bankaccount {
    #balance = 5555550;
    deposite(amount){
        this.#balance += amount;
        return this.#balance;
    }
    getbalance(){
        return `$ ${this.#balance}`;
    }
}
let account = new bankaccount ();
console.log(account.getbalance());
  

absraction

class coffeemachine {
    start (){
        return `starting the machine...`;
    }
    brewcoffee() {
        return `brewing coffee`;
    }
    pressstartbutton() {
        let msgone = this.start();
        let msgtwo = this.brewcoffee();
        return `${msgone} + ${msgtwo}`;
    }
}
 let mymachine = new coffeemachine();
 console.log(mymachine.start());
 console.log(mymachine.brewcoffee());
 console.log(mymachine.pressstartbutton());
 
 polymorphism
 class bird {
    fly() {
        return `flying...`;
    }
 }

 class penguin extends bird {
    fly(){
        return `penguins can't fly`;
    }
 }
 let Bird = new bird();
 let penguine = new penguin();
 console.log(Bird.fly());
 console.log(penguine.fly());

 static method
 class calculator {
    static add(a, b) {
        return a + b;
    }
 }
 let minicalc = new calculator();
 //console.log(minicalc.add(2, 3));
 console.log(calculator.add(2,3));
 
 getter and setter 
 */

class Employee {
  #salary;
  constructor(name, salary) {
    if (salary < 0) {
      throw new Error("salary cannot be in negative");
    }
    this.name = name;
    this.#salary = salary;
  }
  get salary() {
    return `you are not allowed to see salary`;
  }
  set salary(value) {
    if (value < 0) {
      console.error("inavalid salary");
    } else {
      this._salary = value;
    }
  }
}
let emp = new Employee("alice", -50000);
console.log(emp._salary);
emp.salary = 60000;
