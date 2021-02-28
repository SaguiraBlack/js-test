'use-strict'

/*** CALCULATE AREAS AND PERIMETRES ****/
const pi = Math.PI;
/** Initializating variables **/
/* Circle */
let circleArea = 0;
let circlePerimeter = 0;
/* Square */
let squareArea = 0;
let squarePerimeter = 0;
/* Triangle */
let triangleArea = 0;
let trianglePerimeter = 0;

/* ARROW FUNCTIONS */
/* Calculating areas and perimeters */
let calculateCircleArea = (cicrcleRadius) => pi * (cicrcleRadius ** 2);
let calculateCirclePerimeter = (cicrcleRadius) => 2 * pi * cicrcleRadius;
let calculateSquareArea = (squareSide) => squareArea = squareSide ** 2;
let calculateSquarePerimeter = (squareSide) => squarePerimeter = 4 * squareSide;
let calculateTriangleArea = (triangleBase) => triangleArea = (Math.sqrt(3) * (triangleBase ** 2) / 4);
let calculateTrianglePerimeter = (triangleBase) => trianglePerimeter = 3 * triangleBase;

/* FUNCTIONS */
/* Calculating and showing the area and perimeter of a circle */
function getCircleResults(){
    let cicrcleRadius = Number(document.getElementById("circulo").value);
    if(validateValue(cicrcleRadius)){
        alert(`El área del círculo es ${calculateCircleArea(cicrcleRadius).toFixed(5)}\nEl perímetro del círculo es ${calculateCirclePerimeter(cicrcleRadius).toFixed(5)}`);
    }
}

/* Calculating and showing the area and perimeter of a square */
function getSquareResults(){
    let squareSide = document.getElementById("cuadrado").value;
    if(validateValue(squareSide)){
        calculateSquareArea(squareSide);
        calculateSquarePerimeter(squareSide);
        alert(`El área del cuadrado es ${squareArea}\nEl perímetro del square es ${squarePerimeter}`);
    } 
}

/* Calculating and showing the area and perimeter of a triangle */
function getTriangleResults(){
    let triangleBase = document.getElementById("trianguloBase").value;
    if(validateValue(triangleBase)){
        calculateTriangleArea(triangleBase, triangleHeight);
        calculateTrianglePerimeter(triangleBase);
        alert(`El área del triángulo es ${triangleArea}\nEl perímetro del triángulo es ${trianglePerimeter}`);
    }
}

/* A function to clean the inputs */
function cleanFieldsFigures(){
    cleanFields("circulo");
    cleanFields("cuadrado");
    cleanFields("trianguloBase");
}

/* A function to validate the value. Can't use negative numbers or an empty field */
function validateValue(figureValue){
    if(figureValue === 0){
        alert(`El campo está vacío o ingresaste un 0`);
        return false;
    }
    else if(figureValue < 0){
        alert(`No se puede usar números negativos`);
        return false;
    }
    else{
        return true;
    }
}

/*** FINDING COINCIDENCES IN A PHRASE ***/
/** ARROW FUNCTIONS **/
/* Get string and clean fields. Clean fields is used for the figure inputs too */
let getString = (id) => document.getElementById(id).value;
let cleanFields = (id) => document.getElementById(id).value = "";

/** FUNCTIONS **/
/* Finding coincidences through the string */
function recorrerStringCharacter(frase, character){
    let coincidences = 0;
    for(i = 0; i < frase.length; i++){
        if(frase.charAt(i) === character){
            coincidences++;
        }
    }
    return coincidences;
}

/* Finding vowels through the string */
function recorrerStringVowels(frase){
    let coincidences = 0;
    for(i = 0; i < frase.length; i++){
        if(frase.charAt(i) === 'a' || frase.charAt(i) === 'e' || frase.charAt(i) === 'i' || frase.charAt(i) === 'o' || frase.charAt(i) === 'u'){
            coincidences++;
        }
    }
    return coincidences;
}

/* Show the coincidences obtaining the string and the character */
function findCoincidences(){
    let character = getString("character");
    let frase = getString("frase");
    alert(`Las coincidencias de "${character}" son: ${recorrerStringCharacter(frase,character)}`);
}

/* Show the coincidences obtaining the string */
function findVowels(){
    let frase = getString("frase2");
    frase = frase.toLowerCase();
    alert(`Las vocales encontradas son: ${recorrerStringVowels(frase)}`);
}

/* A function to clean the inputs */
function cleanFieldsFrase(){
    cleanFields("frase");
    cleanFields("character");
    cleanFields("frase2");
}

/*** CONVERTING A DECIMAL NUMBER INTO A BINARY NUMBER ***/
/** Initializating variables **/
let aux = "";

/** FUNCTIONS **/
/* Converting into binary getting the string and showing the result */
function convertToBinary(){
    let decimalNumber = getString("decimal");
    if(validateDecimal(decimalNumber)){
        divideDecimal(decimalNumber);
        let binaryNumber = [...aux].reverse().join('');
        alert(`El número binario de ${decimalNumber} es: ${binaryNumber}`);
    }
}

/* Validate if the number is not negative */
function validateDecimal(decimalNumber){
    if(decimalNumber < 0){
        alert(`No se puede usar números negativos`);
        return false;
    }
    else{
        return true;
    }
}

/* Dividing the number to obteing the binary */
function divideDecimal(decimalNumber){
    let int = parseInt(decimalNumber, 10);
    let residue = 0;
    while(int !== 0){
        residue = int % 2;
        int = parseInt((int / 2), 10);
        residue = residue.toString();
        aux = aux + residue;
        console.log(`Entero: ${int}`);
        console.log(`Residuo: ${residue}`);
        console.log(`Aux: ${aux}`);
        console.log(`***************`);
    }
    return aux;
}

/* Clean the input */
function cleanFieldsNumbers(){
    cleanFields("decimal");
}

function changeColor(boton){
    setTimeout(function(){ alert("Hello"); }, 3000);
    boton.style.background = "#F7D358";
    console.log(`Si sirvo`);
}