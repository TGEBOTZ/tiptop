const prizes = {

1:"💸 ₹25",
2:"₹0 😭",
3:"💸 #100",
4:"💸 ₹150",
5:"💸 ₹500 ",
6:"💸 ₹50",
7:"💸 ₹700",
8:"💸 ₹660",
9:"💸 ₹1001"

};


window.onload = function(){

    if(localStorage.getItem("played")){

        document.getElementById("result").innerHTML =
        "❌ You already played this game!";

        document.getElementById("tiptop").style.display="none";

    }

};



function playGame(number){


    if(localStorage.getItem("played")){

        return;

    }


    document.getElementById("number").innerHTML =
    "Opening Tip Top... ⏳";


    setTimeout(function(){


        document.getElementById("number").innerHTML =
        "Your Number: " + number;


        document.getElementById("result").innerHTML =
        prizes[number];


        localStorage.setItem("played","yes");


        document.querySelectorAll(".box").forEach(function(btn){

            btn.disabled=true;

        });


    },1000);


}
