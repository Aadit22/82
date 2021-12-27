var mouseEvent ="empty";
var lastx, lasty;
canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
color="red";
width=5;
canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e)
{
    color=document.getElementById("input_color").Value;
    width=document.getElementById("input_width").value;
    mouseEvent="mousedown";
}       
canvas.addEventListener("mousemove",mymousemove);
function mymousemove(e)
{
    currentx=e.clientX-canvas.offsetLeft;
    currenty=e.clientY-canvas.offsetTop;
    if (mouseEvent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;
        
        console.log("last potion of x and y =");
        console.log("x="+lastx+" y="+lasty);
        ctx.moveTo(lastx,lasty);

        console.log("current position of x and y=");
        console.log("x="+currentx+" y="+currenty);
        ctx.lineTo(currentx,currenty);
        ctx.stroke();
    }
    lastx=currentx;
    lasty=currenty;
}
canvas.addEventListener("mouseup",mymouseup);
function mymouseup(e)
{
    mouseEvent="mouseup";
}
canvas.addEventListener("mouseleave",mymouseleave);
function mymouseleave(e)
{
    mouseEvent="mouseleave";
}
