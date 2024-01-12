const play = document.querySelectorAll("button.play");
const ikony = document.querySelectorAll("button.play img");
const stop = document.querySelectorAll("button.stop");
const prev = document.querySelectorAll("button.prev");
const next = document.querySelectorAll("button.next");
const obiekty1 = document.querySelectorAll("div.obiekty1 div");
const obiekty2 = document.querySelectorAll("div.obiekty2 div");
const obiekty2_czasy = ["3s", "5s", "6s", "8s", "8s"];
const obiekty3 = document.querySelectorAll("div.obiekty3 div");
const obiekty4 = document.querySelectorAll("div.obiekty4 div");
const obiekty5 = document.querySelectorAll("div.obiekty5 div");
const obiekty6 = document.querySelectorAll("div.obiekty6 div");
const animacja_nr = document.querySelectorAll("p.animacja_numer");
const bloki = document.querySelectorAll("div.animacja_blok");
const header = document.querySelector("h1");
let tempspace = "";
let tempvalue = 0;
let wartosc = "";
let licznik1 = 1;
let licznik2 = 1;
let licznik3 = 1;
let licznik4 = 1;
let licznik5 = 1;
let licznik6 = 1;

header.addEventListener("click", check_letter);
function check_letter() {
    let selection = getSelection();
    let charClicked = selection.focusOffset;
    bloki[2].style.background = "radial-gradient(circle, rgb(173, 0, 81) 5%, rgb(176, 1, 60) 25%, black 90%";
    if (charClicked == "3") {
        for (var i = 0, max = obiekty3.length; i < max; i++) {
            obiekty3[i].style.animationName = "anim" + 3 + "_"
            + "X_" + (i + 1);
            obiekty3[i].style.animationPlayState = "running";
            obiekty3[i].style.animationDuration = "2s";
            obiekty3[i].style.animationDelay = "0s";
        }
    }
}

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
                liczniki();
            }
        } else {
            if (wartosc == 3) {
                ikony[tempvalue].src = "img/play-button.png";
                for (var i = 0, max = obiekty3.length; i < max; i++) {
                    obiekty3[i].style.animationPlayState = "paused";
                }
            }
        } // obiekt3
        if (tempspace.includes("img/play-button.png") == true) {
            if (wartosc == 4) {
                ikony[tempvalue].src = "img/pause-button.png";
                for (var i = 0, max = obiekty4.length; i < max; i++) {
                    obiekty4[i].style.animationName = "anim" + wartosc + "_"
                    + licznik4 + "_" + (i + 1);
                    obiekty4[i].style.animationPlayState = "running";
                }
            }
        } else {
            if (wartosc == 4) {
                ikony[tempvalue].src = "img/play-button.png";
                for (var i = 0, max = obiekty4.length; i < max; i++) {
                    obiekty4[i].style.animationPlayState = "paused";
                }
            }
        } // obiekt4
        if (tempspace.includes("img/play-button.png") == true) {
            if (wartosc == 5) {
                ikony[tempvalue].src = "img/pause-button.png";
                for (var i = 0, max = obiekty5.length; i < max; i++) {
                    obiekty5[i].style.animationName = "anim" + wartosc + "_"
                    + licznik5 + "_" + (i + 1);
                    obiekty5[i].style.animationPlayState = "running";
                }
            }
        } else {
            if (wartosc == 5) {
                ikony[tempvalue].src = "img/play-button.png";
                for (var i = 0, max = obiekty5.length; i < max; i++) {
                    obiekty5[i].style.animationPlayState = "paused";
                }
            }
        } // obiekt5
        if (tempspace.includes("img/play-button.png") == true) {
            if (wartosc == 6) {
                ikony[tempvalue].src = "img/pause-button.png";
                for (var i = 0, max = obiekty6.length; i < max; i++) {
                    obiekty6[i].style.animationName = "anim" + wartosc + "_"
                    + licznik6 + "_" + (i + 1);
                    obiekty6[i].style.animationPlayState = "running";
                }
            }
        } else {
            if (wartosc == 6) {
                ikony[tempvalue].src = "img/play-button.png";
                for (var i = 0, max = obiekty6.length; i < max; i++) {
                    obiekty6[i].style.animationPlayState = "paused";
                }
            }
        } // obiekt6
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
            liczniki();
            for (var i = 0, max = obiekty3.length; i < max; i++) {
                obiekty3[i].style.animationName = "none";
                obiekty3[i].style.animationPlayState = "paused";
            }
            ikony[tempvalue].src = "img/play-button.png";
        } // obiekt3
        if (wartosc == 4) {
            for (var i = 0, max = obiekty4.length; i < max; i++) {
                obiekty4[i].style.animationName = "none";
                obiekty4[i].style.animationPlayState = "paused";
            }
            ikony[tempvalue].src = "img/play-button.png";
        } // obiekt4
        if (wartosc == 5) {
            for (var i = 0, max = obiekty5.length; i < max; i++) {
                obiekty5[i].style.animationName = "none";
                obiekty5[i].style.animationPlayState = "paused";
            }
            ikony[tempvalue].src = "img/play-button.png";
        } // obiekt5
        if (wartosc == 6) {
            for (var i = 0, max = obiekty6.length; i < max; i++) {
                obiekty6[i].style.animationName = "none";
                obiekty6[i].style.animationPlayState = "paused";
            }
            ikony[tempvalue].src = "img/play-button.png";
        } // obiekt6
    }
});

