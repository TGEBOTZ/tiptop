const prizes = {

1:"❤️ Give Mom a hug!",
2:"🍫 You win a chocolate!",
3:"☕ Make tea for your family!",
4:"📸 Take a family selfie!",
5:"🍕 Pizza treat for everyone!",
6:"😂 Tell a funny joke!",
7:"🎬 Family movie night!",
8:"🎁 You get a surprise gift!",
9:"⭐ You are the lucky winner today!"

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
