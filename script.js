const prizes=[
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


function sound(){

let ctx=new AudioContext();

let osc=ctx.createOscillator();

osc.frequency.value=800;

osc.connect(ctx.destination);

osc.start();

setTimeout(()=>{
osc.stop();
},200);

}



function play(number,btn){

btn.classList.add("active");

sound();


let prize =
prizes[Math.floor(Math.random()*prizes.length)];


confetti();


setTimeout(()=>{

document.getElementById("prize").innerHTML=
"Your Number : "+number+
"<br><br>🎁 "+prize;


document.getElementById("popup").style.display="block";


btn.classList.remove("active");


},1000);


}



function confetti(){

for(let i=0;i<80;i++){

let c=document.createElement("div");

c.className="confetti";

c.style.left=Math.random()*100+"%";

c.style.background=
"rgb("+Math.random()*255+","+
Math.random()*255+","+
Math.random()*255+")";


document.body.appendChild(c);


setTimeout(()=>{
c.remove();
},3000);

}

}



function closePopup(){

document.getElementById("popup").style.display="none";

}
