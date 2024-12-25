/* singleton
object literals

  Object.create - constructor method through

const mysym = Symbol("key1")

const jsuser = {

    name:"sunil",
    [mysym]: "mykey1",
    age:24,
    location:"pune",
    gmail:"shjd@gmail.com"
}
console.log(jsuser["name"]);
console.log(jsuser[mysym]);
jsuser.gmail = "ss@gmail.com"
//Object.freeze(jsuser)
jsuser.gmail = "ssad@gmail.com"
console.log(jsuser);

jsuser.greetinig = function(){

  console.log("hi user");
}
console.log(jsuser.greetinig());

jsuser.greetinig2 = function(){

  console.log(`hello,${this.name}`);
}
console.log(jsuser.greetinig2());


//const tinderuser = new Object()
const tinderuser = {}
  tinderuser.id = "123abc"
  tinderuser.name = "sam"
  tinderuserisLoggedIn = false
  console.log(tinderuser);

  const regularuser = {
    email: "sndk@gmail.com",
    fullname: {
            userfullname:{
              firstname:"sunil",
              lastname:"jadhav"

            }
    }
  }
  console.log(regularuser.fullname.userfullname.firstname);

  const obj1 = {1:"a",2:"b"}
  const obj2 = {3:"a",4:"b"} 
  const obj3 = {5:"a",6:"b"} 
 //  const obj4 = Object.assign({}, obj1,obj2,obj3)
 const obj4 ={...obj1,...obj2,...obj3}
  console.log(obj4);

  const tinderuser = {}
  tinderuser.id = "123abc"
  tinderuser.name = "sam"
  tinderuser.isLoggedIn = false
  console.log(tinderuser);
  console.log(Object.keys(tinderuser));
  console.log(Object.values(tinderuser));
  console.log(Object.entries(tinderuser));

  console.log(tinderuser.hasOwnProperty('isLoggedIn'));
*/


const course = {
  coursename:"js_hindi",
  price: "999",
  corseinstructor:"hitesh"
}

//const {corseinstructor} =course
//console.log(corseinstructor);
//const {corseinstructor: instruct} =course
//console.log(instruct);

/* destructure
const navbar = ({coompany}) => {

}

navbar(company = "sunil")


{
  "name": "sunil",
  "coursename":"js",
  "price":"free"
}*/
