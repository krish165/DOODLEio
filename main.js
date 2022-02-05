function preload()
{
   classifier=ml5.imageClassifier("DoodleNet");
}
function setup()
{
   canvas=createCanvas(350,350);
   canvas.center();
   background("white");
   canvas.mouseReleased(classifyCanvas);
   synth=window.speechSynthesis;
}
function draw()
{
   strokeWeight(13);
   stroke("red");
   if(mouseIsPressed)
   {
      line(pmouseX,pmouseY,mouseX,mouseY);
   }
}
function clear()
{
   background("white");

}
function classifyCanvas()
{
   classifier.classify(canvas,gotResult);
      
}

function gotResult(error,results)
{
   if(error)
   {
      console.log(error);
   }
   else{
      console.log(results);
   }
   document.getElementById("Label1").innerHTML="Label:"+results[0].label;
   document.getElementById("label_confidence").innerHTML="Confidence:"+Math.round(results[0].confidence*100)+"%";
   utterThis=new SpeechSynthesisUtterance("It's a"+results[0].label);
   synth.speak(utterThis);
}