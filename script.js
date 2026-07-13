let prizes = {

1:"❤️ Give Mom a hug!",
2:"🍫 You win a chocolate!",
3:"☕ Make tea for family!",
4:"📸 Take a family selfie!",
5:"🍕 Pizza treat today!",
6:"😂 Tell a funny joke!",
7:"🎬 Family movie night!",
8:"🎁 Surprise gift for you!",
9:"⭐ Lucky winner today!"

};


function chooseColor(color){

document.getElementById("numbers").classList.remove("hide");

document.getElementById("result").innerHTML =
"You selected "+color+" 🎨<br>Choose a number";

}



function showPrize(number){

document.getElementById("result").innerHTML =
"Opening Tip Top... ⏳";


setTimeout(function(){

document.getElementById("result").innerHTML =
prizes[number];

},1000);

}



function openTip(){

document.getElementById("tiptop")
.classList.toggle("open");

}
