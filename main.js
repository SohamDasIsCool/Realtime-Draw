function setup(){
    video=createCapture(VIDEO);
    video.size(550,550);
    canvas=createCanvas(550,550);
    canvas.position(560,150);
    posenet=ml5.poseNet(video,ModelLoaded);
    posenet.on('pose',gotPoses);
}
x=Math.floor(Math.random()*2);
function draw(){
    if(x==1){
    background('#696969');
    }
    if(x==2){
        background('#FFFFFF');
    }
}
function ModelLoaded(){
    console.log("Posenet is initialized");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
    }
}