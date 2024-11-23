/*
function maketea(typeoftea){
    return `making ${typeoftea}`;
    console.log(test);
}
let teaorder = maketea("lemon tea");
console.log(teaorder);

function ordertea(teatypes){
    function confirmorder (){
        return `order confirmed for chai`;
    }
    return confirmorder();
}
let orderconfirmation = ordertea("chai");
console.log(orderconfirmation);


const calculatetotal = (price, quantity) => price * quantity;
let totalcost = calculatetotal(499 * 15);
console.log(calculatetotal);



function maketea (typeoftea) {
    return `maketea: ${typeoftea}`;
}

function processteaorder(teafunction){
    return teafunction("earl grey");
}
let order = processteaorder(maketea);
console.log(order);
*/

function createteamaker (name){
    let score = 100
    return function(teatype){
        return `making ${teatype} ${name} ${score}`;
    };
}
let teamaker = createteamaker("sunil");
let result = teamaker("green tea");
console.log(result);
