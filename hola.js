'use-strict';

/* An alert that indicates the title of the program */
alert("Calculadora sencilla");
/* Initialized variable to confirm the repetition of the program */
let repeticion=1;

while(repeticion==1){
    /* Receiving the first number with a prompt */
    let numero1 = window.prompt("Ingresa el primer número");
    /* Parsing to number number1 */
    numero1 = Number(numero1);
    console.log(numero1);
    /* Receiving the second number with a prompt */
    let numero2 = window.prompt("Ingresa el segundo número");
    /* Parsing to number number2 */
    numero2 = Number(numero2);
    console.log(numero2);

    /* Options shown in console */
    console.log("1. Suma");
    console.log("2. Resta");
    console.log("3. Multiplicación");
    console.log("4. División");

    /* Receiving the option to choose an operation with a prompt */
    let opcion = prompt("Elige una operación");
    /* Parsing to number the option */
    opcion = Number(opcion);
    /* Initialized variable for the result */
    let resultado = 0;
    console.log(opcion);

    /* A switch case to do de operation based on the chosen option */
    switch(opcion){
        case 1:
            /* Sum */
            resultado = numero1+numero2;
            break;
        case 2:
            /* Substraction */
            resultado = numero1-numero2;
            break;
        case 3:
            /* Multiplication */
            resultado = numero1*numero2;
            break;
        case 4:
            /* Division */
            resultado = numero1/numero2;
            break;
    }
    console.log(resultado);

    /* An alert showing the result */
    alert("El resultado es: "+resultado);
    /* Asking for repetition with a prompt */
    repeticion = window.prompt("¿Deseas repetir? 1. Si   2. No");
    /* Parsing to number repeticion */
    repeticion = Number(repeticion);
}




