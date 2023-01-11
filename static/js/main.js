let fil_voices=[]
	
<!-- document.body.addEventListener("mousedown",async function () { -->

<!-- stopRecording() -->

<!-- }) -->
function load2(){
function speakVoice() {
  voices = this.getVoices();
  for (let i = 0; i < voices.length; i++) {
      
      if(voices[i]['lang']=='en-GB' & voices[i]['name'].includes("Female")){
      fil_voices.push(voices[i])
      }
  }

  };



var voices = speechSynthesis.getVoices();
console.log('voices',fil_voices)
window.speechSynthesis.cancel()
var str='Welcome user'
console.log('------------------------------------------------------------------------------------------------------------------------------');
console.log(document.getElementById('read').value)
getNextAudio(document.getElementById('read').value);



  
  
}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
var tobespoken=document.getElementById('read').textContent;
function getNextAudio(sentence) {
   

    let audio = new SpeechSynthesisUtterance(sentence);
       audio.rate = 1;
      audio.voice=fil_voices[0]
      audio.lang='en-GB'
      console.log('voices lang',audio.lang,audio.voice)
                
    var tobespoken=document.getElementById('read').value;
     window.speechSynthesis.cancel(
     )
     console.log('---------------------------------------------------------------------------------')
     console.log(sentence)
     responsiveVoice.cancel();

     responsiveVoice.speak(sentence,'UK English Male');
       console.log('played sentence',sentence)
    return new Promise(resolve => {
      
      audio.onend = resolve;
    });
}