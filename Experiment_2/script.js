let Div = document.getElementById("movement");

function isTouchDevice(){
    try {
        document.createEvent("TouchEvent");
        return true;
    }
    catch(e) {
        return false;
    }
}

const move = (e) => {
    try {
        var x = !isTouchDevice() ? e.pageX : e.touches[0].pageX;
        var y = !isTouchDevice() ? e.pageY : e.touches[0].pageY;
    }
    catch(e) {}
    Div.style.left = x-40 + "px";
    Div.style.top = y-40 + "px";
};

document.addEventListener("mousemove", (e) => {
    move(e);
});

document.addEventListener("touchmove", (e) => {
    move(e);
});

const img = document.getElementById("img");
const color = document.getElementById("dark");
const click_1 = document.getElementById("back");

click_1.addEventListener("click", function() {
    img.src = "lit-bulb.png";
    color.style.backgroundColor = 'transparent';
});