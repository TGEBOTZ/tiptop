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

let angle = 0;

function spin(){

    let random = Math.floor(Math.random()*360)+720;

    angle += random;

    document.getElementById("wheel").style.transform =
    "rotate(" + angle + "deg)";

    setTimeout(function(){

        let prize = prizes[Math.floor(Math.random()*prizes.length)];

        document.getElementById("msg").innerHTML =
        "🎁 You Won: " + prize;

    },5000);
}
