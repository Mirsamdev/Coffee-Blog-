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
nuevoEnlace.href = 'nuevo-enlace.html';
// Agregar la clase
nuevoEnlace.classList.add('navegacion_enlace');


// Agregarlo al documento
const navegation = document.querySelector('.navegation');
navegation.appendChild(nuevoEnlace)





// Event Listener


console.log(nuevoEnlace);





// getElementID