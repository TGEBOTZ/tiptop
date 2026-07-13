if (localStorage.getItem("played") === "yes") {
    document.getElementById("msg").innerHTML =
    "You already played this game!";
    
    document.querySelectorAll("button").forEach(btn => {
        btn.disabled = true;
    });
}

function play(number) {

    if(localStorage.getItem("played") === "yes"){
        return;
    }

    localStorage.setItem("played","yes");

    document.getElementById("msg").innerHTML =
    "Your selected number is: " + number;

    document.querySelectorAll("button").forEach(btn => {
        btn.disabled = true;
    });
}
