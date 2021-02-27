'use-strict'

const pi = Math.PI;
/* Initializating variables */
let areaCirculo = 0;
let perimetroCirculo = 0;

let calcularAreaCirculo = (radioCirculo) => areaCirculo = pi*(radioCirculo**2);
let calcularPerimetroCirculo = (radioCirculo) => areaCirculo = 2*pi*radioCirculo;

function obtenerDatoArea(){
    let radioCirculo = document.getElementById("circulo").value;
    console.log(radioCirculo);
    areaCirculo = calcularAreaCirculo(radioCirculo);
    alert(`El área del círculo es ${areaCirculo}`);
}

function obtenerDatoPerimetro(){
    let radioCirculo = document.getElementById("circulo").value;
    console.log(radioCirculo);
    perimetroCirculo = calcularPerimetroCirculo(radioCirculo);
    alert(`El perímetro del círculo es ${perimetroCirculo}`);
}




/* Calcular areas circulo, cuadrado, triandulo */


/*function calcularArea(){
    let radioCirculo = document.getElementById("circulo");
    console.log(radioCirculo);
    radioCirculo = Number(radioCirculo);
    console.log(radioCirculo);
    areaCirculo(radioCirculo);
    alert(`El area del círculo es ${areaCirculo}`);
}*/
/* encontrar coincidencias de una letra en una frase */

/* encontrar las vocales de una frase */

/* crud */