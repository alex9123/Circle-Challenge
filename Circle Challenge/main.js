// Circle Challenge

let cnv = document.getElementById("canvas");
let ctx = cnv.getContext("2d")

cnv.width = 1260
cnv.height = 800

let thickness = document.getElementById("thickness")
let inputRings = document.getElementById("rings")
let ringDistance = document.getElementById("distance")

// Draw Circle
ctx.strokeStyle = "red";

function drawCircle() {
    ctx.clearRect(0, 0, cnv.width, cnv.height); // clear everything

    ctx.lineWidth = thickness.value;
  
    for (rings = 0; rings < inputRings.value * +ringDistance.value; rings += +ringDistance.value) { // Draw Rings
    
        ctx.beginPath();  
        ctx.arc(cnv.width/2, cnv.height/2, rings, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.stroke();
    }


    requestAnimationFrame(drawCircle)
}

requestAnimationFrame(drawCircle)