// querySelector
const heading = document.querySelector('.header__text h2'); // retorna 0 o 1 elemntos
heading.textContent = 'Nuevo Heading';
console.log(heading);




// querySelectorAll
const enlaces = document.querySelectorAll('.navegation a');
enlaces[0].textContent = 'Nuevo Texto para Enlace';
enlaces[0].classList.add('nueva-clase');
// enlaces[0].classList.remove('navegacion_enlace');

// Generar un nuevo enlace
const nuevoEnlace = document.createElement('A')

// Agregar el href
nuevoEnlace.href = 'nuevo-enlace.html';
// Agregar el texto
nuevoEnlace.textContent = 'tienda virtual';
// Agregar la clase
nuevoEnlace.classList.add('navegacion__enlace');


// Agregarlo al documento
const navegation = document.querySelector('.navegation');
navegation.appendChild(nuevoEnlace);





// Event Listener


console.log(nuevoEnlace);



// Eventos

// console.log(1);

// window.addEventListener('Load', function() {  // load espera a que el javascript y los archivos que dependen del html esten listos
//   console.log(2);
// });

// window.onload = function() {
//   console.log(3);
// }

// document.addEventListener('DOMContentLoaded', function() { // solo espera a que se descargue el html no css ni imagenes
//   console.log(4);
// })




// console.log(5);

// window.onscroll = function(evento) {
//   console.log(evento)
// }


// Seleccionar elementos y asociarles un evento
// const btnEnviar = document.querySelector('.button--primary');
// btnEnviar.addEventListener('click', function(event) {
//  console.log(event);
//  event.preventDefault();


// // Validar un formulario



// console.log('enviando formulario')
// })


// Eventos de los inputs y textarea

const datos = {
  name: '',
  email: '',
  message: '',
}

const name = document.querySelector('#name')
const email = document.querySelector('#email')
const message = document.querySelector('#message')
const formulario = document.querySelector('.formulario')

name.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
message.addEventListener('input', leerTexto);


function leerTexto(e) {
  // console.log(e.target.value);

datos[e.target.id] = e.target.value

console.log(datos);
}

// El evento de submit
formulario.addEventListener('submit', function(evento) {
  evento.preventDefault();


  // Validar el formulario

const { name, email, message } = datos;

if(name === '' || email === '' || message === '' ) {
  mostrarError('Todos los campos son obligatorios')

  

  

  return; // Corta la ejecucion del codigo
}

  // Enviar el formulario

  // console.log('Enviando Formulario')

  function mostrarAlerta(mensaje) {
    const alerta = document.createElement('P')
    alerta.textContent = mensaje;
  }




// Muestra un error en pantalla
function mostrarError(message) {


  error.classList.add('error');

  formulario.appendChild( error );


// Desaparezca despues de 5 segundos 
setTimeout(() => {
  error.remove();
}, 5000);
}


// Crear la alerta de enviar correctamente


mostrarAlerta('Enviado Correctamente')

function exitoso(message) {


  exitoso.classList.add('exitoso');

  formulario.appendChild( exitoso );


// Desaparezca despues de 5 segundos 
setTimeout(() => {
  exitoso.remove();
}, 5000);
}

});
