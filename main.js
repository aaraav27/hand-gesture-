prediction_1 = "";
prediction_2 = "";


Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot(){
     Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_iamge" src="'+data_uri+'"/>';
    });
}

console.log("ml5 version", ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/oJYRdpZnW/",modelLoaded);

function modelLoaded(){
  console.log("model is loaded");  
}

function speak(){
    var synth= window.speakSynthesis;
    speakdata1 = "The first prediction is"+prediction_1;
    speakdata2 = "The second prediction is"+prediction_2;
    var utter_this = new speakSynthesisUtterance(speakdata1+speakdata2);
    synth.speak(utter_this);
}