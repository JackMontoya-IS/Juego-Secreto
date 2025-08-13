let numeroSecreto;
let intentos = 1;
let listaNumerosAleatorios = [];
let numeroMaximo = 10;

/* Forma larga de representar una función que asigna un texto a un elemento HTML
let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un número del 1 al 10';*/
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
//Usé una function para asignar un evento al botón
console.log(`Número secreto: ${numeroSecreto}`);
function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos == 1) ? 'intento.' : 'intentos.'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');}
        else {
            if (numeroUsuario > numeroSecreto) {
                asignarTextoElemento('p', 'El número secreto es menor');}
                else {
                    asignarTextoElemento('p', 'El número secreto es mayor');
                }
        }
        intentos++;
        limpiarCaja();
    console.log(`Número de intentos: ${intentos}`);
   
}
function limpiarCaja() {
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = '';
}

function generarNumeroAleatorio() {
    let numeroGenerado = Math.floor(Math.random() *numeroMaximo)+1; //No hace falta generar una variable al usar el return y tener una variable arriba
    if (listaNumerosAleatorios.length == numeroMaximo) {
        asignarTextoElemento('p', 'No quedan más números por generar');
        
    }
    else {
    
    if (listaNumerosAleatorios.includes(numeroGenerado)) {
        //console.log(listaNumerosAleatorios);
        return generarNumeroAleatorio();
    } else {
        listaNumerosAleatorios.push(numeroGenerado);
        console.log(numeroGenerado);
        console.log('Lista de numeros generados:', listaNumerosAleatorios);
        return numeroGenerado;
    }}
}

function condicionesIniciales(){ 
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo} por favor`);
    numeroSecreto = generarNumeroAleatorio();
    intentos = 1;
    console.log(`Número secreto ${numeroSecreto}`);
}

function reiniciarJuego() { 
    //limpiar caja
    limpiarCaja();
    //Indicar las condiciones del juego
    //Gererar un nuevo número secreto
    //Reiniciar el contador de intentos 
    condicionesIniciales();
    //Deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', true);
}

let inputUsuario = document.getElementById('valorUsuario');
inputUsuario.addEventListener('keydown', function(evento) {
    if (evento.key === 'Enter') {
    verificarIntento();
    }});

condicionesIniciales();