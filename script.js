function switchOff() {
    document.getElementById("bulbImage").src = "./img/bulb-go-off-img.png";
    document.getElementById("catImage").src = "./img/cat-eyes-img.png";
    document.getElementById("switchStatus").textContent = "Switch Off";
    document.getElementById("offSwitch").style.backgroundColor = "#cbd2d9";
    document.getElementById("onSwitch").style.backgroundColor = "#22c55e";

}

function switchOn() {
    document.getElementById("bulbImage").src = "./img/bulb-go-on-img.png";
    document.getElementById("catImage").src = "./img/cat-img.png";
    document.getElementById("switchStatus").textContent = "Switch On";
    document.getElementById("offSwitch").style.backgroundColor = "#e12d39";
    document.getElementById("onSwitch").style.backgroundColor = "#cbd2d9";
}