next.forEach(function(z) {
    z.addEventListener("click", nastepny);
    function nastepny() {
        wartosc = z.getAttribute("value");
        tempvalue = wartosc - 1;
        switch (wartosc) {
            case "1":
                if (licznik1 < 5) {
                    licznik1++;
                } else {
                    licznik1 = 1;
                }
                animacja_nr[tempvalue].innerText = licznik1;
                break;
            case "2":
                if (licznik2 < 5) {
                    licznik2++;
                } else {
                    licznik2 = 1;
                }
                animacja_nr[tempvalue].innerText = licznik2;
                break;
            case "3":
                if (licznik3 < 5) {
                    licznik3++;
                } else {
                    licznik3 = 1;
                }
                animacja_nr[tempvalue].innerText = licznik3;
                break;
            case "4":
                if (licznik4 < 5) {
                    licznik4++;
                } else {
                    licznik4 = 1;
                }
                animacja_nr[tempvalue].innerText = licznik4;
                break;
            case "5":
                if (licznik5 < 5) {
                    licznik5++;
                } else {
                    licznik5 = 1;
                }
                animacja_nr[tempvalue].innerText = licznik5;
                break;
            case "6":
                if (licznik6 < 5) {
                    licznik6++;
                } else {
                    licznik6 = 1;
                }
                animacja_nr[tempvalue].innerText = licznik6;
                break;
            default:
                break;
        }
        liczniki();
    }
});  

prev.forEach(function(p) {
    p.addEventListener("click", poprzedni);
    function poprzedni() {
        wartosc = p.getAttribute("value");
        tempvalue = wartosc - 1;
        switch (wartosc) {
            case "1":
                if (licznik1 > 1) {
                    licznik1--;
                } else {
                    licznik1 = 5;
                }
                animacja_nr[tempvalue].innerText = licznik1;
                break;
            case "2":
                if (licznik2 > 1) {
                    licznik2--;
                } else {
                    licznik2 = 5;
                }
                animacja_nr[tempvalue].innerText = licznik2;
                break;
            case "3":
                if (licznik3 > 1) {
                    licznik3--;
                } else {
                    licznik3 = 5;
                }
                animacja_nr[tempvalue].innerText = licznik3;
                break;
            case "4":
                if (licznik4 > 1) {
                    licznik4--;
                } else {
                    licznik4 = 5;
                }
                animacja_nr[tempvalue].innerText = licznik4;
                break;
            case "5":
                if (licznik5 > 1) {
                    licznik5--;
                } else {
                    licznik5 = 5;
                }
                animacja_nr[tempvalue].innerText = licznik5;
                break;
            case "6":
                if (licznik6 > 1) {
                    licznik6--;
                } else {
                    licznik6 = 5;
                }
                animacja_nr[tempvalue].innerText = licznik6;
                break;
            default:
                break;
        }
        liczniki();
    }
});

