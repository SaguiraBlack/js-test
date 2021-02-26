'use-strict';

/* An alert that indicates the title of the program */
alert("Calculadora sencilla");

/* Initialized variables */
let repeticion = 1;
let opcion = 0;
let numero1 = 0;
let numero2 = 0;
let resultado = 0;

/** Basic calculator functions **/
/* Sum */
let suma = (numero1, numero2) => resultado = numero1 + numero2;
/* Substraction */
let resta = (numero1, numero2) => resultado = numero1 - numero2;
/* Multiplication */
let multiplicacion = (numero1, numero2) => resultado = numero1 * numero2;
/* Division */
let division = (numero1, numero2) => resultado = numero1 / numero2;

/* Function to show the menu */
function mostrarMenu(opcion){
    opcion = prompt("Elige una operación\n1. Suma\n2. Resta \n3.Multiplicación\n4.División");
    opcion = Number(opcion);
    return opcion;
}

/* Function to ask for the numbers */
function pedirNumeros(){
    numero1 = window.prompt("Ingresa el primer número");
    /* Parsing to number number1 */
    numero1 = Number(numero1);
    console.log(numero1);
    /* Receiving the second number with a prompt */
    numero2 = window.prompt("Ingresa el segundo número");
    /* Parsing to number number2 */
    numero2 = Number(numero2);
    console.log(numero2);
}

/* Function to print the result */
function imprimirResultado(){
    alert("El resultado es: "+resultado);
    console.log(resultado);
}

/* After the while, will ask for repeat the program */
while(repeticion === 1){
    opcion = mostrarMenu(opcion);
    /* A switch case to do de operation based on the chosen option */
    switch(opcion){
        case 1:
            /* Sum */
            pedirNumeros();
            suma(numero1,numero2);
            imprimirResultado();
            break;
        case 2:
            /* Substraction */
            pedirNumeros();
            resta(numero1,numero2);
            imprimirResultado();
            break;
        case 3:
            /* Multiplication */
            pedirNumeros();
            multiplicacion(numero1,numero2);
            imprimirResultado();
            break;
        case 4:
            /* Division */
            pedirNumeros();
            division(numero1,numero2);
            imprimirResultado();
            break;
        default:
            alert("Opción no válida. Elige una opción correcta.");
            break;
    }

    /* Asking for repetition with a prompt */
    repeticion = window.prompt("¿Deseas repetir?\n1. Si\n2. No");
    /* Parsing to number repeticion */
    repeticion = Number(repeticion);
}