const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result')

btn.addEventListener('click', btnOnClick); 
// el btn esta relacionado al boton de html, el addeventlistener espera el 'click' para ejecutar la fucnion btnOnClick (no hay que poner los parentesis de funcion)


function btnOnClick(){
    const sumaInputs = Number(input1.value)  + +input2.value; 

    //si agregas el "+" justo antes de las variables, convierte los strings en numeros , tambien se puede hacer con Number()

    pResult.innerText = "Resultado: " + sumaInputs; // muestra el resultado en pResult - asignado al <p> con el ID result
}