function liczniki() {
    if (wartosc == 1) {
        for (var i = 0, max = obiekty1.length; i < max; i++) {
            obiekty1[i].style.animationName = "anim" + wartosc + "_"
            + licznik1 + "_" + (i + 1);
        }
        if (licznik1 == 5) {
            for (var i = 0, max = obiekty1.length; i < max; i++) {
                obiekty1[i].style.animationDuration = "6s";
                obiekty1[i].style.animationTimingFunction = "linear";
            }
            obiekty1[0].style.animationDelay = 0 * 0.1 + "s";
            obiekty1[1].style.animationDelay = 1 * 0.1 + "s";
            obiekty1[3].style.animationDelay = 2 * 0.1 + "s";
            obiekty1[2].style.animationDelay = 3 * 0.1 + "s";
        } else {
            for (var i = 0, max = obiekty1.length; i < max; i++) {
                obiekty1[i].style.animationDuration = "3s";
                obiekty1[i].style.animationTimingFunction = "ease";
                obiekty1[i].style.animationDelay = "0s";
            }
        }
    } // obiekt1
    if (wartosc == 2) {
        for (var i = 0, max = obiekty2.length; i < max; i++) {
            obiekty2[i].style.animationName = "anim" + wartosc + "_"
            + licznik2 + "_" + (i + 1);
        }
        if (licznik2 == 1) {
            for (var i = 0, max = obiekty2.length; i < max; i++) {
                obiekty2[i].style.animationDuration = obiekty2_czasy[i];
            }
        } else if (licznik2 == 2 || licznik2 == 4) {
            for (var i = 0, max = obiekty2.length; i < max; i++) {
                obiekty2[i].style.animationDuration = "2s";
            }
        } else if (licznik2 == 3) {
            for (var i = 0, max = obiekty2.length; i < max; i++) {
                obiekty2[i].style.animationDuration = "1.5s";
            }
        } else if (licznik2 == 5) {
            for (var i = 0, max = obiekty2.length; i < max; i++) {
                obiekty2[i].style.animationDuration = "8s";
            }
        }
    } // obiekt2
    if (wartosc == 3) {
        for (var i = 0, max = obiekty3.length; i < max; i++) {
            obiekty3[i].style.animationName = "anim" + wartosc + "_"
            + licznik3 + "_" + (i + 1);
        }
        bloki[2].style.background = "linear-gradient(to top right, #555, #777)";
        if (licznik3 == 3) {
            for (var i = 0, max = obiekty3.length; i < max; i++) {
                obiekty3[i].style.animationDuration = "1s";
                obiekty3[i].style.animationDelay = 0.125 * i + "s";
            }
        } else if (licznik3 == 4) {
            for (var i = 0, max = obiekty3.length; i < max; i++) {
                obiekty3[i].style.animationDuration = "3s";
                obiekty3[i].style.animationDelay = "0s";
            }
        } else if (licznik3 == 5) {
            for (var i = 0, max = obiekty3.length; i < max; i++) {
                obiekty3[i].style.animationDuration = "5s";
                obiekty3[i].style.animationDelay = "0s";
            }
        } else {
            for (var i = 0, max = obiekty3.length; i < max; i++) {
                obiekty3[i].style.animationDuration = "2s";
                obiekty3[i].style.animationDelay = "0s";
            }
        }
    } // obiekt3
    if (wartosc == 4) {
        for (var i = 0, max = obiekty4.length; i < max; i++) {
            obiekty4[i].style.animationName = "anim" + wartosc + "_"
            + licznik4 + "_" + (i + 1);
        }
        if (licznik4 == 1 || licznik4 == 5) {
            obiekty4[0].style.animationDuration = "2s";
            obiekty4[1].style.animationDuration = "4s";
            obiekty4[2].style.animationDuration = "4s";
            obiekty4[3].style.animationDuration = "4s";
            obiekty4[1].style.animationDelay = "0s";
            obiekty4[2].style.animationDelay = "-1.33s";
            obiekty4[3].style.animationDelay = "-2.66s";
        } else if (licznik4 == 2) {
            for (var i = 0, max = obiekty4.length; i < max; i++) {
                obiekty4[i].style.animationDuration = "2s";
            }
            obiekty4[1].style.animationDelay = "-1.6s";
            obiekty4[2].style.animationDelay = "-1.5s";
            obiekty4[3].style.animationDelay = "-1.4s";
        } else if (licznik4 == 3) {
            for (var i = 0, max = obiekty4.length; i < max; i++) {
                obiekty4[i].style.animationDuration = "2s";
            }
            obiekty4[1].style.animationDelay = "-1.6s";
            obiekty4[2].style.animationDelay = "-1.5s";
            obiekty4[3].style.animationDelay = "-1.4s";
        } else if (licznik4 == 4) {
            obiekty4[0].style.animationDuration = "1s";
            obiekty4[1].style.animationDuration = "2s";
            obiekty4[2].style.animationDuration = "2s";
            obiekty4[3].style.animationDuration = "2s";
            obiekty4[1].style.animationDelay = "0s";
            obiekty4[2].style.animationDelay = "-1s";
            obiekty4[3].style.animationDelay = "-2s";
        }
        if (licznik4 == 5) {
            for (var i = 0, max = obiekty4.length; i < max; i++) {
                obiekty4[i].style.animationDirection = "reverse";
                obiekty4[1].style.animationDuration = "3s";
                obiekty4[2].style.animationDuration = "3s";
                obiekty4[3].style.animationDuration = "3s";
                obiekty4[2].style.animationDelay = "-1s";
                obiekty4[3].style.animationDelay = "-2s";
            }
        } else {
            for (var i = 0, max = obiekty4.length; i < max; i++) {
                obiekty4[i].style.animationDirection = "normal";
            }
        }
    } // obiekt4
    if (wartosc == 5) {
        for (var i = 0, max = obiekty5.length; i < max; i++) {
            obiekty5[i].style.animationName = "anim" + wartosc + "_"
            + licznik5 + "_" + (i + 1);
        }
        if (licznik5 == 1) {
            for (var i = 0, max = obiekty5.length; i < max; i++) {
                obiekty5[i].style.animationDuration = "3s";
                obiekty5[i].style.animationTimingFunction = "ease";
            }
        } else if (licznik5 == 2) {
            for (var i = 0, max = obiekty5.length; i < max; i++) {
                obiekty5[i].style.animationTimingFunction = "linear";
            }
            obiekty5[0].style.animationDuration = "2.5s";
            obiekty5[2].style.animationDuration = "1s";
        } else if (licznik5 == 3) {
            for (var i = 0, max = obiekty5.length; i < max; i++) {
                obiekty5[i].style.animationTimingFunction = "linear";
            }
            obiekty5[0].style.animationDuration = "2.5s";
            obiekty5[2].style.animationDuration = "8s";
        } else if (licznik5 == 4) {
            for (var i = 0, max = obiekty5.length; i < max; i++) {
                obiekty5[i].style.animationTimingFunction = "linear";
            }
            obiekty5[0].style.animationDuration = "2.5s";
            obiekty5[2].style.animationDuration = "1s";
        } else if (licznik5 == 5) {
            for (var i = 0, max = obiekty5.length; i < max; i++) {
                obiekty5[i].style.animationTimingFunction = "linear";
            }
            obiekty5[0].style.animationDuration = "2.5s";
            obiekty5[2].style.animationDuration = "2.5s";
        }
    } // obiekt5
    if (wartosc == 6) {
        for (var i = 0, max = obiekty6.length; i < max; i++) {
            obiekty6[i].style.animationName = "anim" + wartosc + "_"
            + licznik6 + "_" + (i + 1);
        }
        if (licznik6 == 1 || licznik6 == 4) {
            for (var i = 0, max = obiekty6.length; i < max; i++) {
                obiekty6[i].style.animationDuration = "2s";
                obiekty6[i].style.animationTimingFunction = "ease";
            }
            obiekty6[0].style.animationDelay = "0.4s";
            obiekty6[1].style.animationDelay = "0.2s";
            obiekty6[2].style.animationDelay = "0s";
            obiekty6[3].style.animationDelay = "0.6s";
            obiekty6[4].style.animationDelay = "0.4s";
            obiekty6[5].style.animationDelay = "0.2s";
            obiekty6[6].style.animationDelay = "0.8s";
            obiekty6[7].style.animationDelay = "0.6s";
            obiekty6[8].style.animationDelay = "0.4s";
        } else if (licznik6 == 2) {
            for (var i = 0, max = obiekty6.length; i < max; i++) {
                obiekty6[i].style.animationDuration = "2.2s";
                obiekty6[i].style.animationDelay = "0s";
                obiekty6[i].style.animationTimingFunction = "ease";
            }
        } else if (licznik6 == 3) {
            for (var i = 0, max = obiekty6.length; i < max; i++) {
                obiekty6[i].style.animationDuration = "3.5s";
                obiekty6[i].style.animationDelay = "0s";
                obiekty6[i].style.animationTimingFunction = "ease";
            }
        } else if (licznik6 == 5) {
            for (var i = 0, max = obiekty6.length; i < max; i++) {
                obiekty6[i].style.animationDuration = "2s";
                obiekty6[i].style.animationTimingFunction = "ease";
            }
            obiekty6[0].style.animationDelay = "0s";
            obiekty6[1].style.animationDelay = "-0.4s";
            obiekty6[2].style.animationDelay = "-0.8s";
            obiekty6[3].style.animationDelay = "-1.2s";
            obiekty6[4].style.animationDelay = "0s";
            obiekty6[5].style.animationDelay = "-1.2s";
            obiekty6[6].style.animationDelay = "-0.8s";
            obiekty6[7].style.animationDelay = "-0.4s";
            obiekty6[8].style.animationDelay = "0s";
            obiekty6[4].style.animationDuration = "6s";
        }
    } // obiekt6
}

