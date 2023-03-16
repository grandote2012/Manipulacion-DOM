const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafo = document.querySelector('.parrafoClase');
const pid = document.querySelector('#parrafoId');
const input = document.querySelector('input');

console.log({
    h1, p, parrafo, pid, input
});

console.log(input.value);

//-------------Modificar HTML desde JS--------------------------

h1.innerHTML = 'cambio de <br> titulo'; // esto cambia el titulo e interpreta en html lo que escribo
h1.innerText = 'cambio de <br> titulo'; // esto cambia el titulo e interpreta en html lo que escribo

console.log(h1.getAttribute('class')); // obtiene la clase del titulo h1
h1.setAttribute('class', 'cambioClase');// cambia la clase de h1 a "cambioClase"

h1.classList.add('claseNueva'); //Agrega "claseNueva"
h1.classList.remove('claseNueva'); //remueve "claseNueva"

input.value = "1234"; //setea el value en 1234 del input

//--Agregar una imagen al parrafo que tiene ID---------------------

const img = document.createElement('img'); //creo la variable imagen

img.setAttribute('src',' https://img.a.transfermarkt.technology/portrait/big/28003-1671435885.jpg?lm=1 '); //Cargo la imagen en la variabl

pid.append(img); // esto carga EN el HTML la imagen

//------------------------------------------------------------------