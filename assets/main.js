//alert("Holaaaaaa");
var elementoAudio = (document.getElementById("archivoAudio"));

function reproducir(){
    elementoAudio.play();
}

function pausar(){
    elementoAudio.pause();
}

function parar(){
    elementoAudio.load();
}

function progreso(){
    var duracionAudio = elementoAudio.duration;
    document.getElementById("barraProgreso").max = duracionAudio;
    document.getElementById("barraProgreso").value = elementoAudio.currentTime;
}

function subirVolumen(){
    elementoAudio.volume += 0.2;
}

function bajarVolumen(){
    elementoAudio.volume -= 0.2;
}

function avanzar(){
    elementoAudio.currentTime += 1;
}

function retroceder(){
    elementoAudio.currentTime -= 1;
}