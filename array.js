/* 
1. Declare an array named `teaFlavors` that contains the strings `"green tea"`, `"black tea"`, and `"oolong tea"`. 
   Access the first element of the array and store it in a variable named `firstTea`.


let teaflavors =["green tea","black tae","oolong tea"];
console.log(teaflavors);

let firstTea = teaflavors[0];
console.log(firstTea);


let cities =["london","tokyo","paris","newyork"]

let favoritecity = cities[2];
console.log(favoritecity);


let teatypes = ["herbal tea","white tea","masala chai"];
teatypes[1] = "jasmine tea"
console.log(teatypes);



let citiesvisited = [ "mumbai","sydney"];
console.log(citiesvisited);
citiesvisited.push("berlin");
console.log(citiesvisited);



let teaorders = ["chai","iced tea","matcha","earl-grey"];
console.log(teaorders);
let lastorder= teaorders.pop();
console.log(lastorder);
console.log(teaorders);



let popularteas = ["green tea","oolona tea","chai"];
let softcopyteas = popularteas;
popularteas.pop();

console.log(popularteas);
console.log(softcopyteas);



let topcities = ["berlin","singapore","new York"];
let hardcopycities = [...topcities];
let hardcopycities = topcities.slice();
topcities.pop();
console.log(hardcopycities);



let europeancities = ["paris","Rome"];
let asiancities = ["tokyo","bangkok"];
let worldcities = europeancities.concat(asiancities);
console.log(worldcities);



let teamenu = ["masalachai","oolangtea","greentea","earlgrey"];
let menulenght = teamenu.length;
console.log(menulenght);

*/

let citibucketlist = ["kyoto","london","capetown","vancouver"];
let islondoninlist = citibucketlist.includes("london");
console.log(citibucketlist);
