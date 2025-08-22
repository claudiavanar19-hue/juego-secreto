let numeroSecreto = 0;
let intento = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignartextoElemento(elemento, texto) {
let elementoHTML = document.querySelector(elemento);
elementoHTML.innerHTML = texto;
return;
}

function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
  
  if (numeroDeUsuario === numeroSecreto) {
      asignartextoElemento('p',`Acertaste el número en ${intento} ${(intento === 1) ? 'vez' : 'veces'}`);
      document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
    //El usuario no acertó.
    if (numeroDeUsuario > numeroSecreto) {
        asignartextoElemento('p','El número secreto es menor');
    } else {
    asignartextoElemento('p','El número secreto es mayor');
    }
    intento++;
    limpiarCaja();
  }
  return;
}

function limpiarCaja() {
  document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

  console.log(numeroGenerado);
  console.log(listaNumerosSorteados);
  //si ya sorteamos todos los números
  if (listaNumerosSorteados.length == numeroMaximo) {
      asignartextoElemento('p','Ya se sortearon todos los números posibles');
  } else {

  }
      //Si el número generado está incluido en la lista

      if (listaNumerosSorteados.includes(numeroGenerado)) {
          return generarNumeroSecreto();
      } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
      }
    }

function condicionesIniciales() {
  asignartextoElemento('h1', 'Juego del número secreto!');
  asignartextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
  numeroSecreto = generarNumeroSecreto();
  intento = 1;
}

function reiniciarJuego() {
  //limpiar caja
  limpiarCaja();
  //Indicar mensaje de intervalo de números
  //Generar número aleatorio
  //Inicializar el número de intentos
  condicionesIniciales();
  //Deshabilitar el botón de nuevo juego
  document.querySelector('#reiniciar').setAttribute('disabled',true);

}

condicionesIniciales();