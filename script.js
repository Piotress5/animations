const play = document.querySelectorAll("button.play img");
const obiekty1 = document.querySelectorAll("div.obiekty1 div");
let tempspace = "";

// ikony przyskow
play.forEach(function(x) {
    x.addEventListener("click", zmien_ikona1);
    function zmien_ikona1() {
        tempspace = x.src;
        if (tempspace.includes("img/play-button.png") == true) {
            x.src = "img/pause-button.png";
            for (var i = 0, max = obiekty1.length; i < max; i++) {
                obiekty1[i].style.animationPlayState = "running";
            }
        } else {
            x.src = "img/play-button.png";
            for (var i = 0, max = obiekty1.length; i < max; i++) {
                obiekty1[i].style.animationPlayState = "paused";
            }
        }
    }
})
