/*
let sum = 0;
let i = 1;
while(i <= 5){
    sum += i;
    i++
    console.log(sum);
    
}
    
   let countdown = [];
   let j = 5;
   while(j > 0){
    countdown.push(j);
    j--;
    console.log(countdown);
    
   }


let teacollection = [];
let tea;
do{
    tea = prompt(`enter your favourite tea(type "stop" to finish)`);
    if(tea != "stop"){
        teacollection.push(tea);
    }
}
    while(tea !== "stop");

let total = 0;
let k = 1;
do {
    total += k;
    k++;
} while (k <=3);
console.log(total);



let multipliednumbers = [];
let numbers = [2,4,6];
for(let l = 0; l < numbers.length; l++){
   multipliednumbers.push(numbers[2] * 2);
   console.log(multipliednumbers);
}


let cities = ["paris","new york","pune","london","tokyo"];
let citylist = [];
for(let c = 0; c < cities.length; c++){
    const mycity = cities[c];
    citylist.push(mycity);
    console.log(citylist);
}

let teas = ["green tea","black tea","chai","oolong tea"];
let selectedteas = [];
for(let i = 0; i < teas.length; i++){
    if(teas[i] === "chai"){
        break;
    }
    selectedteas.push(teas[i]);
    console.log(selectedteas);
}



let cities =["london","new york","paris","berlin"];
let visitedcities = [];
for(let i = 0; i < cities.length; i++){
    if(cities[i] === "paaris" || cities [i] === "paris"){
        continue;
    }
    visitedcities.push(cities[i]);
}
console.log(visitedcities);


 let numbers =[1,2,3,4,5];
 let smallNumbers = [];
 for(const num of numbers){
    if(num === 4){
        break;
    }
    smallNumbers.push(num);
 }
console.log(smallNumbers);


let teatypes =["chai","greentea","herbaltea","black tea"];
let preferredteas = [];
for(const tea of teatypes){
    if(tea === "herbal tea"){
        continue;
    }
    preferredteas.push(tea);
    console.log(preferredteas);  
}


let citiespopulation = {
    london:8900000,
    newyork:8400000,
    berlin:3500000,
    paris:2200000,

};
let citynewpopulation = {};

for (const city in citiespopulation) {
    if(city == "berlin"){
        break;
    }
    citynewpopulation[city] = citiespopulation[city];
}
console.log(citynewpopulation);



let worldcities = {
    sydney:5000000,
    tokyo:9000000,
    berlin:3500000,
    paris:2200000,
};

let largecities = {};
for(const city in worldcities){
    if(worldcities[city] < 3000000){
        continue;
    }
    largecities[city] = worldcities[city];
}
console.log(largecities);



let mynumbers =[2,5,7,9];
let doublednumbers = [];
for (let i = 0; i < mynumbers.length;i++)
    {
    if (mynumbers[i] === 7)
        {
        continue;
        }
    doublednumbers.push(mynumbers[i] * 2);
    console.log(doublednumbers);
    
}
*/

let myteas = ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"];
let shortteas = [];
for (const tea of myteas) {
  if (tea.length > 10) {
    break;
  }
  shortteas.push(tea);
  console.log(shortteas);
}
