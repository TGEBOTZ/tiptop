let selectedColor = "";

const messages = [
    "❤️ Give Mom a hug!",
    "☕ Dad makes tea today!",
    "🍕 Brother buys pizza!",
    "🎬 Family movie night!",
    "📸 Take a family selfie!",
    "😂 Tell everyone a joke!",
    "🍫 You win a chocolate!",
    "🎁 You are the lucky person today!"
];

function choose(color) {
    selectedColor = color;
    document.getElementById("numbers").style.display = "block";
    document.getElementById("message").innerHTML =
        "You selected " + color + ". Now choose a number!";
}

function result() {
    let random = Math.floor(Math.random() * messages.length);
    document.getElementById("message").innerHTML = messages[random];
}

function openTip() {
    let tip = document.getElementById("tiptop");
    tip.classList.toggle("open");
}
