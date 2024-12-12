
/*
const isUserloggedIn = true
const temperature = 51
if (temperature === 41)
    {
        console.log("less than 50");
    }
    else
    {
        console.log("temperature is greater than 50");

    }
     console.log("execute");



 const userLoggedIn = true
 const debitCard = true
 const loggedInFromGoogle = false
 const loggedInFromEmail = true

 if (userLoggedIn && debitCard && 2 == 3){
    console.log("allow to buy course");
 }
 

  const month = ""
  switch (month){
    case "jan":
        console.log("january");
        break;
    case "feb":
        console.log("febru");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;
    default:
        console.log("default case match");
        break;
  }
  

  const userEmail=[]

  if (userEmail){
    console.log("got user email");
  }
  else
  {
    console.log("dont have a user email");
  }
  

  const emptyObj = {}
  if(Object.keys(emptyObj).length === 0){
    console.log("object is empty");
  }
  
  let val1;
  //val1 = 5 ?? 10
 // val1 = null ?? 10
 // val1 = undefined ?? 15
  val1 = null ?? 10 ?? 20
  console.log(val1);
  

  const iceTeaPrice = 100
  iceTeaPrice <= 80 ? console.log("less than 80"):
  console.log("more than 80")

  

  for (let i = 0; i < 10; i++) {
    const element = i;
    if (element == 5) {
        console.log("5 is the best number");
    }
    console.log(element);
    
  }
  

  for (let i = 1; i <= 10; i++) {
            console.log(`outer loop value:${i}`);
        for (let j = 1; j <= 10; j++) {
            console.log(`inner loop value ${j} and inner loop ${i}`);
            console.log(i + '*' + j + ' = ' + i*j );
            
        }
  }

  

  let myArray = ["flash","batman","superman"]
  console.log(myArray.length );
  for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
  }

  

  for (let index = 1; index < 20; index++) {
            if( index == 5)
                {
                    console.log(`detected ${index}`);
                    continue
                }
              console.log(`value of i is  ${index}`);
                 }


let index = 0
while (index <= 10)
    {
        console.log(`value of index is ${index}`);
        index = index + 2
    }


let myArray = ['flash','batman','superman']
let arr = 0
while(arr < myArray.length){
    console.log(`value is ${myArray[arr]}`);
    arr = arr + 1
}
let score = 11
 
do{
    console.log(`score is ${score}`);
    score++
} while(score <= 10);



const arr = [1,2,3,4,5]
 for (const num of arr){
    console.log(num);
 }

 const greetings = "hello world!"
 for (const greet of greeting){
    console.log(`each char is ${great}`);
 }

 const map = new Map()
 map.set('IN',"india")
 map.set('usa',"united states of america")
 map.set('fr',"france")
 map.set('in',"india")
 console.log(map);

 for (const [key,value] of map){
    console.log(key,':-',value);
 }
 const myObject = {
    game1:'nfs',
    game2:'spiderman'
 }

 const myObject = {
    js:'javscript',
    cpp:'c++',
    rb:"ruby",
    swift:"swift by apple"
 }

 for (const key in myObject)
    {
        console.log(`${key} shortcut is for ${myObject[key]}`);
    }

const programming = ["js","rb","py","java","cpp"]
for (const key in programming){
console.log(programming[key]);
}

const map = new Map()
map.set('in',"india")
map.set('usa',"united states of america")
map.set('fr',"france")
map.set('in',"india")
for(const key in map){
    console.log(key);
}

const coding = ["js","ruby","java","python","cpp"]
//coding.forEach(function (val){
 //   console.log(val);
//})

//coding.forEach ( (item) =>{
  //  console.log((item));
//})
coding.forEach( (item, index,arr) => {
    console.log(item,index,arr);
})


const myCoding = [
    {
        languagename: "javascript",
        languagefilename: "js"
    },
    {
        languageName:"java",
        languagefilename:"java"
    },
    {
        languagename:"pyhton",
        languagefilename:"py"
    },
]
myCoding.forEach( (item) => {
    console.log(item.languageName);
})

const myNums = [1,2,3,4,5,6,7,8,9,10]
const newNums = myNums.filter( (num) => {
    return num > 4
})

myNums.forEach( (num) => {
    if (num > 4)
        {
            newNums.push(num)
        }
})
console.log(newNums);



const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})

console.log(userBooks);

*/

const myNumers = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNumers
.map( (num) => num * 10 )
.map ( (num) => num + 1)
.filter( (num) => num >= 40)

console.log(newNums);