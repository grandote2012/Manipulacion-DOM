const h1 = document.querySelector('h1');
const form = document.querySelector('#formulario'); // agrego el form
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result')


form.addEventListener('submit', sumarInputValues); // del "form" busco el evento submit

function sumarInputValues(event){
    event.preventDefault(); // nota al pie
    const sumaInputs = Number(input1.value)  + +input2.value; 
    pResult.innerText = "Resultado: " + sumaInputs; 
}

// especificamente cuando trabajamos con formularios , los mismos toman al ultimo boton creado como un boton de submit, estos tienen la cualidad de generar automaticamente un refresh de la pagina , como aceptando que el formulario se lleno y se "envia"........para evitar esto y que funcione nuestra calculadora , tenemos que detener ese proceso, lo hacemos con "event.preventDefault();" ..... event es enviado por .addEventListener, al pedirle que atienda el submit , te envia la info de event.



//otra manera de solucionar este problema , es decirle a nuestro ultimo boton que tipo de boton es, si nosotros le agregamos type=button ... va a ser un boton comun y corriente , no un boton de submit