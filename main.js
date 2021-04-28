

Webcam.attach('#cam'); 

cam=document.getElementById("cam");

Webcam.set({
    width:360,
    height:360,
   img_format:'png',
   png_quality:'90',
});


function capture(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_img" src="'+data_uri+'">';
});
}

console.log("ml5.version=",ml5.version);

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/WAdA2T4vv/model.json',modelLoaded);

function modelLoaded(){
    console.log("model loaded");
}

function check(){
    img=document.getElementById("captured_img");
    classifier.classify(img,gotResult);
}
function gotResult(error,results ){
    if (error) {
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("member").innerHTML=results[0].label;
        document.getElementById("accuracy").innerHTML=results[0].confidence.toFixed(3);
    }
}