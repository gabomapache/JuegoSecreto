let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados =[];
let numeroMaximo = 10;

//función asignar texto a elemento
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
//función intento de usuario
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);// input colecta como string, se usa parseint() para obtener numero entero
    if (numeroSecreto===numeroDeUsuario){
    asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ?'vez':'veces'}`);
    document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //el usuario no acertó
    if(numeroDeUsuario > numeroSecreto){
        asignarTextoElemento('p','El número secreto es menor')
    } else{
        asignarTextoElemento('p','El número secreto es mayor')
    }
    intentos++;
    limpiarcaja();
   }
   return;
}
    
function limpiarcaja() {
    document.querySelector('#valorUsuario').value = '';
  
}

function generarNumeroSecreto() {
   let numeroGenerado = parseInt(Math.random()*numeroMaximo)+1;
   console.log(numeroGenerado);
   console.log(listaNumerosSorteados);
   // ya se sortearon los números
   if(listaNumerosSorteados.length==numeroMaximo){
    asignarTextoElemento('p','Ya se sortearon todos los números posibles')
   } else{
    //si el número generado está incluido en la lista 

        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}
function condicionesInicailes() {
    asignarTextoElemento('h1','Juego del número secreto');//mensaje titulo
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);//mensajepárrafo
    numeroSecreto = generarNumeroSecreto();//generar numero secreto sin el let
    intentos = 1; // reiniciar el conteo de intentos
}

function reiniciarJuego(){
    //limpiar la caja
    limpiarcaja();
    //condiciones iniciales del juego
    condicionesInicailes();
// desabilitar el botón de nuevo juego
document.getElementById('reiniciar').setAttribute('disabled','true');
}

condicionesInicailes();
