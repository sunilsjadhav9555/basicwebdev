/*let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);
let mycreatedate = new Date(2024,5,8)
console.log(mycreatedate.toDateString());*/
let mytime = Date.now()
console.log(Math.floor (Date.now()/1000));
let newdate = new Date()
console.log(newdate);
console.log(newdate.getDay());
newdate.toLocaleString('default',{
    weekday:"long",
})
