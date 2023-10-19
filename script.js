function calcularFactorial()
{const inputNumber = parseFloat(document.getElementById('num').value);
let resultado=1;
for(let i=1; i<=inputNumber;i++){

     resultado= resultado*i;
    }
    const resultadoMostrar = document.getElementById('mostrarResultado');
    resultadoMostrar.textContent = `El factorial de ${inputNumber} es:  ${resultado}`
}