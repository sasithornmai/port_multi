var x = "tobottom";
var changeTop = document.getElementById("frames");
console.log(changeTop);
function changeImg() {
    console.log(changeTop.dataset.imgw);
    if (changeTop.dataset.imgw > 7) {
    changeTop.dataset.imgw = 0.5;
    x = "totop";
    }
    else if (changeTop.dataset.imgw < 1) {
    changeTop.dataset.imgw = 1;
    x = "tobottom";
    }
    for (let i = 0; i < 4; i++) {
    if ( 2 ** (i-1) == changeTop.dataset.imgw){
        changeTop.style.setProperty("--i", i);
    }
    }
if (x == "totop") {
    changeTop.dataset.imgw /= 2;
}
else {
    changeTop.dataset.imgw *= 2;
}
}
