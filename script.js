let played = false;


const prizes = [
"❤️ Give Mom a hug!",
"🍫 You win a chocolate!",
"☕ Make tea for family!",
"📸 Take a family selfie!",
"🍕 Pizza treat today!",
"😂 Tell a funny joke!",
"🎬 Family movie night!",
"🎁 Surprise gift for you!",
"⭐ Lucky winner today!"
];


function playGame(color){

if(played){
return;
}


let number = Math.floor(Math.random()*9)+1;


document.getElementById("number").innerHTML =
"Opening Tip Top...";


document.getElementById("tiptop")
.classList.add("open");


setTimeout(function(){

document.getElementById("number").innerHTML =
"Number: "+number;


document.getElementById("result").innerHTML =
prizes[number-1];


},1000);


played=true;

}



function resetGame(){

played=false;

document.getElementById("tiptop")
.classList.remove("open");

document.getElementById("number").innerHTML="";
document.getElementById("result").innerHTML="";

}
