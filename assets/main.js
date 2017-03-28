//alert("Holaaaaaa");

// VARIABLES GLOBALES QUE GUARDAN EL AUDIO Y DURACION
/*var elementoAudio = document.getElementById("archivoAudio");
var duracionAudio = elementoAudio.duration;*/

var elementoAudio;
var duracionAudio;

window.onload = function(){
    elementoAudio = document.getElementById("archivoAudio");
    duracionAudio = elementoAudio.duration;
} 
console.log(elementoAudio);
console.log(duracionAudio);

// *** FUNCIONES PARA BOTONES ***
function reproducir(){
    elementoAudio.play();
}

function pausar(){
    elementoAudio.pause();
}

function parar(){
    //elementoAudio.load();
    elementoAudio.currentTime = 0;
    elementoAudio.pause();
}

function subirVolumen(){
    
    if(elementoAudio.volume < 1){
        elementoAudio.volume += 0.2;    
    }
}

function bajarVolumen(){
    if(elementoAudio.volume >= 0.1){
        elementoAudio.volume -= 0.2;
    }
}

function avanzar(){
    elementoAudio.currentTime += 5;
}

function retroceder(){
    elementoAudio.currentTime -= 5;
}

// *** PARA MOVER BARRA DE PROGRESO Y ENVIAR AL RELOJ EL TIEMPO TRANSCURRIDO ***
function barraProgreso(){
    var barraProgreso = document.getElementById("barraProgreso");
    barraProgreso.value = elementoAudio.currentTime;
    barraProgreso.max = duracionAudio;
    
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