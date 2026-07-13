const prizes = [

1:"💸 ₹25",
2:"💸 ₹500 🥳",
3:"💸 #100",
4:"💸 ₹150",
5:"💸 ₹200",
6:"💸 ₹50",
7:"₹0 😭",
8:"💸 ₹250 🎉",
9:"💸 ₹10"

];


let lastPrize = -1;


function playGame(number){


document.getElementById("number").innerHTML =
"Opening Tip Top... ⏳";


setTimeout(function(){


let randomPrize;


do{

randomPrize = Math.floor(Math.random()*prizes.length);

}
while(randomPrize === lastPrize);


lastPrize = randomPrize;


document.getElementById("number").innerHTML =
"Your Number: " + number;


document.getElementById("result").innerHTML =
prizes[randomPrize];


},1000);


}
