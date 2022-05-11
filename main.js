camera = document.getElementById("camera")
Webcam.set({
    width: 350, height: 300, image_format:'png', png_quality:90
})
Webcam.attach('#camera') 

function takeSnapShot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="gestureimg" src ="'+data_uri+'">'
    })

}

Classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/lVysURjdn/model.json",modelloaded)
function modelloaded() {
    console.log("model is loaded")
}

function check(){
    img= document.getElementById("gestureimg")
    Classifier.classify(img,gotresult)
} 
var prediction1=""
var prediction2=""

function speak(){
    var synth=window.speechSynthesis
    data1 = "the first prediction is" + prediction1
    data2 = "the second prediction is" + prediction2
    var utterthis = new SpeechSynthesisUtterance (data1+data2)
    synth.speak(utterthis)
}
function gotresult(error,results){
    if (error) {
        console.log(error)
    } else {
        console.log(result)
        document.getElementById("resultone").innerHTML=results[0].label
        document.getElementById("resulttwo").innerHTML=results[1].label
if(results[0].label=="good"){
    document.getElementById("emojione").innerHTML="&#128077;"
}
if(results[0].label=="bad"){
    document.getElementById("emojione").innerHTML="&#128078;"
}
if(results[0].label=="peace"){
    document.getElementById("emojione").innerHTML="&#129310;"
}
if(results[1].label=="good"){
    document.getElementById("emojitwo").innerHTML="&#128077;"
}
if(results[1].label=="bad"){
    document.getElementById("emojitwo").innerHTML="&#128078;"
}
if(results[1].label=="peace"){
    document.getElementById("emojitwo").innerHTML="&#129310;"
}
    }
}
