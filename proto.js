let myHeros = ["thor", "spiderman"]
let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    getspiderpower: function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}
Object.prototype.sunil = function(){
    console.log(`sunil is present in all object`);
}
Array.prototype.heysunil = function (){
    console.log(`sunil say hello`);
}
heroPower.sunil()
myHeros.sunil()
myHeros.heysunil()

const user ={
    name:"chai",
    email:"chai@google.com"
}
const teacher = {
    makevideo:true
}
const TeachingSupport = {
    isavilable:false
}
const TASupport = {
    makeAssignment:'js assignment',
    fulltime:true,
    _proto_:TeachingSupport
}
teacher.__proto__ =user
Object.setPrototypeOf(TeachingSupport,teacher)

let anotherUsername = "chai or code"

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`true length is:${this.trim().length}`);
}
    anotherUsername.trueLength()
    "hitesh".trueLength()
    "icetea".trueLength()
