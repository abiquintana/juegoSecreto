let numeroSecreto=0;
let intentos=0;
let listaNumSorteados=[];
let numMax= 10;

function asignarTextoElemento(elemento,texto){
let elementoHTML = document.querySelector(elemento);
elementoHTML.innerHTML = texto;
return;
}

function verificarIntento(){
    let numUsuario = parseInt(document.getElementById("valorUsuario").value);
 
    if (numUsuario === numeroSecreto){
        asignarTextoElemento("p",`Acertaste el número en ${intentos} ${intentos === 1 ? "vez":"veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }else {
        //no acertó
        if (numUsuario>numeroSecreto){
        asignarTextoElemento("p", "El número secreto es menor");
    }else{
        asignarTextoElemento("p", "El número secreto es mayor");
    }
    intentos++;
    limpiarCaja();
    }
    return;
}

function generarNumeroSecreto () {
    let num= Math.floor(Math.random()*10)+1;
    

    //si ya se sortearon todos los números

    if(listaNumSorteados.length==numMax){
        asignarTextoElemento("p","Ya se sortearon todos los números posibles.")
    }else{
    // si el num esta incluido en la lista
    if (listaNumSorteados.includes(num)){
        return generarNumeroSecreto();
    }else{
        listaNumSorteados.push(num);
        return num;
    }
    }
}

function limpiarCaja (){
   document.querySelector("#valorUsuario").value=""; //limpia la caja 
   
}

function condicionesIniciales (){
asignarTextoElemento("h1","Juego del número secreto");
asignarTextoElemento("p",`Indica un número del 1 al ${numMax} `);
numeroSecreto=generarNumeroSecreto();
  console.log(numeroSecreto);
intentos=1;
}
function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de inicio
    //generar el número aleatorio
    //inicianizar número de intentos
     condicionesIniciales();
    //deshabilitar el botón de nuevo Juego
    document.querySelector("#reiniciar").setAttribute("disabled","true");
}


condicionesIniciales();