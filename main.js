const SpeechRecognition = webkitSpeechRecognition;

const recFala = new SpeechRecognition();
const txtFala = document.getElementById("voiceOut");


function startVoice() {
    txtFala.innerHTML = "";
    recFala.start();
}

recFala.onresult = function(e) {
    console.log(e);

    const fala = e.results[0][0].transcript

    console.log(fala);
    txtFala.value = fala;
}