'use-strict';

/* An alert that indicates the title of the program */
alert("Calculadora sencilla");
/* Initialized variable to confirm the repetition of the program */
let repeticion = 1;

let opcion = 0;

let numero1 = 0;
let numero2 = 0;

let resultado = 0;

let suma = (numero1, numero2) => resultado = numero1 + numero2;
    /* Substraction */
    let resta = (numero1, numero2) => resultado = numero1 - numero2;
    /* Multiplication */
    let multiplicacion = (numero1, numero2) => resultado = numero1 * numero2;
    /* Division */
    let division = (numero1, numero2) => resultado = numero1 / numero2;

function mostrarMenu(opcion){
    opcion = prompt("Elige una operación\n1. Suma\n2. Resta \n3.Multiplicación\n4.División");
    opcion = Number(opcion);
    return opcion;
}

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

function imprimirResultado(){
    alert("El resultado es: "+resultado);
    console.log(resultado);
}

while(repeticion === 1){

    //let opcion = 0;

    /*function mostrarMenu(opcion){
         opcion = prompt("Elige una operación\n1. Suma\n2. Resta \n3.Multiplicación\n4.División");
        return opcion;
    }*/

    

    //mostrarMenu();
    /* Receiving the first number with a prompt */
    /*numero1 = window.prompt("Ingresa el primer número");
    /* Parsing to number number1 */
   // numero1 = Number(numero1);
   // console.log(numero1);
    /* Receiving the second number with a prompt */
//    let numero2 = window.prompt("Ingresa el segundo número");
    /* Parsing to number number2 */
 //   numero2 = Number(numero2);
  //  console.log(numero2);

    /* Options shown in console */
    

    

    /* Receiving the option to choose an operation with a prompt */
    /*let opcion = prompt("Elige una operación\n1. Suma\n2. Resta \n3.Multiplicación\n4.División");*/
    /* Parsing to number the option */

    opcion = mostrarMenu(opcion);
    pedirNumeros();

    
    /* Initialized variable for the result */
    //let resultado = 0;
    //console.log(opcion);

    /* Basic calcuator functions */
    /* Sum */
    

    /* A function with an alert showing the result, in valid cases */
    /*function imprimirResultado(){
        alert("El resultado es: "+resultado);
        console.log(resultado);
    }*/

    /* A switch case to do de operation based on the chosen option */
    switch(opcion){
        case 1:
            /* Sum */
            suma(numero1,numero2);
            imprimirResultado();
            break;
        case 2:
            /* Substraction */
            resta(numero1,numero2);
            imprimirResultado();
            break;
        case 3:
            /* Multiplication */
            multiplicacion(numero1,numero2);
            imprimirResultado();
            break;
        case 4:
            /* Division */
            division(numero1,numero2);
            imprimirResultado();
            break;
        default:
            alert("Opción no válida. Elige una opción correcta.");
            mostrarMenu();
            break;
    }
    
    /* Asking for repetition with a prompt */
    repeticion = window.prompt("¿Deseas repetir?\n1. Si\n2. No");
    /* Parsing to number repeticion */
    repeticion = Number(repeticion);
}




