const play = document.querySelectorAll("button.play");
const ikony = document.querySelectorAll("button.play img");
const stop = document.querySelectorAll("button.stop");
const obiekty1 = document.querySelectorAll("div.obiekty1 div");
const obiekty2 = document.querySelectorAll("div.obiekty2 div");
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
                    obiekty1[i].style.animationName = "anim" + wartosc + "_1_" + (i + 1);
                    obiekty1[i].style.animationPlayState = "running";
                }
            }
        } else {
            if (wartosc == 1) {
                ikony[tempvalue].src = "img/play-button.png";
                for (var i = 0, max = obiekty1.length; i < max; i++) {
                    obiekty1[i].style.animationPlayState = "paused";
                }
            }
        } // kopiowac do kazdego przycisku tego if'a
        if (tempspace.includes("img/play-button.png") == true) {
            if (wartosc == 2) {
                ikony[tempvalue].src = "img/pause-button.png";
                for (var i = 0, max = obiekty2.length; i < max; i++) {
                    obiekty2[i].style.animationName = "anim" + wartosc + "_1_" + (i + 1);
                    obiekty2[i].style.animationPlayState = "running";
                }
            }
        } else {
            if (wartosc == 2) {
                ikony[tempvalue].src = "img/play-button.png";
                for (var i = 0, max = obiekty2.length; i < max; i++) {
                    obiekty2[i].style.animationPlayState = "paused";
                }
            }
        }
    }
});

stop.forEach(function(y) {
    y.addEventListener("click", zatrzymaj);
    function zatrzymaj() {
        wartosc = y.getAttribute("value");
        tempvalue = wartosc - 1;
        if (wartosc == 1) {
            for (var i = 0, max = obiekty1.length; i < max; i++) {
                obiekty1[i].style.animationName = "none";
            }
            ikony[tempvalue].src = "img/play-button.png";
        } // kopiowac do kazdego przycisku tego if'a
        if (wartosc == 2) {
            for (var i = 0, max = obiekty2.length; i < max; i++) {
                obiekty2[i].style.animationName = "none";
            }
            ikony[tempvalue].src = "img/play-button.png";
        }
    }
});

// } else if (tempspace.includes("img/stop-button.png") == true) {
//     console.log("reset");