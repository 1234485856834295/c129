song="";
right_wristx=0;
left_wristx=0;
right_wristy=0;
left_wristy=0;
song1="";
song2="";
scorel=0;
ltf="";
so1="";
so2="";

function preload(){
    song1=loadSound("music.mp3");
    song2=loadSound("music2.mp3");
}

function setup(){
    canvas=createCanvas(400,400);
    canvas.position(560,250);

    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on("pose",gotPoses);
}

function draw(){
    image(video,0,0,400,400);

ltf.isPlaying();
so1.isPlaying();
so2.isPlaying();

    if(scoreLeftWrist>0.2){
        circle(left_wristx,left_wristy);
        fill("red");

        song2.stop();
        if(so1=="false"){
            song1.play();
            document.getElementById("heading").innerHTML="song 1 is playing";
        }

     }
}

function hi(){
    song.play();
}

function modelLoaded(){
    console.log("ITS WORKIN");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        scorel= results[0].pose.keypoints[9].score;
        console.log("Score left wrist "+scorel);

        left_wristx=results[0].pose.leftWrist.x;
        left_wristy=results[0].pose.leftWrist.y;

        right_wristx=results[0].pose.rightWrist.x;
        right_wristy=results[0].pose.rightWrist.y;

        console.log("left wrist x="+left_wristx+",left wrist y="+left_wristy+",right wrist x="+right_wristx+",right wrist y="+right_wristy);
    }


}

