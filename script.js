const play = document.querySelectorAll("button.play");
const ikony = document.querySelectorAll("button.play img");
const stop = document.querySelectorAll("button.stop");
const next = document.querySelectorAll("button.next");
const obiekty1 = document.querySelectorAll("div.obiekty1 div");
const obiekty2 = document.querySelectorAll("div.obiekty2 div");
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
                    obiekty1[i].style.animationName = "anim" + wartosc + "_" + licznik1 + "_" + (i + 1);
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
                    obiekty2[i].style.animationName = "anim" + wartosc + "_" + licznik2 + "_" + (i + 1);
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
        }
    }
});

next.forEach(function(z) {
    z.addEventListener("click", nastepny);
    function nastepny() {
        wartosc = z.getAttribute("value");
        tempvalue = wartosc - 1;
        if (wartosc == 1) {
            switch (licznik1) {
                case 1:
                    licznik1++;
                    break;
                case 2:
                    licznik1--;
                    break;           
                default:
                    break;
            }
            for (var i = 0, max = obiekty1.length; i < max; i++) {
                obiekty1[i].style.animationName = "anim" + wartosc + "_" + licznik1 + "_" + (i + 1);
            }
            animacja_nr[tempvalue].innerText = licznik1;
        }
    }
});
