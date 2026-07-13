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


function play(number){

    let box = event.target;

    box.style.animation="shake 0.5s";


    let randomPrize =
    prizes[Math.floor(Math.random()*prizes.length)];


    setTimeout(function(){

        document.getElementById("msg").innerHTML =
        "🎉 Your Number: " + number +
        "<br>🎁 Prize: " + randomPrize;


        box.style.animation="";

    },500);

}
