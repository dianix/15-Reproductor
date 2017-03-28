//alert("Holaaaaaa");

// VARIABLE GLOBAL QUE GUARDA EL AUDIO
var elementoAudio = (document.getElementById("archivoAudio"));

// *** FUNCIONES PARA BOTONES ***
function reproducir(){
    elementoAudio.play();
}

function pausar(){
    elementoAudio.pause();
}

function parar(){
    elementoAudio.load();
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

// *** PARA MOVER BARRA DE PROGRESO Y ENVIAR AL RELOJ EL TIEMPO TRANSCURRIDO ***
elementoAudio.ontimeupdate = function(){
    var barraProgreso = document.getElementById("barraProgreso");
    barraProgreso.value = elementoAudio.currentTime;
    
    var tiempoActual = elementoAudio.currentTime;
    var contadorTiempo = formatoReloj(tiempoActual);
    document.getElementById("tiempo").innerHTML = contadorTiempo;
}

// *** PARA DAR FORMATO AL TIEMPO DE REPRODUCCIÓN *** 
function formatoReloj(tiempo){
    var segundos = Math.floor(tiempo%60);
    var minutos = Math.floor(tiempo/60);
    var reloj;
    if(segundos < 10){
        segundos = "0" + segundos;
    }
    if(minutos < 10){
        minutos = "0" + minutos;
    }
    reloj = minutos + ":" + segundos;
    return reloj;
}

/* 
function tiempo(){
    var tiempo = document.getElementById("tiempo");
    tiempo.innerHTML = elementoAudio.currentTime;
}*/


/* no exitosa
function progreso(){
    var duracionAudio = elementoAudio.duration;
    var barra = document.getElementById("barraProgreso");
    barra.value = elementoAudio.currentTime;
    barra.max = duracionAudio;
    tiempo();
} */