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
    var barra = document.getElementById("barraProgreso");
     barra.value = elementoAudio.currentTime;
    barra.max = duracionAudio;
    tiempo();
}

function tiempo(){
    var tiempo = document.getElementById("tiempo");
    tiempo.innerHTML = elementoAudio.currentTime;
}

function subirVolumen(){
    elementoAudio.volume += 0.2;
}

function bajarVolumen(){
    elementoAudio.volume -= 0.2;
}

function avanzar(){
    elementoAudio.currentTime += 2;
}

function retroceder(){
    elementoAudio.currentTime -= 2;
}