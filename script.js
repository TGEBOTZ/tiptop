let prizes = {

1:"25",
2:"50",
3:"0",
4:"200",
5:"10",
6:"100",
7:"350",
8:"900",
9:"500"

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
