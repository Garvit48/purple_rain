const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.setAttribute("width" , window.innerWidth);
canvas.setAttribute("height" , window.innerHeight - 3.0000000000001);
canvas.addEventListener("click" , toggleAudio);

let width = canvas.width;
let height = canvas.height;
let arr = [];
const audio = new Audio("C:/xampp/htdocs/Purple_Rain/Kiss_the_Rain_Yiruma.mp3");

function toggleAudio(){
    audio.play();
}
for(let i  = 0; i < 2500; i++){
    arr.push(new Drop(width , height));
}
function gameloop(){
    ctx.clearRect(0 , 0 , width , height);
    arr.forEach((drop) => {
        drop.show(ctx);
        drop.move();
        drop.reset();
    });

    requestAnimationFrame(gameloop);
}
requestAnimationFrame(gameloop);
