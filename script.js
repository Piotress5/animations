const play = document.querySelectorAll("button.play");
const ikony = document.querySelectorAll("button.play img");
const stop = document.querySelectorAll("button.stop");
const next = document.querySelectorAll("button.next");
const obiekty1 = document.querySelectorAll("div.obiekty1 div");
const obiekty2 = document.querySelectorAll("div.obiekty2 div");
const obiekty2_czasy = ["3s", "5s", "6s", "8s", "8s"];
const obiekty3 = document.querySelectorAll("div.obiekty3 div");
const animacja_nr = document.querySelectorAll("p.animacja_numer");
let tempspace = "";
let tempvalue = 0;
let wartosc = "";
let licznik1 = 1;
let licznik2 = 1;
let licznik3 = 1;
let licznik4 = 1;
let licznik5 = 1;
let licznik6 = 1;

// dzialanie przyciskow
play.forEach(function(x) {
    x.addEventListener("click", graj);
    function graj() {
        wartosc = x.getAttribute("value");
        tempvalue = wartosc - 1;
        tempspace = ikony[tempvalue].src;
        if (tempspace.includes("img/play-button.png") == true) {
            if (wartosc == 1) {
                ikony[0].src = "img/pause-button.png";
                for (var i = 0, max = obiekty1.length; i < max; i++) {
                    obiekty1[i].style.animationName = "anim" + wartosc + "_"
                    + licznik1 + "_" + (i + 1);
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
                    obiekty2[i].style.animationName = "anim" + wartosc + "_"
                    + licznik2 + "_" + (i + 1);
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
        } // obiekt2
        if (tempspace.includes("img/play-button.png") == true) {
            if (wartosc == 3) {
                ikony[tempvalue].src = "img/pause-button.png";
                for (var i = 0, max = obiekty3.length; i < max; i++) {
                    obiekty3[i].style.animationName = "anim" + wartosc + "_"
                    + licznik3 + "_" + (i + 1);
                    obiekty3[i].style.animationPlayState = "running";
                }
            }
        } else {
            if (wartosc == 3) {
                ikony[tempvalue].src = "img/play-button.png";
                for (var i = 0, max = obiekty3.length; i < max; i++) {
                    obiekty3[i].style.animationPlayState = "paused";
                }
            }
        } // obiekt3
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
                obiekty1[i].style.animationPlayState = "paused";
            }
            ikony[tempvalue].src = "img/play-button.png";
        } // kopiowac do kazdego przycisku tego if'a
        if (wartosc == 2) {
            for (var i = 0, max = obiekty2.length; i < max; i++) {
                obiekty2[i].style.animationName = "none";
                obiekty2[i].style.animationPlayState = "paused";
            }
            ikony[tempvalue].src = "img/play-button.png";
        } // obiekt2
        if (wartosc == 3) {
            for (var i = 0, max = obiekty3.length; i < max; i++) {
                obiekty3[i].style.animationName = "none";
                obiekty3[i].style.animationPlayState = "paused";
            }
            ikony[tempvalue].src = "img/play-button.png";
        } // obiekt3
    }
});

next.forEach(function(z) {
    z.addEventListener("click", nastepny);
    function nastepny() {
        wartosc = z.getAttribute("value");
        tempvalue = wartosc - 1;
        if (wartosc == 1) {
            if (licznik1 < 3) {
                licznik1++;
            } else {
                licznik1 = 1;
            }
            for (var i = 0, max = obiekty1.length; i < max; i++) {
                obiekty1[i].style.animationName = "anim" + wartosc + "_"
                + licznik1 + "_" + (i + 1);
            }
            animacja_nr[tempvalue].innerText = licznik1;
        } // obiekt1
        if (wartosc == 2) {
            if (licznik2 < 3) {
                licznik2++;
            } else {
                licznik2 = 1;
            }
            for (var i = 0, max = obiekty2.length; i < max; i++) {
                obiekty2[i].style.animationName = "anim" + wartosc + "_"
                + licznik2 + "_" + (i + 1);
            }
            if (licznik2 == 1) {
                for (var i = 0, max = obiekty2.length; i < max; i++) {
                    obiekty2[i].style.animationDuration = obiekty2_czasy[i];
                }
            } else if (licznik2 == 2) {
                for (var i = 0, max = obiekty2.length; i < max; i++) {
                    obiekty2[i].style.animationDuration = "2s";
                }
            } else if (licznik2 == 3) {
                for (var i = 0, max = obiekty2.length; i < max; i++) {
                    obiekty2[i].style.animationDuration = "1.5s";
                }
            }
            animacja_nr[tempvalue].innerText = licznik2;
        } // obiekt2
        if (wartosc == 3) {
            if (licznik3 < 3) {
                licznik3++;
            } else {
                licznik3 = 1;
            }
            for (var i = 0, max = obiekty3.length; i < max; i++) {
                obiekty3[i].style.animationName = "anim" + wartosc + "_"
                + licznik3 + "_" + (i + 1);
            }
            if (licznik3 == 3) {
                for (var i = 0, max = obiekty3.length; i < max; i++) {
                    obiekty3[i].style.animationDuration = "3s";
                }
            } else {
                for (var i = 0, max = obiekty3.length; i < max; i++) {
                    obiekty3[i].style.animationDuration = "2s";
                }
            }
            animacja_nr[tempvalue].innerText = licznik3;
        } // obiekt3
    }
});
// transform: rotate(270deg) translate(50px) rotate(-270deg);
// transform: rotate(315deg) translate(50px) rotate(-315deg);
// transform: rotate(0deg) translate(50px) rotate(0deg);
// transform: rotate(45deg) translate(50px) rotate(-45deg);
// transform: rotate(90deg) translate(50px) rotate(-90deg);
// transform: rotate(135deg) translate(50px) rotate(-135deg);
// transform: rotate(180deg) translate(50px) rotate(-180deg);
// transform: rotate(225deg) translate(50px) rotate(-225deg);