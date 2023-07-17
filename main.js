noseX=0;
noseY=0;
diffrence = 0;
rightWristX = 0;
leftWristX = 0;
function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);


    canvas = createCanvas(550, 550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw() {
    background('grey');

    document.getElementById("square_side").innerHTML = "Width And Height of a Square will be = " + diffrence +"px";
    fill('#F90093');
    stroke('#F90093');
    textSize(diffrence)
    text("Aaron", 100,250)
}
function modelLoaded() {
    console.log('PoseNet Is Initialized!');

}
function gotPoses(results) {
    if(results.length > 0){
        console.log(results)
        noseX = results[0].pose.nose.x;
        nosey = results[0].pose.nose.y;
        console.log("noseX = " + noseX +" noseY" + noseY);

        leftWrsitX = results[0].pose.leftWrist.x;
        rightWrsitX = results[0].pose.rightWrist.x;
        diffrence = floor(leftWrsitX - rightWristX);

        console.log("leftWristX  = " + leftWristX + " rightWristX = "+ rightWristX + " difference = " + diffrence);
        
    }
}
