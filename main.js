function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 450);
    canvas.position(560, 150);

    classifier = ml5.poseNet(video, modelLoaded);
    classifier.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("LODED blah blah balha abplahdb bdaijd dsapd fjbioadp");
}

function draw(){
    background('#969A76')
}

function gotPoses(results){
    console.log('blah blah black sheep');
}