'use-strict';

alert("Calculadora sencilla");
let numero1 = window.prompt("Ingresa un número");
console.log(numero1);
let numero2 = window.prompt("Ingresa otro número");
console.log(numero2);


console.log("1. Suma");
console.log("2. Resta");
console.log("3. Multiplicación");
console.log("4. División");


let opcion = prompt("Elige una operación");
opcion = Number(opcion);
let resultado;
console.log(opcion);


switch(opcion){
    case 1:
        resultado = numero1+numero2;
        break;
    case 2:
        resultado = numero1-numero2;
        break;
    case 3:
        resultado = numero1*numero2;
        break;
    case 4:
        resultado = numero1/numero2;
        break;
}
console.log(resultado);

let imprimirResultado = alert("El resultado es: "+resultado);



