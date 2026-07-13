const prizes=[
"Free Lunch",
"Coffee Voucher",
"Gift Item",
"Movie Ticket",
"Mobile Recharge",
"Chocolate Box",
"Shopping Voucher",
"Surprise Gift",
"Better Luck Next Time"
];


function play(number,btn){

btn.classList.add("active");


let sound=document.getElementById("sound");
sound.play();


let prize=
prizes[Math.floor(Math.random()*prizes.length)];


setTimeout(()=>{

document.getElementById("result").innerHTML=
"Your Number : "+number+
"<br><br>🎁 Prize : "+prize;


document.getElementById("popup").style.display="block";


btn.classList.remove("active");


},1000);

}



function closePopup(){

document.getElementById("popup").style.display="none";

}
