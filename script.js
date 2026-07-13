const prizes = [

"Gift A",
"Gift B",
"Gift C",
"Gift D",
"Gift E",
"Gift F",
"Gift G",
"Gift H",
"Gift I"

];


function play(number,btn){

    btn.classList.add("active");


    let randomPrize =
    prizes[Math.floor(Math.random()*prizes.length)];


    setTimeout(function(){


        document.getElementById("msg").innerHTML =

        "🎉 Your Number : " + number +
        "<br>🎁 Prize : " + randomPrize;


        btn.classList.remove("active");


    },500);


}
