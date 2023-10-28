const play = document.querySelectorAll("button.play");
const ikony = document.querySelectorAll("button.play img");
const stop = document.querySelectorAll("button.stop");
const obiekty1 = document.querySelectorAll("div.obiekty1 div");
let tempspace = "";
let tempvalue = 0;
let wartosc = "";

// dzialanie przyciskow
play.forEach(function(x) {
    x.addEventListener("click", zmien_ikona1);
    function zmien_ikona1() {
        wartosc = x.getAttribute("value");
        tempvalue = wartosc - 1;
        tempspace = ikony[tempvalue].src;
        if (tempspace.includes("img/play-button.png") == true) {
            if (wartosc == 1) {
                ikony[0].src = "img/pause-button.png";
                for (var i = 0, max = obiekty1.length; i < max; i++) {
                    obiekty1[i].style.animationName = "anim1_1_" + (i + 1);
                    obiekty1[i].style.animationPlayState = "running";
                }
            }
        } else {
            if (wartosc == 1) {
                ikony[0].src = "img/play-button.png";
                for (var i = 0, max = obiekty1.length; i < max; i++) {
                    obiekty1[i].style.animationPlayState = "paused";
                }
            }
        } // kopiowac do kazdego przycisku tego if'a
    }
});

stop.forEach(function(y) {
    y.addEventListener("click", zatrzymaj);
    function zatrzymaj() {
        wartosc = y.getAttribute("value");
        if (wartosc == 1) {
            for (var i = 0, max = obiekty1.length; i < max; i++) {
                obiekty1[i].style.animationName = "none";
            }
            ikony[tempvalue].src = "img/play-button.png";
        } // kopiowac do kazdego przycisku tego if'a
    }
});

// } else if (tempspace.includes("img/stop-button.png") == true) {
//     console.log("reset");