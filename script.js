const prizes = [
"❤️ Give Mom a hug!",
"🍫 You win a chocolate!",
"☕ Make tea for your family!",
"📸 Take a family selfie!",
"🍕 Pizza treat for everyone!",
"😂 Tell a funny joke!",
"🎬 Family movie night!",
"🎁 You get a surprise gift!",
"⭐ You are the lucky winner today!"
];


let lastPrize = -1;


function playGame(number){

document.getElementById("number").innerHTML =
"Opening Tip Top... ⏳";


setTimeout(function(){


let prize;


do{

prize = Math.floor(Math.random()*prizes.length);

}
while(prize === lastPrize);


lastPrize = prize;


document.getElementById("number").innerHTML =
"Your Number: " + number;


document.getElementById("result").innerHTML =
prizes[prize];


},1000);


}
