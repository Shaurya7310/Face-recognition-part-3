Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
    
})
camera=document.getElementById("camera")
Webcam.attach(camera);
function capture(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img src="'+data_uri+'"id="image">'
        
        
    })

}
console.log("ml5 version: ",ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/rn_c8F1ts/model.json",model_loaded);

function model_loaded(){
    console.log("Model loaded")
}
function recognition(){
    img=document.getElementById("image")
    classifier.classify(img,got_result)
    
}
function got_result(error,result){
if(error)
    console.error(error)
    else{
     console.log(result)
     document.getElementById("result_object_name").innerHTML=result[0].label;
     document.getElementById("result_object_accuracy").innerHTML=result[0].confidence.toFixed(4);
    }
    

}