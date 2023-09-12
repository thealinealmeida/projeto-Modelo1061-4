var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
} 
 

recognition.onresult = function(event) {

 console.log(event); 

 Content = event.results[0][0].transcript.toLowerCase();
   console.log(Content);
   if (Content == "selfie") {
    speak();
    }

}


function speak(){
    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    speak_data = "Tirando sua selfie em 5 segundos";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);


    setTimeout(function()
    { 
        img_id = "selfie1";
        take_snapshot(); 
        speak_data = "Tirando sua selfie em 10 segundos";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);

      }, 5000);

    setTimeout(function()
    { 
        img_id = "selfie2";
        take_snapshot(); 
        speak_data = "Tirando sua selfie em 15 segundos";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
        
    }, 10000);

    setTimeout(function()
    { 
        img_id = "selfie3";
        take_snapshot(); 

    }, 15000);

}

 
camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});

function take_snapshot()
{
    console.log(img_id);
    
    Webcam.snap(function(data_uri) {
        
    });
}
