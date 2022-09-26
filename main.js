status="";
img="";
function preload(){
img=loadImage("IMG-1544.jpg");
}
function setup(){
canvas=createCanvas(640,420);
canvas.center();
objectDetector=ml5.objectDetector("cocossd",modelloaded);
document.getElementById("status").innerHTML="Status:Detecting Objects";
}
function draw(){
image(img,0,0,640,420);
fill("red");
text("Door",200,45);
noFill();
stroke("red");
rect(170,20,400,380);
fill("red");
text("Light Switches",30,280);
noFill();
stroke("red");
rect(29,270,150,50);
}
function modelloaded(){
    console.log("Model is loaded");
    status = "true";
    objectDetector.detect(img,gotResults);
}
function gotResults(error,results){
if(error){
    console.error(error);
}
else{
console.log(results);
}
}